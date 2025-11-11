# 🕉️ Sacred Cities AI Chatbot - React Component

## Production-Ready React Component for Your Travel Website

This is a **complete React component** that you can drop into any React application.

---

## 📦 What's Included

```
react-widget/
├── ChatbotWidget.jsx        → Main React component
├── ChatbotWidget.css        → Component styles
├── knowledge.json           → Knowledge base (7000+ FAQs)
├── README.md               → This file
├── INTEGRATION-GUIDE.md    → Step-by-step integration
└── example-usage.jsx       → Usage examples
```

---

## ⚡ Quick Start (3 Steps)

### Step 1: Copy Files to Your React Project

Copy these 3 files to your React project:

```bash
# Copy to your components folder
cp ChatbotWidget.jsx /your-react-app/src/components/
cp ChatbotWidget.css /your-react-app/src/components/
cp knowledge.json /your-react-app/public/
```

### Step 2: Import and Use

```jsx
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  return (
    <div>
      {/* Your existing components */}
      <YourHeader />
      <YourContent />
      <YourFooter />
      
      {/* Add chatbot - that's it! */}
      <ChatbotWidget />
    </div>
  );
}
```

### Step 3: Done! 🎉

The chatbot will appear as a floating icon in the bottom-right corner!

---

## 🎯 Features

- ✅ **React Component** - Fully functional React component with hooks
- ✅ **TypeScript Ready** - Easy to convert to TypeScript
- ✅ **Customizable** - Props for API key, knowledge base URL
- ✅ **State Management** - Uses React hooks (useState, useEffect, useRef)
- ✅ **Auto-scroll** - Messages auto-scroll to bottom
- ✅ **Loading States** - Shows loading indicator while thinking
- ✅ **Error Handling** - Graceful error messages
- ✅ **Knowledge-First** - Searches local FAQs before calling AI
- ✅ **Topic Filtering** - Only answers about sacred cities
- ✅ **Mobile Responsive** - Works perfectly on all devices

---

## 📝 Component Props

```jsx
<ChatbotWidget 
  apiKey="your-openrouter-api-key"           // Optional: defaults included
  knowledgeBaseUrl="/knowledge.json"         // Optional: defaults to /knowledge.json
/>
```

### Props Details:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiKey` | string | (included) | Your OpenRouter API key |
| `knowledgeBaseUrl` | string | `/knowledge.json` | Path to knowledge base file |

---

## 🔧 Installation in Different React Setups

### Create React App (CRA)

```bash
# 1. Copy files
cp ChatbotWidget.jsx src/components/
cp ChatbotWidget.css src/components/
cp knowledge.json public/

# 2. Import in App.js
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  return (
    <>
      {/* Your app */}
      <ChatbotWidget />
    </>
  );
}
```

### Next.js

```bash
# 1. Copy files
cp ChatbotWidget.jsx components/
cp ChatbotWidget.css components/
cp knowledge.json public/

# 2. Import in your layout or page
import ChatbotWidget from '@/components/ChatbotWidget';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ChatbotWidget />
    </>
  );
}
```

### Vite

```bash
# 1. Copy files
cp ChatbotWidget.jsx src/components/
cp ChatbotWidget.css src/components/
cp knowledge.json public/

# 2. Import in App.jsx
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  return (
    <>
      {/* Your app */}
      <ChatbotWidget />
    </>
  );
}
```

---

## 🎨 Customization

### Change API Key

```jsx
<ChatbotWidget apiKey="your-new-api-key-here" />
```

### Custom Knowledge Base Location

```jsx
<ChatbotWidget knowledgeBaseUrl="/api/knowledge.json" />
```

### Modify Styles

Edit `ChatbotWidget.css` to customize:
- Colors and gradients
- Button position
- Widget size
- Animations

### Change Icon

In `ChatbotWidget.jsx`, line 314:
```jsx
<span className="chatbot-icon">🕉️</span>

// Change to:
<span className="chatbot-icon">💬</span>
```

---

## 📱 Responsive Behavior

- **Desktop**: Floating widget (400px × 600px)
- **Mobile**: Full-screen chat when opened
- **Tablet**: Adaptive sizing

---

## 🔄 State Management

The component manages its own state:
- `isOpen` - Chat visibility
- `messages` - Chat history
- `inputValue` - Current input
- `isLoading` - Loading state
- `knowledgeBase` - FAQ data
- `stats` - FAQ/conversation counts

You can easily integrate with Redux, Zustand, or Context API if needed.

---

## 🎯 How It Works

