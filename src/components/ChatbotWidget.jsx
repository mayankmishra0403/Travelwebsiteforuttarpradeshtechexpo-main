// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import './ChatbotWidget.css';
import { pipeline, cos_sim } from '@xenova/transformers';

// Lightweight, drop-in chat widget. Expects an OpenRouter API key via props.
// knowledgeBaseUrl should point to a JSON file with { questions[], answers[], embeddings[] }.
const ChatbotWidget = ({ 
  apiKey, // Pass via import.meta.env.VITE_OPENROUTER_API_KEY from the app
  knowledgeBaseUrl = undefined // optional; we fallback internally
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: `🙏 Namaste! I'm your specialized travel assistant for <strong>Varanasi, Prayagraj, and Ayodhya</strong>.
<br><br>
I can help you with:
<br>✨ Tourist attractions & temples
<br>🍲 Local food & delicacies
<br>🏛️ Historical sites & culture
<br>🎯 Travel tips & recommendations
<br><br>
Ask me anything about these sacred destinations!`,
      sender: 'bot',
      hasKnowledge: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [ragData, setRagData] = useState(null);
  const [extractor, setExtractor] = useState(null);
  const [stats, setStats] = useState({ faqs: 0, conversations: 0 });
  const messagesEndRef = useRef(null);

  // Load RAG data and embedding pipeline
  useEffect(() => {
    const loadData = async () => {
      try {
        const loadedExtractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        setExtractor(loadedExtractor);

  // Prefer provided knowledgeBaseUrl; else use bundled file URL
  const kbUrl = knowledgeBaseUrl || new URL('../../react-widget 2/react-widget/rag-data.json', import.meta.url).href;
  const response = await fetch(kbUrl);
        if (response.ok) {
          const data = await response.json();
          setRagData(data);
          setStats({ faqs: data.questions?.length || 0, conversations: 0 });
        }
      } catch (error) {
        console.error('Error loading RAG data or pipeline:', error);
      }
    };
    loadData();
  }, [knowledgeBaseUrl]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const searchRAG = async (query, topK = 3) => {
    if (!extractor || !ragData) return { context: '', hasKnowledge: false };

    const queryEmbedding = await extractor(query, { pooling: 'mean', normalize: true });
    const scores = [];
    const dbEmbeddings = ragData.embeddings || [];
    const embeddingSize = 384; // all-MiniLM-L6-v2

    for (let i = 0; i < dbEmbeddings.length; i += embeddingSize) {
      const chunk = dbEmbeddings.slice(i, i + embeddingSize);
      const similarity = cos_sim(queryEmbedding.data, chunk);
      scores.push({ index: i / embeddingSize, score: similarity });
    }

    scores.sort((a, b) => b.score - a.score);
    const topResults = scores.slice(0, topK);

    let context = '';
    let hasKnowledge = false;
    if (topResults.length > 0 && topResults[0].score > 0.7) {
      hasKnowledge = true;
      context = 'Relevant Information:\n';
      topResults.forEach(result => {
        context += `Q: ${ragData.questions?.[result.index]}\nA: ${ragData.answers?.[result.index]}\n\n`;
      });
    }
    return { context, hasKnowledge };
  };

  const callAI = async (message, context) => {
    // Resolve API key from prop, then env
    let resolvedApiKey = apiKey;
    try {
      if (!resolvedApiKey && import.meta && import.meta.env) {
        resolvedApiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      }
    } catch (e) { /* no-op for SSR or bundlers without import.meta */ }
    if (!resolvedApiKey && typeof window !== 'undefined') {
      resolvedApiKey = window.VITE_OPENROUTER_API_KEY;
    }
    if (!resolvedApiKey) {
      return '⚠️ API key not configured. Please set VITE_OPENROUTER_API_KEY to enable answers.';
    }

    const systemPrompt = `You are a specialized travel assistant ONLY for Varanasi, Prayagraj, and Ayodhya regions in India.

STRICT RULES:
1. ONLY answer questions about: Varanasi, Prayagraj, Ayodhya, their attractions, food, culture, history, travel tips.
2. Use the "Relevant Information" provided below as your PRIMARY source to answer the user's question.
3. If the provided information is not sufficient, you can use your general knowledge but MUST stay within the defined topics.
4. NEVER answer questions outside these topics (politics, general knowledge, other cities, etc.).
5. If asked about anything else, politely state that you can only provide information about Varanasi, Prayagraj, and Ayodhya.
6. Keep answers focused, informative, and tourist-friendly.

${context}

Based ONLY on the information above, answer the user's question accurately and helpfully.`;

    const basePayload = {
      model: 'meta-llama/llama-3.2-3b-instruct:free',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 500
    };

    const attemptRequest = async (payload) => {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resolvedApiKey}`,
          'HTTP-Referer': window.location.href,
          'X-Title': 'Sacred Cities Travel Chatbot',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      return response;
    };

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    let attempt = 0;
    let lastError = null;
    let payload = basePayload;
    const maxAttempts = 3;
    const fallbackModel = 'qwen/qwen2.5-1.5b-instruct';

    while (attempt < maxAttempts) {
      try {
        const response = await attemptRequest(payload);
        const rateLimitRemaining = response.headers.get('x-ratelimit-remaining');
        if (response.status === 429) {
          // Exponential backoff
          const wait = (attempt + 1) * 1000;
          console.warn(`Rate limited (429). Retrying in ${wait}ms...`);
          attempt++;
          // On second attempt switch to fallback smaller model to reduce quota usage
          if (attempt === 2) {
            payload = { ...payload, model: fallbackModel };
          }
          await sleep(wait);
          continue;
        }
        const data = await response.json();
        if (response.ok && data.choices && data.choices[0]) {
          return data.choices[0].message.content;
        } else {
          lastError = data.error || 'Unknown response error';
          break;
        }
      } catch (err) {
        lastError = err;
        attempt++;
        const wait = (attempt + 1) * 1200;
        console.warn(`AI request failed. Attempt ${attempt}/${maxAttempts}. Retrying in ${wait}ms`);
        await sleep(wait);
      }
    }
    console.error('AI API Error:', lastError);
    return null;
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      content: message,
      sender: 'user',
      hasKnowledge: false
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setIsLoading(true);
    const loadingMessage = {
      id: messages.length + 2,
      content: '🤔 Thinking<span class="loading-dots"></span>',
      sender: 'bot',
      isLoading: true
    };
    setMessages(prev => [...prev, loadingMessage]);

    try {
      const { context, hasKnowledge } = await searchRAG(message);
      const response = await callAI(message, context);
      setMessages(prev => prev.filter(msg => !msg.isLoading));

      if (response) {
        const botMessage = {
          id: messages.length + 2,
          content: response,
          sender: 'bot',
          hasKnowledge: hasKnowledge
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        const errorMessage = {
          id: messages.length + 2,
          content: "❌ Failed to get response. Please try again.",
          sender: 'bot',
          isError: true
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => prev.filter(msg => !msg.isLoading));
      const errorMessage = {
        id: messages.length + 2,
        content: "❌ Network error. Please check your connection.",
        sender: 'bot',
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`chatbot-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        <span className="chatbot-icon">🕉️</span>
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="chatbot-widget active">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-stats">
              FAQs: {stats.faqs}
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
            <h3>🕉️ Sacred Cities Guide</h3>
            <p>Varanasi • Prayagraj • Ayodhya</p>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chatbot-message ${message.sender} ${message.isLoading ? 'chatbot-loading' : ''} ${message.isError ? 'chatbot-error-msg' : ''}`}
              >
                <div
                  className="chatbot-message-content"
                  dangerouslySetInnerHTML={{ __html: message.content }}
                />
                {message.hasKnowledge && (
                  <span className="chatbot-knowledge-badge">✓ Knowledge</span>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-container">
            <div className="chatbot-input-row">
              <input
                type="text"
                className="chatbot-input"
                placeholder="Ask about Varanasi, Prayagraj, or Ayodhya..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                autoComplete="off"
              />
              <button
                className="chatbot-send-btn"
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
