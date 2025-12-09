import { RealtimeSession, RealtimeAgent, OpenAIRealtimeWebRTC } from '@openai/agents-realtime';

// Temporary shim: some releases of agents-core lack getEnabledHandoffs; ensure it's defined.
(RealtimeAgent as any).prototype.getEnabledHandoffs = (RealtimeAgent as any).prototype.getEnabledHandoffs || function () { return []; };

async function fetchRealtimeToken(model = 'gpt-4o-realtime-preview-2024-12-17') {
  const res = await fetch('/api/realtime-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token fetch failed: ${res.status} ${text}`);
  }
  return res.json();
}

class VoiceAgent {
  session: RealtimeSession | null = null;
  transport: OpenAIRealtimeWebRTC | null = null;
  isConnected = false;

  // UI elements
  connectBtn = document.getElementById('connectBtn') as HTMLButtonElement;
  disconnectBtn = document.getElementById('disconnectBtn') as HTMLButtonElement;
  stopBtn = document.getElementById('stopBtn') as HTMLButtonElement;
  statusIndicator = document.getElementById('statusIndicator') as HTMLElement;
  statusText = document.getElementById('statusText') as HTMLElement;
  transcriptContent = document.getElementById('transcriptContent') as HTMLElement;

  constructor() {
    this.connectBtn.addEventListener('click', () => this.connect());
    this.disconnectBtn.addEventListener('click', () => this.disconnect());
    this.stopBtn.addEventListener('click', () => this.stopReply());
  }

  async connect() {
    try {
      this.updateStatus('Connecting...', 'connecting');
      this.connectBtn.disabled = true;

      const token = await fetchRealtimeToken();
      const apiKey = token.client_secret?.value ?? token.client_secret?.secret ?? token.client_secret;
      const model = token.model || 'gpt-4o-realtime-preview-2024-12-17';

      this.transport = new OpenAIRealtimeWebRTC({
        apiKey,
        url: token.url,
        useInsecureApiKey: true, // allow non-ek client secrets if needed
      });

      const instructions = `You are a premium hotel concierge for Auckland Grand Hotel.
Be concise, warm, and handle bookings, availability, and cancellations. Confirm details and prices.`;

      const agent = new RealtimeAgent({
        name: 'Concierge',
        instructions,
        tools: [], // tools can be added later if needed
      });

      this.session = new RealtimeSession({
        transport: this.transport,
        model,
        initialAgent: agent,
        config: {
          model,
          instructions,
          input_audio_format: { type: 'audio/pcm', rate: 24000 },
          output_audio_format: { type: 'audio/pcm', rate: 24000 },
          tools: [],
        },
      });

      this.bindEvents();
      await this.session.connect({});

      this.isConnected = true;
      this.disconnectBtn.disabled = false;
      this.stopBtn.disabled = false;
      this.addTranscript('system', '✅ Connected! Speak anytime (barge-in supported).');
      this.updateStatus('Connected - Listening...', 'connected');
    } catch (err: any) {
      console.error('Connection error:', err);
      this.addTranscript('system', `❌ Connection failed: ${err.message || err}`);
      this.updateStatus('Connection failed', 'error');
      this.connectBtn.disabled = false;
    }
  }

  bindEvents() {
    if (!this.session) return;

    this.session.on('response.audio_transcript.delta', (event: any) => {
      this.updateLastTranscript('assistant', event.delta, false);
    });

    this.session.on('response.audio_transcript.done', (event: any) => {
      this.updateLastTranscript('assistant', event.transcript, true);
    });

    this.session.on('conversation.item.input_audio_transcription.completed', (event: any) => {
      this.addTranscript('user', event.transcript);
    });

    this.session.on('error', (event: any) => {
      console.error('Realtime error:', event);
      this.addTranscript('system', `❌ ${event.error?.message || 'Realtime error'}`);
      this.updateStatus('Error', 'error');
    });
  }

  stopReply() {
    if (this.session) {
      // Interrupt current response
      this.session.interrupt();
      // Also cancel output if supported by transport
      this.session.sendMessage({ role: 'system', content: 'Stop' }, { response: { cancel: true } });
    }
  }

  disconnect() {
    if (this.session) {
      this.session.close();
      this.session = null;
    }
    if (this.transport) {
      this.transport.close();
      this.transport = null;
    }
    this.isConnected = false;
    this.disconnectBtn.disabled = true;
    this.stopBtn.disabled = true;
    this.updateStatus('Disconnected', 'disconnected');
    this.addTranscript('system', '👋 Disconnected.');
  }

  updateStatus(text: string, state: string) {
    this.statusText.textContent = text;
    this.statusIndicator.className = 'status-indicator ' + state;
  }

  addTranscript(role: 'user' | 'assistant' | 'system', text: string) {
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

  updateLastTranscript(role: 'assistant', text: string, finalize: boolean) {
    const messages = this.transcriptContent.querySelectorAll(`.transcript-message.${role}`);
    const last = messages[messages.length - 1];
    if (!last || finalize) {
      this.addTranscript(role, text);
    } else {
      const span = last.querySelector('span');
      if (span) span.textContent = text;
    }
    this.transcriptContent.scrollTop = this.transcriptContent.scrollHeight;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new VoiceAgent();
});
