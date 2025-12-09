import { RealtimeSession, OpenAIRealtimeWebRTC } from '@openai/agents-realtime';
import { createSimpleConciergeAgent } from './agents.js';

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
      const apiKey =
        token.client_secret?.value ??
        token.client_secret?.secret ??
        token.client_secret ??
        token.value; // GA may return top-level value
      const model = token.model || 'gpt-4o-realtime-preview-2024-12-17';

      // Transport (WebRTC) - uses ephemeral client key
      this.transport = new OpenAIRealtimeWebRTC({
        apiKey,
        url: token.url, // optional, SDK defaults to OpenAI endpoint if undefined
      });

      // Create agent with full booking tools (SDK-compliant implementation)
      const agent = createSimpleConciergeAgent();

      // IMPORTANT: use SDK-expected signature new RealtimeSession(agent, options)
      this.session = new RealtimeSession(agent, {
        transport: this.transport,
        model,
        config: {
          inputAudioFormat: 'pcm16',
          outputAudioFormat: 'pcm16',
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

    // Text outputs (fallback if audio transcript events are not emitted)
    this.session.on('response.output_text.delta', (event: any) => {
      this.updateLastTranscript('assistant', event.delta, false);
    });

    this.session.on('response.output_text.done', (event: any) => {
      this.updateLastTranscript('assistant', event.output_text || event.transcript || '', true);
    });

    this.session.on('conversation.item.input_audio_transcription.completed', (event: any) => {
      this.addTranscript('user', event.transcript);
    });

    // Tool call events
    this.session.on('response.function_call_arguments.done', (event: any) => {
      console.log('🔧 Tool call:', event.name, event.arguments);
      this.addTranscript('system', `🔧 Using tool: ${event.name}`);
    });

    this.session.on('response.done', (event: any) => {
      if (event.response?.status === 'completed') {
        console.log('✅ Response completed');
      }
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

  removePlaceholder() {
    const first = this.transcriptContent.firstElementChild;
    if (first && first.textContent?.includes('Conversation will appear here')) {
      this.transcriptContent.removeChild(first);
    }
  }

  addTranscript(role: 'user' | 'assistant' | 'system', text: string) {
    this.removePlaceholder();
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
