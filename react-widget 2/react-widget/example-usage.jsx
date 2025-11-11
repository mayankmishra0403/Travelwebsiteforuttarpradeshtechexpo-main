import React from 'react';
import ChatbotWidget from './ChatbotWidget';

// ============================================
// EXAMPLE 1: Basic Usage (Simplest)
// ============================================

function BasicApp() {
  return (
    <div>
      <h1>My Travel Website</h1>
      <p>Welcome to Sacred Cities Tours!</p>
      
      {/* Just add the component - that's it! */}
      <ChatbotWidget />
    </div>
  );
}

// ============================================
// EXAMPLE 2: With Custom API Key
// ============================================

function AppWithCustomKey() {
  const myApiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
  
  return (
    <div>
      <h1>My Travel Website</h1>
      
      <ChatbotWidget apiKey={myApiKey} />
    </div>
  );
}

// ============================================
// EXAMPLE 3: With Custom Knowledge Base URL
// ============================================

function AppWithCustomKnowledge() {
  return (
    <div>
      <h1>My Travel Website</h1>
      
      <ChatbotWidget 
        knowledgeBaseUrl="/api/travel-knowledge.json"
      />
    </div>
  );
}

// ============================================
// EXAMPLE 4: Full React App Structure
// ============================================

import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Footer from './components/Footer';

function FullApp() {
  return (
    <>
      <Header />
      <Hero />
      <Destinations />
      <Footer />
      
      {/* Chatbot appears on all pages */}
      <ChatbotWidget />
    </>
  );
}

// ============================================
// EXAMPLE 5: With React Router (Multi-Page)
// ============================================

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function AppWithRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* Chatbot appears on ALL pages */}
      <ChatbotWidget />
    </BrowserRouter>
  );
}

// ============================================
// EXAMPLE 6: Conditional Rendering
// ============================================

function AppWithCondition() {
  const [showChatbot, setShowChatbot] = React.useState(true);
  
  return (
    <div>
      <h1>My Website</h1>
      
      <button onClick={() => setShowChatbot(!showChatbot)}>
        {showChatbot ? 'Hide' : 'Show'} Chatbot
      </button>
      
      {/* Only show chatbot when enabled */}
      {showChatbot && <ChatbotWidget />}
    </div>
  );
}

// ============================================
// EXAMPLE 7: In Layout Component (Next.js)
// ============================================

function Layout({ children }) {
  return (
    <div className="layout">
      <nav>
        {/* Your navigation */}
      </nav>
      
      <main>{children}</main>
      
      <footer>
        {/* Your footer */}
      </footer>
      
      {/* Chatbot in layout = appears on all pages */}
      <ChatbotWidget />
    </div>
  );
}

// ============================================
// EXAMPLE 8: With Context Provider
// ============================================

import { ThemeProvider } from './contexts/ThemeContext';

function AppWithContext() {
  return (
    <ThemeProvider>
      <div>
        <h1>My App</h1>
        {/* Your content */}
        
        <ChatbotWidget />
      </div>
    </ThemeProvider>
  );
}

// ============================================
// EXAMPLE 9: TypeScript Version
// ============================================

/*
// Save as ChatbotWidget.tsx

import React, { useState, useEffect, useRef, FC } from 'react';

interface ChatbotWidgetProps {
  apiKey?: string;
  knowledgeBaseUrl?: string;
}

const ChatbotWidget: FC<ChatbotWidgetProps> = ({ 
  apiKey = 'sk-or-v1-...',
  knowledgeBaseUrl = '/knowledge.json'
}) => {
  // ... component code
};

export default ChatbotWidget;
*/

// Usage in TypeScript:
function TypeScriptApp() {
  return (
    <div>
      <h1>TypeScript App</h1>
      <ChatbotWidget 
        apiKey="your-key"
        knowledgeBaseUrl="/knowledge.json"
      />
    </div>
  );
}

// ============================================
// EXAMPLE 10: With Lazy Loading
// ============================================

const ChatbotWidget = React.lazy(() => import('./components/ChatbotWidget'));

function AppWithLazyLoading() {
  return (
    <div>
      <h1>My Website</h1>
      {/* Your content */}
      
      {/* Lazy load chatbot for better initial page load */}
      <React.Suspense fallback={<div>Loading chat...</div>}>
        <ChatbotWidget />
      </React.Suspense>
    </div>
  );
}

// ============================================
// EXAMPLE 11: Multiple Instances
// ============================================

function AppWithMultipleChatbots() {
  return (
    <div>
      <section id="varanasi">
        <h2>Varanasi Section</h2>
        <ChatbotWidget knowledgeBaseUrl="/varanasi-kb.json" />
      </section>
      
      <section id="prayagraj">
        <h2>Prayagraj Section</h2>
        <ChatbotWidget knowledgeBaseUrl="/prayagraj-kb.json" />
      </section>
    </div>
  );
}

// ============================================
// EXAMPLE 12: With Custom Styling
// ============================================

function AppWithCustomStyling() {
  return (
    <div>
      <h1>My Website</h1>
      
      {/* Component uses CSS file for styling */}
      {/* Edit ChatbotWidget.css to customize */}
      <ChatbotWidget />
      
      {/* Or add inline styles to override */}
      <style>{`
        .chatbot-toggle-btn {
          bottom: 30px !important;
          right: 30px !important;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%) !important;
        }
      `}</style>
    </div>
  );
}

// ============================================
// EXAMPLE 13: In a Component Library
// ============================================

// components/index.js
export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as ChatbotWidget } from './ChatbotWidget';

// App.js
import { Header, Footer, ChatbotWidget } from './components';

function AppWithLibrary() {
  return (
    <>
      <Header />
      <main>{/* content */}</main>
      <Footer />
      <ChatbotWidget />
    </>
  );
}

// ============================================
// EXAMPLE 14: With Analytics Tracking
// ============================================

function AppWithAnalytics() {
  // You can extend the component to accept callbacks
  // For now, you can track via state or wrap the component
  
  return (
    <div>
      <h1>My Website</h1>
      <ChatbotWidget />
      
      {/* Add analytics script */}
      <script>
        {`
          // Track chatbot usage
          window.addEventListener('chatbot-opened', () => {
            gtag('event', 'chatbot_opened');
          });
        `}
      </script>
    </div>
  );
}

// ============================================
// EXAMPLE 15: Production Setup (Complete)
// ============================================

// App.jsx - Production Ready
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatbotWidget from './components/ChatbotWidget';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';

function App() {
  const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
  
  return (
    <BrowserRouter>
      <div className="app">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        {/* Chatbot - appears on all pages */}
        <ChatbotWidget 
          apiKey={apiKey}
          knowledgeBaseUrl="/knowledge.json"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

// .env file:
/*
REACT_APP_OPENROUTER_API_KEY=sk-or-v1-your-key-here
*/

// ============================================
// HOW TO USE THESE EXAMPLES
// ============================================

/*
1. Copy ChatbotWidget.jsx to your project
2. Copy ChatbotWidget.css to your project
3. Copy knowledge.json to your public folder
4. Choose an example above that fits your needs
5. Copy and adapt to your app structure
6. Import and use!

MOST COMMON USAGE (90% of cases):

function App() {
  return (
    <div>
      <YourContent />
      <ChatbotWidget />
    </div>
  );
}

That's it! ✨
*/

export default BasicApp;
