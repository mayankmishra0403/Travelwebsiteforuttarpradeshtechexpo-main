# 🚀 React Integration Guide

## Step-by-Step Guide to Integrate ChatbotWidget in Your React App

---

## 📋 Prerequisites

- ✅ React 16.8+ (Hooks support required)
- ✅ Node.js and npm installed
- ✅ Existing React project (CRA, Next.js, Vite, etc.)

---

## 🎯 Quick Integration (5 Minutes)

### Step 1: Copy Files

Copy these files to your React project:

```bash
# From the react-widget folder, copy to your project:

# Copy component
cp ChatbotWidget.jsx /path/to/your-project/src/components/

# Copy styles
cp ChatbotWidget.css /path/to/your-project/src/components/

# Copy knowledge base
cp knowledge.json /path/to/your-project/public/
```

### Step 2: Import in Your App

Open your main App file (`App.js` or `App.jsx`):

```jsx
import React from 'react';
import ChatbotWidget from './components/ChatbotWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Your existing components */}
      <header>
        <h1>Sacred Cities Tours</h1>
      </header>
      
      <main>
        {/* Your content */}
      </main>
      
      <footer>
        {/* Your footer */}
      </footer>
      
      {/* Add chatbot component */}
      <ChatbotWidget />
    </div>
  );
}

export default App;
```

### Step 3: Test It!

```bash
# Start your development server
npm start

# Or for Next.js
npm run dev

# Or for Vite
npm run dev
```

Open your browser and look for the 🕉️ icon in the bottom-right corner!

---

## 📁 Project Structure

After copying files, your structure should look like:

```
your-react-app/
├── public/
│   ├── index.html
│   └── knowledge.json          ← Knowledge base here
├── src/
│   ├── components/
│   │   ├── ChatbotWidget.jsx   ← Component here
│   │   ├── ChatbotWidget.css   ← Styles here
│   │   └── ... your other components
│   ├── App.js
│   └── index.js
└── package.json
```

---

## 🔧 Framework-Specific Instructions

### Create React App (CRA)

```bash
# 1. Copy files
mkdir -p src/components
cp ChatbotWidget.jsx src/components/
cp ChatbotWidget.css src/components/
cp knowledge.json public/

# 2. Edit src/App.js
```

```jsx
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  return (
    <div>
      {/* Your app content */}
      <ChatbotWidget />
    </div>
  );
}

export default App;
```

### Next.js (App Router)

```bash
# 1. Copy files
mkdir -p components
cp ChatbotWidget.jsx components/
cp ChatbotWidget.css components/
cp knowledge.json public/

# 2. Edit app/layout.js or app/layout.tsx
```

```jsx
import ChatbotWidget from '@/components/ChatbotWidget';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
```

### Next.js (Pages Router)

```bash
# 1. Copy files
mkdir -p components
cp ChatbotWidget.jsx components/
cp ChatbotWidget.css components/
cp knowledge.json public/

# 2. Edit pages/_app.js
```

```jsx
import ChatbotWidget from '../components/ChatbotWidget';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ChatbotWidget />
    </>
  );
}

export default MyApp;
```

### Vite

```bash
# 1. Copy files
mkdir -p src/components
cp ChatbotWidget.jsx src/components/
cp ChatbotWidget.css src/components/
cp knowledge.json public/

# 2. Edit src/App.jsx
```

```jsx
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  return (
    <>
      {/* Your app */}
      <ChatbotWidget />
    </>
  );
}

export default App;
```

---

## 🎨 Customization

### Use Environment Variables (Recommended for Production)

Create `.env` file in your project root:

```env
REACT_APP_OPENROUTER_API_KEY=sk-or-v1-your-key-here
```

Update your component usage:

```jsx
<ChatbotWidget 
  apiKey={process.env.REACT_APP_OPENROUTER_API_KEY}
/>
```

### Custom Knowledge Base Path

