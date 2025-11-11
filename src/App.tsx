import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { RegionPage } from './pages/RegionPage';
import { CityDetailPage } from './pages/CityDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { PlanPage } from './pages/PlanPage';
import { ContactPage } from './pages/ContactPage';
import { PageTransition } from './components/PageTransition';
import { useEffect } from 'react';
import ChatbotEmbed from './components/ChatbotEmbed';

if (typeof window !== 'undefined') {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Aggressive scroll reset - multiple methods for better browser compatibility
    const scrollToTop = () => {
      // Method 1: Direct DOM manipulation
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 2: Window scrollTo
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
      
      // Method 3: Backup with setTimeout
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
      }, 0);
    };

    scrollToTop();
  }, [pathname, search]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  // Reset scroll on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => {
      window.scrollTo(0, 0);
    }}>
  {/* key prop removed to satisfy RoutesProps typing */}
  <Routes location={location}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/explore" element={<PageTransition><ExplorePage /></PageTransition>} />
        <Route path="/region" element={<PageTransition><RegionPage /></PageTransition>} />
        <Route path="/city" element={<PageTransition><CityDetailPage /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
        <Route path="/plan" element={<PageTransition><PlanPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  // Initial scroll reset on app mount - BEFORE render
  useEffect(() => {
    // Set scroll restoration to manual immediately
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top with multiple methods
    const forceScrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Execute immediately
    forceScrollTop();
    
    // And after a micro-delay to catch any late browser scroll restoration
    setTimeout(forceScrollTop, 0);
    setTimeout(forceScrollTop, 10);
    setTimeout(forceScrollTop, 50);
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        {/* Embedded Netlify chatbot (no new tab). Hardcoding provided URL to ensure immediate functionality. */}
        <ChatbotEmbed url="https://disha.darshan.info" title="DARSHAN360 Chatbot" />
        <Footer />
      </div>
    </Router>
  );
}
