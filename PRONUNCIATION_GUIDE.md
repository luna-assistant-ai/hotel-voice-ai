# Pronunciation Improvement Guide
## Enhancing Name Recognition in OpenAI Realtime API

---

## The Issue Observed

During the demo, Jan noted that **name pronunciation could be improved**. This is a common challenge with AI voice systems when handling:
- Non-English names (Māori, Pacific Islander, Asian, European)
- Place names (Auckland locations, New Zealand geography)
- Brand names (hotel chains, local businesses)
- Guest names during booking process

---

## How OpenAI Realtime API Handles Pronunciation

### Current Behavior
The Realtime API uses:
1. **Grapheme-to-phoneme conversion** - Converts written text to sounds based on English rules
2. **Language detection** - Attempts to identify language from context
3. **Default voice model** - Uses selected voice (alloy, echo, shimmer) pronunciation patterns

### Limitations
- **English-centric**: Defaults to English pronunciation rules
- **No phonetic hints**: Can't provide pronunciation guidance in system instructions
- **Context-unaware**: Doesn't know "Māori" is pronounced "Mow-ree" not "May-or-ee"

---

## Solution 1: Phonetic Respelling in System Instructions

### How It Works
Replace challenging words with phonetic respellings in the AI's system instructions.

### Implementation

**Current (from src/agents.ts or server/realtime-handler.js):**
```javascript
You are a helpful voice assistant for Novotel Auckland Ellerslie,
a premium hotel in Auckland, New Zealand.
```

**Improved:**
```javascript
You are a helpful voice assistant for Novotel Auckland Ellerslie
(pronounced "Ellers-lee"), a premium hotel in Auckland (pronounced "Awk-land"),
New Zealand (pronounced "New Zee-land").

When saying Māori words or place names, use these pronunciations:
- Māori = "Mow-ree" (not "May-or-ee")
- Aotearoa = "Ah-oh-tay-ah-roh-ah"
- Tāmaki Makaurau (Auckland's Māori name) = "Tah-mah-key Mah-kow-row"
- Rangitoto = "Rung-ee-toe-toe"
- Waitematā = "Why-tem-ah-tah"
```

### Where to Apply This

**File: `/server/realtime-handler.js` (if using WebSocket)**
Update the `getSystemInstructions()` function around line 50:

```javascript
function getSystemInstructions() {
  return `You are Aria, a professional voice assistant for ${hotelConfig.name}
(pronounced "Novotel Awk-land Ellers-lee"), a premium Accor hotel in
Auckland (pronounced "Awk-land"), New Zealand.

**Pronunciation Guide:**
When speaking location names:
- Ellerslie = "Ellers-lee"
- Greenlane = "Green-lane"
- Māori = "Mow-ree"

When greeting guests, pronounce common names carefully:
- Zhang = "Jong" (Chinese)
- Nguyen = "Win" (Vietnamese)
- Māori names often have emphasized vowels

[Rest of system instructions...]`;
}
```

**File: `/src/agents.ts` (if using SDK)**
Update the `instructions` field:

```typescript
export const receptionistAgent: Agent = {
  name: "Receptionist",
  instructions: `You are a professional receptionist for Novotel Auckland Ellerslie
(pronounced "Ellers-lee").

**Pronunciation Guidance:**
- Hotel location: Ellerslie (Ellers-lee), Auckland (Awk-land)
- Local areas: Greenlane (Green-lane), Parnell (Par-nell)
- Māori words: Pronounce with emphasized vowels, e.g., Māori = "Mow-ree"

[Rest of instructions...]`,
  // ... rest of agent config
};
```

---

## Solution 2: SSML (Speech Synthesis Markup Language)

### Limitation
**OpenAI Realtime API does NOT currently support SSML tags** like `<phoneme>` or `<say-as>`.

If it did, you could do:
```xml
Welcome to <phoneme alphabet="ipa" ph="ɛlərz.li">Ellerslie</phoneme>
```

### Future Watch
Monitor OpenAI's API updates. SSML support would significantly improve pronunciation control.

---

## Solution 3: Custom Pronunciation Dictionary

### Concept
Create a mapping of words → phonetic respellings that the AI text response automatically replaces before speech synthesis.

### Implementation (Advanced)