```jsx
<ChatbotWidget 
  knowledgeBaseUrl="/api/knowledge.json"
/>
```

### Change Chatbot Icon

Edit `ChatbotWidget.jsx`, find line with `chatbot-icon`:

```jsx
// Find this line (around line 314)
<span className="chatbot-icon">🕉️</span>

// Change to any emoji or icon:
<span className="chatbot-icon">💬</span>
<span className="chatbot-icon">🤖</span>
<span className="chatbot-icon">🗨️</span>
```

### Customize Colors

Edit `ChatbotWidget.css`:

```css
/* Find this section and change colors */
.chatbot-toggle-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Change to your brand colors */
    background: linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%);
}
```

---

## 🔄 With React Router

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatbotWidget from './components/ChatbotWidget';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      {/* Chatbot appears on ALL routes */}
      <ChatbotWidget />
    </BrowserRouter>
  );
}
```

---

## 🎯 Show Chatbot on Specific Pages Only

```jsx
import { useLocation } from 'react-router-dom';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  const location = useLocation();
  
  // Only show on certain paths
  const showChatbot = ['/', '/destinations', '/contact'].includes(location.pathname);
  
  return (
    <div>
      {/* Your routes */}
      
      {/* Conditional chatbot */}
      {showChatbot && <ChatbotWidget />}
    </div>
  );
}
```

---

## 🐛 Troubleshooting

### Issue: Chatbot Not Appearing

**Solution:**
1. Check if component is imported correctly
2. Verify CSS file is imported
3. Check browser console for errors
4. Ensure component is rendered in JSX

### Issue: Knowledge Base Not Loading

**Solution:**
1. Verify `knowledge.json` is in `/public` folder
2. Check browser Network tab
3. Try accessing `http://localhost:3000/knowledge.json` directly
4. Check path in `knowledgeBaseUrl` prop

### Issue: Styles Not Working

**Solution:**
1. Import CSS: `import './ChatbotWidget.css'` in component
2. Check for CSS naming conflicts
3. Use browser DevTools to inspect elements
4. Clear browser cache

### Issue: Module Not Found

**Solution:**
```bash
# Make sure paths are correct
# If using absolute imports, configure jsconfig.json or tsconfig.json

{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

---

## 📦 Adding to Existing Project Checklist

- [ ] Copy `ChatbotWidget.jsx` to `src/components/`
- [ ] Copy `ChatbotWidget.css` to `src/components/`
- [ ] Copy `knowledge.json` to `public/`
- [ ] Import component in App.js or layout
- [ ] Add `<ChatbotWidget />` to JSX
- [ ] Test in development mode
- [ ] Configure environment variables
- [ ] Test in production build
- [ ] Deploy!

---

## 🚀 Production Deployment

### Build Your App

```bash
# Create React App
npm run build

# Next.js
npm run build

# Vite
npm run build
```

### Environment Variables

Make sure to set environment variables in your hosting platform:

- **Vercel**: Add in Project Settings → Environment Variables
- **Netlify**: Add in Site Settings → Build & Deploy → Environment
- **Heroku**: Use `heroku config:set REACT_APP_OPENROUTER_API_KEY=...`

---

## 🎉 You're Done!

Your React app now has a professional AI chatbot! 

The chatbot will:
- ✅ Appear on all pages as a floating icon
- ✅ Answer questions about Varanasi, Prayagraj, and Ayodhya
- ✅ Search knowledge base first, then use AI
- ✅ Work on mobile and desktop
- ✅ Integrate seamlessly with your React app

---

## 📚 Additional Resources

- See `example-usage.jsx` for more integration patterns
- See `README.md` for component documentation
- Modify `ChatbotWidget.css` for custom styling
- Edit `knowledge.json` to update knowledge base

---

**Need Help?**

Check the examples in `example-usage.jsx` - there are 15+ different integration patterns!

**Happy Coding! 🚀**