1. **User opens chat** → Component loads
2. **Loads knowledge.json** → From public folder
3. **User asks question** → Searches FAQs first
4. **Checks relevance** → Filters off-topic questions
5. **Direct answer?** → Returns from knowledge base
6. **No direct answer?** → Calls OpenRouter AI with context
7. **Displays response** → With knowledge badge if applicable
8. **Saves conversation** → Updates local state

---

## 🛠️ Tech Stack

- **React 16.8+** (Hooks required)
- **ES6+** JavaScript
- **CSS3** with animations
- **Fetch API** for HTTP requests
- **OpenRouter API** for AI responses

---

## 📊 Performance

- **Component Size**: ~15 KB (unminified)
- **CSS Size**: ~6 KB
- **Knowledge Base**: ~380 KB
- **Total**: ~400 KB
- **Load Time**: < 1 second
- **No external dependencies** (except React)

---

## 🔐 Security Best Practices

### For Development:
```jsx
// API key in component (current)
<ChatbotWidget apiKey="sk-or-v1-..." />
```

### For Production:
```jsx
// Use environment variables
<ChatbotWidget apiKey={process.env.REACT_APP_OPENROUTER_API_KEY} />
```

Add to `.env`:
```
REACT_APP_OPENROUTER_API_KEY=your-api-key-here
```

---

## 🧪 Testing

### Test the Component

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import ChatbotWidget from './ChatbotWidget';

test('opens chatbot when clicked', () => {
  render(<ChatbotWidget />);
  const button = screen.getByLabelText('Toggle chatbot');
  fireEvent.click(button);
  expect(screen.getByText(/Namaste/i)).toBeInTheDocument();
});
```

---

## 🎁 Advanced Usage

### Multiple Chatbots

```jsx
// Different chatbots for different sections
<ChatbotWidget 
  apiKey="key1"
  knowledgeBaseUrl="/knowledge-varanasi.json"
/>

<ChatbotWidget 
  apiKey="key2"
  knowledgeBaseUrl="/knowledge-hotels.json"
/>
```

### Controlled State

```jsx
const [chatOpen, setChatOpen] = useState(false);

// Pass state to component (modify component to accept props)
<ChatbotWidget isOpen={chatOpen} onToggle={setChatOpen} />
```

### Event Callbacks

```jsx
// Add callbacks for analytics (modify component)
<ChatbotWidget 
  onMessageSent={(msg) => analytics.track('Message Sent', { msg })}
  onBotResponse={(res) => analytics.track('Bot Response', { res })}
/>
```

---

## 🐛 Troubleshooting

### Chatbot Not Showing?
- ✅ Check if component is imported
- ✅ Check CSS is imported
- ✅ Check console for errors

### Knowledge Base Not Loading?
- ✅ Ensure `knowledge.json` is in `/public` folder
- ✅ Check browser network tab
- ✅ Verify path in `knowledgeBaseUrl` prop

### Styles Not Working?
- ✅ Import CSS in component or App
- ✅ Check for CSS conflicts
- ✅ Ensure CSS file path is correct

### API Errors?
- ✅ Check API key is valid
- ✅ Check network connection
- ✅ Check browser console for errors

---

## 📚 Dependencies

```json
{
  "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0"
}
```

No other dependencies required! 🎉

---

## 🔄 Migration from Vanilla JS

If you were using the vanilla JS version:

| Vanilla JS | React Component |
|------------|-----------------|
| `<script src="chatbot-widget.js">` | `import ChatbotWidget from './components/ChatbotWidget'` |
| Auto-initialization | Add `<ChatbotWidget />` to your JSX |
| Global `window.travelChatbot` | Component instance (React manages it) |
| Manual DOM manipulation | React state & refs |

---

## ✨ Why React Component?

### Benefits:
- ✅ **Better Integration** - Native React, not a widget hack
- ✅ **State Management** - React hooks, easy to extend
- ✅ **Reusability** - Use multiple instances easily
- ✅ **Type Safety** - Easy to add TypeScript
- ✅ **Testing** - Use React Testing Library
- ✅ **Performance** - React's virtual DOM optimization
- ✅ **Maintainability** - Standard React patterns

---

## 🚀 Next Steps

1. **Copy files** to your React project
2. **Import component** in your app
3. **Add `<ChatbotWidget />`** to your JSX
4. **Test it** - Click the 🕉️ icon
5. **Customize** - Modify props, styles, content

---

## 📖 Examples

See `example-usage.jsx` for complete examples:
- Basic usage
- Custom styling
- Multiple instances
- With React Router
- With state management

---

## 🎉 Ready to Use!

This React component is **production-ready** and can be dropped into any React application!

**No setup. No configuration. Just import and use!** ✨

---

**Made with ❤️ for Sacred Cities Tourism**

*React-powered AI chat for modern web apps* 🚀