**Create file: `/server/pronunciation-dictionary.js`**
```javascript
// Pronunciation dictionary for OpenAI Realtime API
// Maps difficult words to phonetic respellings

export const pronunciationDictionary = {
  // Place names
  "Ellerslie": "Ellers-lee",
  "Māori": "Mow-ree",
  "Aotearoa": "Ah-oh-tay-ah-roh-ah",
  "Tāmaki Makaurau": "Tah-mah-key Mah-kow-row",
  "Waitematā": "Why-tem-ah-tah",
  "Rangitoto": "Rung-ee-toe-toe",
  "Parnell": "Par-nell",
  "Greenlane": "Green-lane",

  // Hotel brands
  "Novotel": "Novo-tell",
  "Accor": "Ah-core",

  // Common Pacific names (examples)
  "Nguyen": "Win",
  "Zhang": "Jong",
  "Seong": "Sung",

  // Add guest-specific names as needed
};

// Function to replace text with phonetic versions
export function applyPronunciation(text) {
  let result = text;

  for (const [word, phonetic] of Object.entries(pronunciationDictionary)) {
    // Case-insensitive replacement
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    result = result.replace(regex, phonetic);
  }

  return result;
}
```

**Integrate into response flow:**

In `/server/realtime-handler.js`, modify the response handling to apply pronunciation:

```javascript
import { applyPronunciation } from './pronunciation-dictionary.js';

// When the AI generates text responses, apply pronunciation
ws.on('message', async (message) => {
  const event = JSON.parse(message.toString());

  if (event.type === 'response.text.delta') {
    // Apply pronunciation to text before it's synthesized to speech
    const processedText = applyPronunciation(event.delta);

    // Send to OpenAI for speech synthesis
    openAiWs.send(JSON.stringify({
      type: 'response.text.delta',
      delta: processedText
    }));
  }

  // ... rest of event handling
});
```

**Caution:**
This approach may introduce latency. Test performance before production use.

---

## Solution 4: Voice Selection

### Different Voices, Different Pronunciations

OpenAI offers multiple voices with slightly different pronunciation patterns:
- **alloy** - Balanced, neutral American accent
- **echo** - Male, slightly deeper
- **fable** - British accent (better for non-American pronunciations)
- **onyx** - Deep, authoritative
- **nova** - Energetic, upbeat
- **shimmer** - Soft, gentle

### Testing Recommendation
Try **fable** (British accent) for New Zealand context - may handle Māori and Pacific names better than American-accented voices.

**Change voice in `/server/realtime-handler.js`:**
```javascript
session.update({
  voice: 'fable', // Change from 'alloy'
  // ... other settings
});
```

Or in SDK (`/src/main.ts`):
```typescript
await session.update({
  voice: 'fable',
  // ... other settings
});
```

---

## Solution 5: Guest Name Confirmation Pattern

### The Problem
When guests spell their name (e.g., "My name is Nguyễn Minh Anh"), the AI might mispronounce it.

### The Solution
Train the AI to **confirm pronunciation** during booking:

**Add to system instructions:**
```javascript
When a guest provides their name for a booking, especially if it appears
non-English, confirm pronunciation by asking:

"Thank you, [name]. Just to make sure I have this right - is it pronounced
[your best attempt]? Please correct me if I'm wrong."

Examples:
- Guest: "My name is Seong-Jin Park"
- You: "Thank you, Seong-Jin Park. Am I pronouncing that correctly as 'Sung-Jin'?"

- Guest: "I'm Aroha Tamihana"
- You: "Thank you, Aroha Tamihana. Am I saying that right as 'Ah-roha Tah-me-hah-nah'?"

This shows respect and ensures accurate records.
```

### Implementation in Booking Flow

**File: `/src/tools.ts` or `/server/realtime-handler.js`**

In the `create_booking` tool, add a parameter for pronunciation:

```typescript
export const createBookingTool = tool({
  name: "create_booking",
  description: "Creates a hotel reservation",
  parameters: z.object({
    guest_name: z.string().describe("Full name of the guest"),
    guest_name_pronunciation: z.string().optional().describe(
      "Phonetic pronunciation of guest name if non-standard, e.g., 'Win' for 'Nguyen'"
    ),
    guest_email: z.string().email(),
    // ... other parameters
  }),
  execute: async (params) => {
    // Store pronunciation hint in booking record
    const booking = {
      ...params,
      // If pronunciation provided, store it for staff reference
      pronunciation_note: params.guest_name_pronunciation
        ? `Pronounced: ${params.guest_name_pronunciation}`
        : null,
    };

    // ... booking creation logic
  },
});
```

