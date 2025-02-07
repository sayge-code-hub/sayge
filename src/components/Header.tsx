import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// Import logo
import logo from '../assets/logo/logo.png';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items configuration
  const navigationConfig = {
    sections: [
      { id: 'home', label: 'Home', sectionId: 'hero' },
      { id: 'about', label: 'About Sayge', sectionId: 'about' },
      { id: 'expertise', label: 'Our Expertise', sectionId: 'services' }
    ]
  };

  const navItems = navigationConfig.sections;

  // Update scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (!isHomePage) return;

      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight * 0.3; // 30% of viewport height

        if (rect.top <= offset && rect.bottom >= offset) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        const activeNavItem = navItems.find(item => item.sectionId === currentSection);
        if (activeNavItem) {
          setActiveSection(activeNavItem.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, navItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        const headerOffset = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    }
  };

  const renderNavItem = (item: typeof navItems[0], index: number) => {
    const isActive = activeSection === item.id;
    const baseClassName = "relative text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 group";

    return (
      <motion.a
        key={item.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        href={`#${item.sectionId}`}
        onClick={(e) => scrollToSection(e, item)}
        className={`${baseClassName} ${isActive ? 'text-blue-600' : ''}`}
      >
        {item.label}
        <motion.span
          initial={false}
          animate={{
            width: isActive ? '100%' : '0%',
            opacity: isActive ? 1 : 0,
          }}
          className="absolute bottom-0 left-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:opacity-100 transition-all duration-300"
        />
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
                        href={`#${item.sectionId}`}
                        onClick={(e) => scrollToSection(e, item)}
                        className={`text-xl font-medium ${activeSection === item.id ? 'text-blue-600' : 'text-gray-900'} hover:text-blue-600 transition-colors duration-200`}
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