# AI Chatbot Widget – Figma Design & Dev Handoff

This document translates the existing React widget into a clear design specification for Figma and a lightweight implementation guide for developers.

Use it to build a pixel-accurate UI in Figma and ensure smooth handoff to code.

---

## 1) Overview

- Purpose: Floating AI chatbot for travel assistance focused on Varanasi, Prayagraj, and Ayodhya.
- Behaviors: Floating toggle button opens a chat panel with header, messages, and input area. Supports “thinking/loading” state, error state, and a Knowledge badge when answers are backed by the RAG knowledge base.
- Files of interest:
  - `ChatbotWidget.jsx` – component logic and structure
  - `ChatbotWidget.css` – visual styles
  - `rag-data.json` – RAG knowledge data generated from `knowledge.json`
  - `generate-embeddings.js` – script to build embeddings from `knowledge.json`

---

## 2) Widget Anatomy (Figma Components)

Create these as Figma components with variants where noted.

1. Floating Button
   - Size: 60×60 (mobile: 55×55)
   - Position: Fixed, bottom 20px, right 20px (mobile: bottom 15px, right 15px)
   - Shape: Circular (border radius 50%)
   - Default Fill: Linear gradient 135° from #667EEA → #764BA2
   - Active Fill (when chat open): Linear gradient 135° from #F093FB → #F5576C
   - Icon: “🕉️” glyph (font size 30px desktop, 26px mobile), white
   - Shadow: 0 4 12 rgba(0,0,0,0.3); hover scale 1.1 and stronger shadow
   - Variant states: default, hover, active

