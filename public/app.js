class VoiceAssistant {
    constructor() {
        this.ws = null;
        this.audioContext = null;
        this.audioStream = null;
        this.isConnected = false;
        this.isRecording = false;

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

    async connect() {
        try {
            this.updateStatus('Connecting...', 'connecting');
            this.connectBtn.disabled = true;

            // Get microphone access
            this.audioStream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                }
            });

            // Create audio context
            this.audioContext = new AudioContext({ sampleRate: 24000 });

            // Connect to WebSocket
            const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
            const wsUrl = `${protocol}//${window.location.host}`;

            this.ws = new WebSocket(wsUrl);

            this.ws.onopen = () => this.handleOpen();
            this.ws.onmessage = (event) => this.handleMessage(event);
            this.ws.onerror = (error) => this.handleError(error);
            this.ws.onclose = () => this.handleClose();

        } catch (error) {
            console.error('Connection error:', error);
            this.addTranscript('system', 'Failed to connect. Please check your microphone permissions and try again.');
            this.updateStatus('Connection failed', 'error');
            this.connectBtn.disabled = false;
        }
    }

    handleOpen() {
        console.log('Connected to server');
        this.isConnected = true;
        this.updateStatus('Connected - Listening...', 'connected');
        this.disconnectBtn.disabled = false;
        this.audioControls.style.display = 'block';

        this.addTranscript('system', '✅ Connected! The AI assistant is ready to help you make a reservation.');

        // Start sending audio
        this.startAudioCapture();
    }

    async startAudioCapture() {
        const source = this.audioContext.createMediaStreamSource(this.audioStream);
        const processor = this.audioContext.createScriptProcessor(4096, 1, 1);

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

        // Process and send audio
        source.connect(processor);
        processor.connect(this.audioContext.destination);

        processor.onaudioprocess = (e) => {
            if (!this.isConnected || !this.ws || this.ws.readyState !== WebSocket.OPEN) {
                return;
            }

            const inputData = e.inputBuffer.getChannelData(0);

            // Convert to Int16Array (PCM16)
            const pcm16 = new Int16Array(inputData.length);
            for (let i = 0; i < inputData.length; i++) {
                const s = Math.max(-1, Math.min(1, inputData[i]));
                pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
            }

            // Convert to base64
            const base64Audio = this.arrayBufferToBase64(pcm16.buffer);

            // Send to OpenAI
            const audioMessage = {
                type: 'input_audio_buffer.append',
                audio: base64Audio
            };

            this.ws.send(JSON.stringify(audioMessage));
        };
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

    handleClose() {
        console.log('Disconnected from server');
        this.isConnected = false;
        this.updateStatus('Disconnected', 'disconnected');
        this.connectBtn.disabled = false;
        this.disconnectBtn.disabled = true;
        this.audioControls.style.display = 'none';

        this.addTranscript('system', '⚠️ Disconnected from server.');

        // Clean up
        if (this.audioStream) {
            this.audioStream.getTracks().forEach(track => track.stop());
        }
        if (this.audioContext) {
            this.audioContext.close();
        }
    }

    disconnect() {
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
            const audioBuffer = await this.audioContext.decodeAudioData(audioData);

            const source = this.audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.audioContext.destination);
            source.start();
        } catch (error) {
            console.error('Error playing audio:', error);
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
