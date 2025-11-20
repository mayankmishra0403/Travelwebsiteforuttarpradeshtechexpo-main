import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
const fallbackLogo = '/placeholder.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoCandidates = [
    '/assets/logo.png',
    '/assets/logo/logo.png',
    '/assets/logo.svg',
    '/assets/logo/logo.svg',
    '/assets/darshan360-logo.png',
  ];
  const [logoIndex, setLogoIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
    navigate(path);
    requestAnimationFrame(() => window.scrollTo(0, 0));
  };

  /*  ⭐ NEW TAB ADDED HERE → { path: '/packages', label: 'Holiday Packages' } */

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/explore', label: 'Explore Regions' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/plan', label: 'Plan Your Visit' },
    { path: '/packages', label: 'Holiday Packages' },  // ⭐ NEW ROUTE
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP AREA */}
        <div className="flex justify-between items-center py-4">
          
          {/* LOGO + TITLE */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => handleNavigation('/')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={logoCandidates[Math.min(logoIndex, logoCandidates.length - 1)]}
              alt="DARSHAN360 logo"
              onError={(e) => {
                if (logoIndex < logoCandidates.length - 1) {
                  setLogoIndex((i) => i + 1);
                } else {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackLogo;
                }
              }}
              className="h-10 w-auto sm:h-12"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
                DARSHAN360
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 leading-none">
                Discover • Plan • Experience
              </span>
            </div>
          </motion.div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onClick={() => handleNavigation(item.path)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 relative transition-colors ${
                  location.pathname === item.path
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.label}

                {/* ACTIVE TAB UNDERLINE */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-gray-700"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t"
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => handleNavigation(item.path)}
                    className={`block w-full text-left px-4 py-3 transition-colors ${
                      location.pathname === item.path
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
