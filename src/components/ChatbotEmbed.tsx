import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type ChatbotEmbedProps = {
  url?: string;
  title?: string;
};

// Lightweight iframe-based chatbot embed for a Netlify-hosted chat UI.
// Usage: <ChatbotEmbed url={import.meta.env.VITE_CHATBOT_URL} />
// If no URL is provided, the widget hides itself.
export function ChatbotEmbed({ url, title = 'Chatbot' }: ChatbotEmbedProps) {
  const resolvedUrl = useMemo(() => {
    try {
      // Prefer prop; else env; else null
      const candidate = url || (import.meta as any)?.env?.VITE_CHATBOT_URL;
      if (!candidate) return null;
      // Basic URL validation to avoid invalid iframe src
      const u = new URL(candidate as string);
      return u.toString();
    } catch {
      return null;
    }
  }, [url]);

  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <div
      className="fixed z-[2147483647] bottom-4 right-4"
      style={{
        zIndex: 2147483647,
        bottom: 'max(1rem, env(safe-area-inset-bottom))',
        right: 'max(1rem, env(safe-area-inset-right))',
      }}
    >
      {/* Toggle button */}
      {!isOpen && (
        <button
          type="button"
          aria-label="Open chatbot"
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          tabIndex={0}
        >
          <span className="text-2xl">🕉</span>
        </button>
      )}

      {/* Panel */}
      {isOpen && (
        <div className="relative">
          <div className="absolute bottom-0 right-0 bg-white shadow-2xl rounded-xl overflow-hidden border border-purple-100 w-[420px] h-[680px] sm:w-[480px] sm:h-[720px] md:w-[520px] md:h-[760px]">
            <div className="flex items-center justify-between px-3 py-2 border-b bg-purple-50">
              <div className="text-sm font-semibold text-gray-800">{title}</div>
              <button
                type="button"
                aria-label="Close chatbot"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-purple-100 text-gray-600"
              >
                <X size={18} />
              </button>
            </div>
            {resolvedUrl ? (
              <iframe
                title={title}
                src={resolvedUrl}
                className="w-full h-full"
                allow="clipboard-write;"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            ) : (
              <div className="p-4 text-sm text-gray-700 space-y-2">
                <p><strong>Chatbot URL not configured.</strong></p>
                <p>Add your Netlify chatbot URL in <code>.env.local</code>:</p>
                <pre className="bg-gray-50 p-2 rounded border text-[12px] overflow-x-auto">VITE_CHATBOT_URL=https://your-chatbot-site.netlify.app</pre>
                <p>Then restart the dev server and reload.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(content, document.body);
}

export default ChatbotEmbed;
