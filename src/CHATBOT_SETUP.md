## 🤖 Chatbot Widget (Sacred Cities Assistant)

Is project me ek floating chatbot widget add kiya gaya hai jo Varanasi, Prayagraj aur Ayodhya ke travel Q&A provide karta hai.

### Enable karne ke steps

1) OpenRouter API key set karein (frontend-only use; production me proxy recommended):

Project root me `.env.local` file banayein:

```
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
```

Dev server restart karein (`npm run dev`).

2) Chatbot sab pages par bottom-right floating button (🕉️) ke through open hoga.

3) Agar key nahi milegi to widget friendly warning message show karega aur model call skip karega.

### Custom Knowledge Base
Default RAG data bundle hota hai (`react-widget 2/react-widget/rag-data.json` se). Custom dena ho to:

```jsx
<ChatbotWidget apiKey={import.meta.env.VITE_OPENROUTER_API_KEY} knowledgeBaseUrl="/my-rag.json" />
```

`my-rag.json` ka shape:

```json
{
  "questions": ["Q1", "Q2"],
  "answers": ["A1", "A2"],
  "embeddings": [ /* flat float array (N * 384) */ ]
}
```

### Security Note
Frontend me direct key expose hone se abuse risk rahta hai. Rate limiting / server proxy use karein agar public deploy kar rahe hain.