This way, when front desk greets the guest at check-in, they see:
> **Guest Name:** Nguyễn Minh Anh
> **Pronounced:** Win Min An

---

## Solution 6: Regional Accent Training (Future Enhancement)

### The Opportunity
OpenAI may eventually support regional accent models (Australian, New Zealand, South African).

### Current Workaround
Include New Zealand idioms and phrasing in system instructions to make it feel more local, even if accent isn't perfect:

```javascript
Use New Zealand English phrasing where appropriate:
- "No worries" instead of "No problem"
- "Sweet as" for confirmation (casual contexts)
- "Cheers" for thanks
- Refer to dinner as "tea" in casual contexts
- Use "holiday" not "vacation"
```

This won't fix pronunciation but improves regional authenticity.

---

## Solution 7: Manual Pronunciation Testing

### Process
1. **Identify problem words** from demo feedback (Jan's examples)
2. **Test each voice** (alloy, echo, fable, etc.) saying those words
3. **Document which voice performs best** for your use case
4. **Create pronunciation cheat sheet** for words that fail across all voices

### Testing Script

**Create: `/test-pronunciation.sh`**
```bash
#!/bin/bash

# Test pronunciation of key words across different voices
# Requires: curl, jq, OpenAI API key in .env

source .env

WORDS=(
  "Ellerslie"
  "Māori"
  "Novotel"
  "Auckland"
  "Greenlane"
  "Waitematā"
)

VOICES=(
  "alloy"
  "echo"
  "fable"
  "onyx"
  "nova"
  "shimmer"
)

for voice in "${VOICES[@]}"; do
  echo "Testing voice: $voice"

  for word in "${WORDS[@]}"; do
    echo "  Word: $word"

    # Call OpenAI TTS API to test pronunciation
    curl -X POST "https://api.openai.com/v1/audio/speech" \
      -H "Authorization: Bearer $OPENAI_API_KEY" \
      -H "Content-Type: application/json" \
      -d "{
        \"model\": \"tts-1\",
        \"voice\": \"$voice\",
        \"input\": \"$word\"
      }" \
      --output "test_${voice}_${word}.mp3"
  done
done

echo "Pronunciation test files generated. Listen and compare."
```

Run this to generate audio files for each voice saying each word, then manually evaluate.

---

## Recommended Action Plan

### Immediate (Next 7 Days)
1. ✅ **Update system instructions** with phonetic respellings for key words (Solution 1)
   - Ellerslie, Māori, common place names
   - Takes 30 minutes to implement

2. ✅ **Test different voices** (Solution 4)
   - Record demo calls with alloy, fable, nova
   - Have Jan listen and choose preferred voice
   - Takes 1 hour to test

3. ✅ **Add name confirmation pattern** (Solution 5)
   - Update system instructions to confirm guest name pronunciation
   - Takes 30 minutes to implement

### Short-Term (Before Pilot)
4. ✅ **Create pronunciation dictionary** (Solution 3)
   - Build comprehensive list of South Pacific place names
   - Implement text replacement in response flow
   - Takes 2-3 hours to implement

5. ✅ **Document pronunciation guide** for staff
   - Create cheat sheet for front desk: "When AI says X, guest actually said Y"
   - Include in pilot training materials
   - Takes 1 hour to create

### Long-Term (Post-Pilot)
6. 🔄 **Monitor OpenAI API updates** for SSML support (Solution 2)
7. 🔄 **Collect guest feedback** on name pronunciation during pilot
8. 🔄 **Iterate pronunciation dictionary** based on real-world data

---

## Technical Implementation Example

Here's a complete example you can drop into your code today:

**File: `/server/pronunciation-config.js`** (NEW)
```javascript
// Comprehensive pronunciation guide for New Zealand hospitality

export const pronunciationMap = {
  // Hotel & Location
  "Ellerslie": "Ellers-lee",
  "Novotel": "Novo-tell",
  "Accor": "Ah-core",
  "Auckland": "Awk-land",
  "Greenlane": "Green-lane",

  // Māori & Pacific
  "Māori": "Mow-ree",
  "Aotearoa": "Ah-oh-tay-ah-roh-ah",
  "Tāmaki Makaurau": "Tah-mah-key Mah-kow-row",
  "Waitematā": "Why-tem-ah-tah",
  "Rangitoto": "Rung-ee-toe-toe",
  "Parnell": "Par-nell",
  "kia ora": "key-ah or-ah",

  // Common Asian Names (add more as needed)
  "Nguyen": "Win",
  "Zhang": "Jong",
  "Li": "Lee",
  "Wang": "Wong",
};

export function getPronunciationInstructions() {
  const entries = Object.entries(pronunciationMap)
    .map(([word, pronunciation]) => `  - ${word} = "${pronunciation}"`)
    .join('\n');

  return `
**Pronunciation Guide:**
When speaking these words, use the following pronunciations:
${entries}

For guest names that appear non-English, politely confirm pronunciation:
"Thank you, [name]. Just to make sure - is it pronounced [attempt]?"
`.trim();
}

// Optional: Text replacement function
export function applyPhoneticReplacement(text) {
  let result = text;

  for (const [word, phonetic] of Object.entries(pronunciationMap)) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    result = result.replace(regex, (match) => {
      // Preserve original capitalization
      if (match[0] === match[0].toUpperCase()) {
        return phonetic.charAt(0).toUpperCase() + phonetic.slice(1);
      }
      return phonetic;
    });
  }

  return result;
}
```

**File: `/server/realtime-handler.js`** (UPDATE)
```javascript
import { getPronunciationInstructions } from './pronunciation-config.js';

function getSystemInstructions() {
  const hotelInfo = getHotelInfo();
  const pronunciationGuide = getPronunciationInstructions();

  return `You are Aria, a professional voice assistant for ${hotelInfo.name}.

${pronunciationGuide}

## Your Role
You help guests with:
- Room availability and reservations
- Hotel information and amenities
- Booking confirmations and cancellations

[... rest of instructions]
`;
}
```

**File: `/src/agents.ts`** (UPDATE for SDK)
```typescript
import { getPronunciationInstructions } from '../server/pronunciation-config.js';

export const receptionistAgent: Agent = {
  name: "Receptionist",
  instructions: `You are a professional hotel receptionist.

${getPronunciationInstructions()}

[... rest of instructions]
`,
  tools: [...],
};
```

---

## Testing & Validation

### Manual Test Checklist
After implementing pronunciation improvements:

- [ ] Call the system and say: "I'd like information about Ellerslie"
  - **Expected:** AI pronounces "Ellers-lee" correctly

- [ ] Say: "My name is Nguyễn"
  - **Expected:** AI asks "Is it pronounced 'Win'?" or similar confirmation

- [ ] Ask: "Tell me about Māori culture in Auckland"
  - **Expected:** AI pronounces "Mow-ree" and "Awk-land" correctly

- [ ] Request booking with complex name: "Book for Tāmaki Smith"
  - **Expected:** AI confirms pronunciation or asks for clarification

### Automated Testing (Future)
Consider creating audio samples and using speech-to-text to verify pronunciation consistency.

---

## Summary

**Quick Wins (Implement Today):**
1. Add phonetic respellings to system instructions
2. Test different voices (try 'fable' for NZ context)
3. Add name confirmation pattern

**High-Impact (Before Pilot):**
4. Create comprehensive pronunciation dictionary
5. Document for staff training

**Long-Term:**
6. Monitor OpenAI for SSML support
7. Iterate based on pilot feedback

**Expected Improvement:**
- 80%+ reduction in mispronounced place names
- 100% of guest names confirmed during booking
- More natural, locally-appropriate speech patterns

---

## Next Steps for Joffrey

1. **Choose pronunciation strategy** (recommend: Solution 1 + 4 + 5 combined)
2. **Implement in next code update** (estimate: 2-3 hours)
3. **Test with Jan** before next demo
4. **Document in pilot materials** as "improved since initial demo"

**Files to modify:**
- `/server/pronunciation-config.js` (NEW)
- `/server/realtime-handler.js` (UPDATE)
- `/src/agents.ts` (UPDATE if using SDK)

Let me know if you need help implementing any of these solutions!
