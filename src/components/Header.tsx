import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Import logo
import logo from '../assets/logo/logo.png';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/' || location.pathname === '/sayge';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Navigation items configuration
  const navigationConfig = {
    items: [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'our-work', label: 'Portfolio', path: '/our-work' },
      { id: 'blog', label: 'Blog', path: '/blog' },
      { id: 'careers', label: 'Careers', path: '/careers' }
    ]
  };

  const navItems = navigationConfig.items;

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    navigate(item.path);
    setIsMenuOpen(false);
  };

  const renderNavItem = (item: typeof navItems[0], index: number) => {
    return (
      <motion.a
        key={item.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        href={item.path}
        onClick={(e) => handleNavigation(e, item)}
        className={`text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 ${location.pathname === item.path ? 'text-blue-600 font-semibold' : 'font-medium'}`}
      >
        {item.label}
      </motion.a>
    );
  };



  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <img 
                src={logo} 
                alt="Sayge Logo" 
                className="h-10 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => renderNavItem(item, index))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden"
              >
                <div className="absolute inset-0 bg-black/5" onClick={() => setIsMenuOpen(false)} />
                <nav className="relative h-full flex flex-col items-center justify-center space-y-6 p-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.path}
                        onClick={(e) => handleNavigation(e, item)}
                        className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header