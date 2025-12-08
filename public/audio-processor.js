/**
 * AudioWorklet Processor for capturing and buffering microphone audio
 * Processes audio in fixed-size chunks (20-40ms) for stable latency
 */
class AudioCaptureProcessor extends AudioWorkletProcessor {
    constructor() {
        super();

        // Buffer configuration
        // 24kHz * 0.03s = 720 samples per chunk (30ms chunks)
        this.chunkSize = 720;
        this.buffer = [];

        // Volume detection for commit triggers
        this.silenceThreshold = 0.01;
        this.silenceSamples = 0;
        this.silenceDuration = 480; // ~20ms of silence triggers commit

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

            // Track silence for smart commits
            if (Math.abs(inputChannel[i]) < this.silenceThreshold) {
                this.silenceSamples++;
            } else {
                this.silenceSamples = 0;
            }

            // Buffer full - send chunk
            if (this.buffer.length >= this.chunkSize) {
                this.sendChunk(false);
            }

            // Silence detected - commit pending audio
            if (this.silenceSamples >= this.silenceDuration && this.buffer.length > 0) {
                this.sendChunk(true);
                this.silenceSamples = 0;
            }
        }

        return true;
    }

    sendChunk(shouldCommit) {
        if (this.buffer.length === 0) return;

        // Convert Float32 to PCM16
        const pcm16 = new Int16Array(this.buffer.length);
        for (let i = 0; i < this.buffer.length; i++) {
            const s = Math.max(-1, Math.min(1, this.buffer[i]));
            pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }

        // Send to main thread
        this.port.postMessage({
            audio: pcm16.buffer,
            shouldCommit: shouldCommit,
            sampleCount: pcm16.length
        }, [pcm16.buffer]); // Transfer buffer for efficiency

        // Clear buffer
        this.buffer = [];
    }

    flushBuffer() {
        if (this.buffer.length > 0) {
            this.sendChunk(true);
        }
    }
}

registerProcessor('audio-capture-processor', AudioCaptureProcessor);
