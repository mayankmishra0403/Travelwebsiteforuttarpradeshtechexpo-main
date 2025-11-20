import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { GalleryPage } from './pages/GalleryPage';
import { PlanPage } from './pages/PlanPage';
import { ContactPage } from './pages/ContactPage';
import PackagesPage from './pages/PackagesPage';
import { CityDetailPage } from './pages/CityDetailPage';
import { BookingPage } from './pages/BookingPage';
import { LandingPage } from './pages/LandingPage';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/landing" element={<PageTransition><LandingPage /></PageTransition>} />
            <Route path="/explore" element={<PageTransition><ExplorePage /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
            <Route path="/plan" element={<PageTransition><PlanPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/packages" element={<PageTransition><PackagesPage /></PageTransition>} />
            <Route path="/city/:cityId" element={<PageTransition><CityDetailPage /></PageTransition>} />
            <Route path="/booking" element={<PageTransition><BookingPage /></PageTransition>} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
