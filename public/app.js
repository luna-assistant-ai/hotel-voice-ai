class VoiceAssistant {
    constructor() {
        this.ws = null;
        this.audioContext = null;
        this.audioStream = null;
        this.audioWorkletNode = null;
        this.isConnected = false;
        this.isRecording = false;

        // Audio buffering and backpressure
        this.pendingAudioChunks = [];
        this.maxPendingChunks = 5; // Slightly larger to avoid aggressive drops
        this.maxBufferedBytes = 64 * 1024; // WebSocket bufferedAmount guardrail
        this.isSending = false;

        // Audio playback queue for smooth streaming
        this.audioPlaybackQueue = [];
        this.nextPlaybackTime = 0;
        this.isAssistantSpeaking = false;

        // Reconnection logic
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000; // Start at 1s
        this.shouldReconnect = true;
        this.intentionalDisconnect = false;

        // UI Elements
        this.connectBtn = document.getElementById('connectBtn');
        this.disconnectBtn = document.getElementById('disconnectBtn');
        this.statusIndicator = document.getElementById('statusIndicator');
        this.statusText = document.getElementById('statusText');
        this.transcriptContent = document.getElementById('transcriptContent');
        this.audioControls = document.getElementById('audioControls');
        this.volumeLevel = document.getElementById('volumeLevel');

        // Bind event listeners
        this.connectBtn.addEventListener('click', () => this.connect());
        this.disconnectBtn.addEventListener('click', () => this.disconnect());
    }

    async connect(isReconnect = false) {
        try {
            if (!isReconnect) {
                this.intentionalDisconnect = false;
                this.shouldReconnect = true;
                this.reconnectAttempts = 0;
            }

            this.updateStatus('Connecting...', 'connecting');
            this.connectBtn.disabled = true;

            // Get microphone access (reuse if already granted)
            if (!this.audioStream) {
                this.audioStream = await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true
                    }
                });
            }

            // Create audio context (reuse if exists and not closed)
            if (!this.audioContext || this.audioContext.state === 'closed') {
                this.audioContext = new AudioContext({ sampleRate: 24000 });
            }

            // Connect to WebSocket
            const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
            const wsUrl = `${protocol}//${window.location.host}`;

            this.ws = new WebSocket(wsUrl);

            this.ws.onopen = () => this.handleOpen();
            this.ws.onmessage = (event) => this.handleMessage(event);
            this.ws.onerror = (error) => this.handleError(error);
            this.ws.onclose = (event) => this.handleClose(event);

        } catch (error) {
            console.error('Connection error:', error);

            if (error.name === 'NotAllowedError' || error.name === 'NotFoundError') {
                this.addTranscript('system', '🎤 Microphone access is required. Please allow microphone permissions and try again.');
            } else {
                this.addTranscript('system', '⚠️ Connection failed. Retrying...');
                this.attemptReconnect();
            }

            this.updateStatus('Connection failed', 'error');
            if (!this.shouldReconnect) {
                this.connectBtn.disabled = false;
            }
        }
    }

    handleOpen() {
        console.log('Connected to server');
        this.isConnected = true;

        const wasReconnecting = this.reconnectAttempts > 0;
        this.reconnectAttempts = 0; // Reset reconnect counter on successful connection

        this.updateStatus('Connected - Listening...', 'connected');
        this.disconnectBtn.disabled = false;
        this.audioControls.style.display = 'block';

        if (wasReconnecting) {
            this.addTranscript('system', '✅ Reconnected successfully!');
        } else {
            this.addTranscript('system', '✅ Connected! The AI assistant is ready to help you make a reservation.');
        }

        // Start sending audio
        this.startAudioCapture();
    }

    attemptReconnect() {
        if (!this.shouldReconnect || this.intentionalDisconnect) {
            return;
        }

        if (this.reconnectAttempts >= this.maxReconnectAttempts) {
            this.addTranscript('system', '❌ Unable to reconnect. Please refresh the page and try again.');
            this.updateStatus('Connection lost', 'error');
            this.connectBtn.disabled = false;
            return;
        }

        this.reconnectAttempts++;
        const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1); // Exponential backoff

        this.updateStatus(`Reconnecting in ${Math.round(delay / 1000)}s... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`, 'connecting');

        setTimeout(() => {
            if (this.shouldReconnect && !this.intentionalDisconnect) {
                this.connect(true);
            }
        }, delay);
    }

    async startAudioCapture() {
        try {
            // Load AudioWorklet module
            await this.audioContext.audioWorklet.addModule('audio-processor.js');

            // Ensure audio context is running (required in some browsers)
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }

            // Create source and worklet node
            const source = this.audioContext.createMediaStreamSource(this.audioStream);
            this.audioWorkletNode = new AudioWorkletNode(this.audioContext, 'audio-capture-processor');

            // Volume meter
            const analyser = this.audioContext.createAnalyser();
            analyser.fftSize = 256;
            source.connect(analyser);

            const dataArray = new Uint8Array(analyser.frequencyBinCount);

            // Update volume meter
            const updateVolume = () => {
                if (!this.isConnected) return;

                analyser.getByteFrequencyData(dataArray);
                const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
                const percentage = Math.min(100, (average / 128) * 100);
                this.volumeLevel.style.width = `${percentage}%`;

                requestAnimationFrame(updateVolume);
            };
            updateVolume();

            // Connect audio graph
            source.connect(this.audioWorkletNode);
            // Keep node alive without feeding mic to speakers
            const muteGain = this.audioContext.createGain();
            muteGain.gain.value = 0;
            this.audioWorkletNode.connect(muteGain).connect(this.audioContext.destination);

            // Handle messages from AudioWorklet
            this.audioWorkletNode.port.onmessage = (event) => {
                this.handleAudioChunk(event.data);
            };

        } catch (error) {
            console.error('Error starting audio capture:', error);
            this.addTranscript('system', '❌ Failed to start audio capture. Please refresh and try again.');
        }
    }

    handleAudioChunk(data) {
        // Backpressure: drop chunks if too many pending or WS not ready
        if (this.pendingAudioChunks.length >= this.maxPendingChunks) {
            console.warn('Audio buffer full, dropping chunk');
            return;
        }

        if (!this.isConnected || !this.ws || this.ws.readyState !== WebSocket.OPEN) {
            return;
        }

        // Queue the chunk
        this.pendingAudioChunks.push(data);

        // Process queue
        this.processAudioQueue();
    }

    async processAudioQueue() {
        // Already processing
        if (this.isSending || this.pendingAudioChunks.length === 0) {
            return;
        }

        this.isSending = true;

        try {
            while (this.pendingAudioChunks.length > 0 &&
                   this.ws &&
                   this.ws.readyState === WebSocket.OPEN) {

                // WebSocket backpressure based on bufferedAmount
                if (this.ws.bufferedAmount > this.maxBufferedBytes) {
                    await new Promise(resolve => setTimeout(resolve, 5));
                    continue;
                }

                const chunk = this.pendingAudioChunks.shift();

                // Convert PCM16 to base64
                const base64Audio = this.arrayBufferToBase64(chunk.audio);

                // Send append message
                const appendMessage = {
                    type: 'input_audio_buffer.append',
                    audio: base64Audio
                };
                this.ws.send(JSON.stringify(appendMessage));

                // Small delay to avoid overwhelming the WebSocket
                await new Promise(resolve => setTimeout(resolve, 1));
            }
        } catch (error) {
            console.error('Error processing audio queue:', error);
        } finally {
            this.isSending = false;
        }
    }

    handleMessage(event) {
        try {
            const data = JSON.parse(event.data);
            console.log('Received:', data.type);

            switch (data.type) {
                case 'session.created':
                    console.log('Session created:', data.session.id);
                    break;

                case 'session.updated':
                    console.log('Session updated');
                    break;

                case 'response.audio_transcript.delta':
                    // AI is speaking - show partial transcript
                    this.updateLastTranscript('assistant', data.delta, false);
                    break;

                case 'response.audio_transcript.done':
                    // AI finished speaking - finalize transcript
                    this.updateLastTranscript('assistant', data.transcript, true);
                    break;

                case 'conversation.item.input_audio_transcription.completed':
                    // User speech transcription
                    this.addTranscript('user', data.transcript);
                    break;

                case 'response.audio.delta':
                    // Play audio response
                    if (data.delta) {
                        this.playAudio(data.delta);
                    }
                    break;

                case 'error':
                    console.error('Server error:', data.error);
                    this.addTranscript('system', `❌ Error: ${data.error.message}`);
                    break;
            }
        } catch (error) {
            console.error('Error handling message:', error);
        }
    }

    handleError(error) {
        console.error('WebSocket error:', error);
        this.addTranscript('system', '❌ Connection error occurred.');
    }

    handleClose(event) {
        console.log('Disconnected from server', event);
        this.isConnected = false;
        this.disconnectBtn.disabled = true;
        this.audioControls.style.display = 'none';

        // Clean up audio worklet (but keep other resources for reconnection)
        if (this.audioWorkletNode) {
            this.audioWorkletNode.disconnect();
            this.audioWorkletNode = null;
        }

        // Clear pending audio chunks
        this.pendingAudioChunks = [];
        this.isSending = false;
        this.audioPlaybackQueue = [];
        this.isAssistantSpeaking = false;
        this.updateAssistantSpeakingIndicator(false);

        if (this.intentionalDisconnect) {
            // User clicked disconnect
            this.updateStatus('Disconnected', 'disconnected');
            this.addTranscript('system', '👋 Disconnected. Thank you for using our service!');
            this.connectBtn.disabled = false;

            // Full cleanup on intentional disconnect
            if (this.audioStream) {
                this.audioStream.getTracks().forEach(track => track.stop());
                this.audioStream = null;
            }
            if (this.audioContext) {
                this.audioContext.close();
                this.audioContext = null;
            }
        } else {
            // Unexpected disconnect - attempt reconnection
            this.addTranscript('system', '⚠️ Connection lost. Reconnecting...');
            this.attemptReconnect();
        }
    }

    disconnect() {
        this.intentionalDisconnect = true;
        this.shouldReconnect = false;

        if (this.ws) {
            this.ws.close();
        }
    }

    updateStatus(text, state) {
        this.statusText.textContent = text;
        this.statusIndicator.className = 'status-indicator ' + state;
    }

    addTranscript(role, text) {
        const message = document.createElement('div');
        message.className = `transcript-message ${role}`;

        if (role !== 'system') {
            const label = document.createElement('strong');
            label.textContent = role === 'user' ? 'You' : 'Assistant';
            message.appendChild(label);
        }

        const content = document.createElement('span');
        content.textContent = text;
        message.appendChild(content);

        this.transcriptContent.appendChild(message);
        this.transcriptContent.scrollTop = this.transcriptContent.scrollHeight;
    }

    updateLastTranscript(role, text, finalize) {
        const messages = this.transcriptContent.querySelectorAll(`.transcript-message.${role}`);
        let lastMessage = messages[messages.length - 1];

        if (!lastMessage || (lastMessage && finalize)) {
            this.addTranscript(role, text);
        } else {
            const content = lastMessage.querySelector('span');
            if (content) {
                content.textContent = text;
            }
        }

        this.transcriptContent.scrollTop = this.transcriptContent.scrollHeight;
    }

    async playAudio(base64Audio) {
        try {
            const audioData = this.base64ToArrayBuffer(base64Audio);
            const pcm16 = new Int16Array(audioData);

            // Create an AudioBuffer from PCM16 (mono, 24kHz)
            const sampleRate = 24000;
            const audioBuffer = this.audioContext.createBuffer(1, pcm16.length, sampleRate);
            const channelData = audioBuffer.getChannelData(0);
            for (let i = 0; i < pcm16.length; i++) {
                channelData[i] = pcm16[i] / 0x8000; // convert to float32
            }

            // Add to queue for smooth playback
            this.audioPlaybackQueue.push(audioBuffer);
            this.processAudioPlaybackQueue();
        } catch (error) {
            console.error('Error decoding audio:', error);
        }
    }

    processAudioPlaybackQueue() {
        // Process all queued audio chunks
        while (this.audioPlaybackQueue.length > 0) {
            const audioBuffer = this.audioPlaybackQueue.shift();

            // Calculate when to play this chunk
            const currentTime = this.audioContext.currentTime;
            const playTime = Math.max(currentTime, this.nextPlaybackTime);

            // Create and schedule audio source
            const source = this.audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.audioContext.destination);

            // Track when assistant starts/stops speaking
            if (!this.isAssistantSpeaking) {
                this.isAssistantSpeaking = true;
                this.updateAssistantSpeakingIndicator(true);
            }

            source.onended = () => {
                // Check if more audio is coming
                setTimeout(() => {
                    if (this.audioPlaybackQueue.length === 0) {
                        this.isAssistantSpeaking = false;
                        this.updateAssistantSpeakingIndicator(false);
                    }
                }, 100);
            };

            source.start(playTime);

            // Update next playback time for gapless playback
            this.nextPlaybackTime = playTime + audioBuffer.duration;
        }
    }

    updateAssistantSpeakingIndicator(isSpeaking) {
        if (isSpeaking) {
            this.statusIndicator.classList.add('speaking');
        } else {
            this.statusIndicator.classList.remove('speaking');
        }
    }

    arrayBufferToBase64(buffer) {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }

    base64ToArrayBuffer(base64) {
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }
}

// Initialize the voice assistant when the page loads
window.addEventListener('DOMContentLoaded', () => {
    new VoiceAssistant();
});