2. Chat Panel (Container)
   - Size: 400×600 (desktop), 100%×100% on mobile (<768px)
   - Position: Fixed, bottom 90px, right 20px (desktop); full-screen on mobile
   - Corner radius: 20px (0 on mobile full-screen)
   - Background: White (#FFFFFF)
   - Shadow: 0 10 40 rgba(0,0,0,0.2)
   - Entry: slide-up (opacity 0→1, translateY 20→0)

3. Header
   - Height: Auto; padding 20px
   - Background: Linear gradient 135° #667EEA → #764BA2
   - Title: “🕉️ Sacred Cities Guide”, font 18px, weight 600, color #FFFFFF
   - Subtitle: “Varanasi • Prayagraj • Ayodhya”, font 12px, color #FFFFFF, opacity 0.9
   - Close button: 30×30 circular button, top-right 15px; white text “×”; hover: slightly brighter
   - Stats badge (optional): top-left 10px from top, 15px from left; text “FAQs: {n}”, font 11px, color #FFFFFF, opacity 0.8

4. Message List
   - Background: #F8F9FA
   - Padding: 20px
   - Vertical spacing between messages: 15px
   - Message types: user (right-aligned) and bot (left-aligned)
   - Message bubble
     - Max width: 80% of panel width
     - Radius: 18px
     - Font: 14px, line height ~1.4
     - User bubble: gradient fill #667EEA → #764BA2; text #FFFFFF
     - Bot bubble: white with 1px border #E0E0E0; text #333333
   - Knowledge Badge (bot only, optional)
     - Label: “✓ Knowledge”
     - Background: #28A745; text: #FFFFFF
     - Font: 10px; padding: 2×6; radius: 10; margin-left: 5
   - States/Variants:
     - Normal message
     - Loading (see below)
     - Error (see below)

5. Input Area
   - Container: padding 15px, border-top 1px solid #E0E0E0, background white
   - Layout: horizontal row with 10px gap
   - Text input
     - Flexible width
     - Padding: 12×16
     - Border: 2px solid #E0E0E0; radius: 25px
     - Focus border color: #667EEA
     - Font: 14px
   - Send button
     - Padding: 12×20, radius 25px
     - Fill: gradient #667EEA → #764BA2; text white
     - Font: 14px, weight 600
     - Disabled state: 60% opacity, no transform

6. Special States
   - Loading message (bot)
     - Style: bot bubble with text “🤔 Thinking …”
     - Optional animated dots in code; in Figma provide a “Loading” variant (three-dot frames or component animation prototype)
   - Error message (banner or bubble variant)
     - Error banner styles
       - Background: #F8D7DA; text: #721C24; border: 1px solid #F5C6CB; radius: 10; padding: 10; font: 13px
     - Success banner styles (if needed)
       - Background: #D4EDDA; text: #155724; border: 1px solid #C3E6CB; radius: 10; padding: 10; font: 13px

---

## 3) Design Tokens (Figma Styles)

Define these as color, typography, radius, spacing, and effect tokens.

- Colors
  - Primary/Gradient Start: `#667EEA`
  - Primary/Gradient End: `#764BA2`
  - Active/Alt Gradient Start: `#F093FB`
  - Active/Alt Gradient End: `#F5576C`
  - Surface: `#FFFFFF`
  - Surface/Alt: `#F8F9FA`
  - Border: `#E0E0E0`
  - Text/Primary: `#333333`
  - Success: `#28A745`
  - Error BG: `#F8D7DA`
  - Error Text: `#721C24`
  - Success BG: `#D4EDDA`
  - Success Text: `#155724`

- Typography
  - Title: 18px / 600 / White
  - Subtitle: 12px / 400 / White
  - Message: 14px / 400 / #333
  - Badge: 10px / 600 / White
  - Banner: 13px / 400

- Spacing
  - Panel padding: 20px
  - Header padding: 20px
  - Input area padding: 15px
  - Row gap: 10px
  - Message spacing: 15px
  - Fixed margins (desktop): button bottom/right 20px; panel bottom 90px; panel right 20px

- Radius
  - Button: 50%
  - Panel: 20px (0 on mobile full-screen)
  - Bubble: 18px
  - Input/Button: 25px
  - Badge: 10px

- Effects
  - Floating button shadow: 0 4 12 rgba(0,0,0,0.3) (hover: 0 6 16 rgba(0,0,0,0.4))
  - Panel shadow: 0 10 40 rgba(0,0,0,0.2)

---

## 4) Layout Specs

- Desktop
  - Floating button: bottom/right as above; 60px size
  - Panel: 400×600, fixed position; open state overlays content
- Mobile (<768px)
  - Floating button: 55px, bottom/right 15px
  - Panel: full-screen; corner radius 0

Auto-layout suggestions for Figma:
- Message list as vertical auto-layout with 15px spacing.
- User vs Bot message variants with alignment (right vs left). Use constraints to keep max width at 80% of container.
- Input row as horizontal auto-layout with gap 10px.

---

## 5) Interaction Spec (Prototyping)

- Open/Close
  - Tap floating button → open panel (slide-up animation)
  - Tap close “×” → close panel (return to button)
- Send flow
  - User types text; Send enabled only if non-empty and not loading
  - On send: show bot “Loading” message
  - When response arrives:
    - Replace loading with bot message
    - If response used knowledge base, show ✓ Knowledge badge
  - On error: replace loading with error banner

Keyboard
- Enter key sends; Shift+Enter adds newline (optional in prototype)

Accessibility
- All controls have accessible names (Toggle chatbot, Close chatbot, Send)
- Color contrast meets WCAG AA against backgrounds (verify gradients and text)

---

## 6) Content Guidelines

- Greeting (first bot message):
  - Copy: “Namaste! I’m your specialized travel assistant for Varanasi, Prayagraj, and Ayodhya …”
- Input placeholder: “Ask about Varanasi, Prayagraj, or Ayodhya…”
- Loading: “🤔 Thinking …”
- Error: “❌ Failed to get response. Please try again.” or “❌ Network error. Please check your connection.”

Localize copy as needed; keep tone helpful and tourist‑friendly.

---

## 7) Developer Notes (Implementation)

Component API (from `ChatbotWidget.jsx`)
- Props
  - `apiKey?: string` – OpenRouter API key; prefer passing via env variable; do not hardcode in source.
  - `knowledgeBaseUrl?: string` – URL to `rag-data.json` (default: `/rag-data.json`).
- Behavior
  - On mount, loads the feature extraction model (`Xenova/all-MiniLM-L6-v2`) and fetches the RAG data from `knowledgeBaseUrl`.
  - On send, computes embedding for query, retrieves top matching Q/A from RAG, and calls OpenRouter chat completions with a strict system prompt.
  - Displays ✓ Knowledge badge when confidence threshold is met (>0.7 cosine similarity).

Security
- Do NOT commit secrets. Use env vars and pass `apiKey` as a prop or read from `process.env` in your app wrapper.

RAG Data Pipeline
- Source: `knowledge.json` – expects `{ faqs: [{ question, answer }, …] }`
- Build: run `node generate-embeddings.js` → produces `rag-data.json` with shape:
  ```json
  {
    "questions": ["…"],
    "answers": ["…"],
    "embeddings": [0.123, -0.045, …] // flat array, length = 384 × numItems
  }
  ```
- In the widget, embeddings are chunked per 384 dims (MiniLM-L6-v2) and cosine similarity is computed to rank results.

Performance considerations
- First load downloads the transformer model in-browser; may take a few seconds on first run.
- Consider lazy-loading the model only after the panel opens (optimization).
- Keep `rag-data.json` reasonably sized to avoid large fetches.

Integration (React)
- Basic usage:
  ```jsx
  import ChatbotWidget from './ChatbotWidget';
  
  export default function App() {
    return (
      <>
        {/* your site */}
        <ChatbotWidget apiKey={process.env.REACT_APP_OPENROUTER_API_KEY} />
      </>
    );
  }
  ```
- Custom knowledge data:
  ```jsx
  <ChatbotWidget knowledgeBaseUrl="/rag-data.json" />
  ```

Hosting notes
- Ensure `rag-data.json` is publicly accessible at `knowledgeBaseUrl`.
- If using frameworks like Next.js/Vite, place it under `public/` or serve via API route.

---

## 8) Figma Deliverables Checklist

- [ ] Component: Floating Button (variants: default, hover, active)
- [ ] Component: Chat Panel (frame with header, messages, input)
- [ ] Component: Message Bubble (variants: user, bot, loading, error)
- [ ] Component: Knowledge Badge
- [ ] Styles: Color tokens, Typography tokens, Effects, Radius, Spacing
- [ ] Prototypes: Open/close flow, send flow including loading and error
- [ ] Mobile variants: full-screen panel, smaller button
- [ ] Export icon asset if replacing the emoji glyph

---

## 9) Visual Reference (from CSS)

Key values below are mapped directly from `ChatbotWidget.css` to ensure pixel parity:
- Button: 60×60, gradient #667EEA→#764BA2; active #F093FB→#F5576C; icon 30px; pulse animation (optional in Figma)
- Panel: 400×600; white; radius 20; shadow 0 10 40; slideUp animation
- Header: gradient #667EEA→#764BA2; title 18/600; subtitle 12; close 30×30
- Messages: bg #F8F9FA; bubbles 80% max width, radius 18; user gradient; bot white with #E0E0E0 border; badge #28A745
- Input: padding 15; input border 2px #E0E0E0 radius 25; send gradient #667EEA→#764BA2
- Mobile: panel full-screen; button 55×55 bottom/right 15; icon 26px

---

## 10) QA Scenarios

- Open/close quickly multiple times → no visual glitches
- Send empty input → button disabled
- Slow network → loading state persists, no layout shift
- No RAG data available → answer without ✓ Knowledge badge
- API error → error banner visible and readable

---

If you need this as a Figma FigJam note or want token JSON exported for a design system, let me know and I can generate those assets too.
