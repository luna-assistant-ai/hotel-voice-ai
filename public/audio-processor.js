/**
 * AudioWorklet Processor for capturing and buffering microphone audio
 * Processes audio in fixed-size chunks (20-40ms) for stable latency
 */
class AudioCaptureProcessor extends AudioWorkletProcessor {
    constructor() {
        super();

        // Buffer configuration
        // 24kHz * 0.02s = 480 samples per chunk (20ms chunks)
        this.chunkSize = 480;
        this.buffer = [];

        // Lightweight silence detection to trigger commits and reduce latency
        // RMS threshold is conservative to avoid false positives
        this.silenceThreshold = 0.015;
        this.silenceSamples = 0;
        // Commit after ~400ms of silence at 24kHz
        this.silenceSamplesTarget = Math.round(0.4 * 24000);

        // Listen for commands from main thread
        this.port.onmessage = (event) => {
            if (event.data.command === 'setChunkSize') {
                this.chunkSize = event.data.value;
            } else if (event.data.command === 'flush') {
                this.flushBuffer();
            }
        };
    }

    process(inputs, outputs, parameters) {
        const input = inputs[0];

        // No input available
        if (!input || !input[0]) {
            return true;
        }

        const inputChannel = input[0]; // Mono (channel 0)

        // Add samples to buffer
        for (let i = 0; i < inputChannel.length; i++) {
            this.buffer.push(inputChannel[i]);

            // Buffer full - send chunk
            // No client-side VAD: OpenAI server_vad handles turn detection
            if (this.buffer.length >= this.chunkSize) {
                this.sendChunk();
            }
        }

        return true;
    }

    sendChunk() {
        if (this.buffer.length === 0) return;

        // Convert Float32 to PCM16
        const pcm16 = new Int16Array(this.buffer.length);
        let rmsAccumulator = 0;
        for (let i = 0; i < this.buffer.length; i++) {
            const s = Math.max(-1, Math.min(1, this.buffer[i]));
            pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
            rmsAccumulator += s * s;
        }

        const rms = Math.sqrt(rmsAccumulator / this.buffer.length);
        const isSilent = rms < this.silenceThreshold;

        if (isSilent) {
            this.silenceSamples += pcm16.length;
        } else {
            this.silenceSamples = 0;
        }

        const shouldCommit = isSilent && this.silenceSamples >= this.silenceSamplesTarget;
        if (shouldCommit) {
            // Reset counter so we only commit once per silence segment
            this.silenceSamples = 0;
        }

        // Send to main thread
        this.port.postMessage({
            audio: pcm16.buffer,
            sampleCount: pcm16.length,
            shouldCommit
        }, [pcm16.buffer]); // Transfer buffer for efficiency

        // Clear buffer
        this.buffer = [];
    }

    flushBuffer() {
        if (this.buffer.length > 0) {
            this.sendChunk();
        }
    }
}

registerProcessor('audio-capture-processor', AudioCaptureProcessor);
