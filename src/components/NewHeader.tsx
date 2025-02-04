import React, { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavigationConfig {
  pages: Record<string, string>;
  sections: string[];
}

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items configuration
  const navigationConfig: NavigationConfig = {
    pages: {
      'Home': '/',
      'About Us': '/about'
    },
    sections: ['Services', 'Staffing Solutions', 'Our Process', 'Contact Us']
  };

  const navItems = isHomePage
    ? ['Home', 'About Us', ...navigationConfig.sections]
    : ['Home', 'About Us', 'Services', 'Contact Us'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (isHomePage) {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY - 100;
          const sectionBottom = rect.bottom + window.scrollY;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(section.id);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  const renderNavItem = (item: string, index: number) => {
    const itemId = item.toLowerCase().replace(/\s+/g, '-');
    const isActive = activeSection === itemId;
    const baseClassName = "relative text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 group";

    // Ensure the page exists before using it
    const pagePath = Object.prototype.hasOwnProperty.call(navigationConfig.pages, item)
      ? navigationConfig.pages[item]
      : null;

    if (pagePath) {
      return (
        <Link
          key={item}
          to={pagePath}
          className={baseClassName}
        >
          {item}
          <motion.span 
            className="absolute bottom-0 left-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:opacity-100 transition-all duration-300"
          />
        </Link>
      );
    }

    // Section navigation
    return (
      <motion.a
        key={item}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        href={`#${itemId}`}
        onClick={(e) => scrollToSection(e, itemId)}
        className={`${baseClassName} ${isActive ? 'text-blue-600' : ''}`}
      >
        {item}
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
              <div className="relative">
                <Code2 className="h-8 w-8 text-blue-600 relative z-10" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-blue-200 rounded-full opacity-20"
                />
              </div>
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Sayge
              </span>
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
                transition={{ type: 'tween' }}
                className="fixed inset-0 bg-white z-40 md:hidden"
              >
                <nav className="flex flex-col items-center justify-center h-full space-y-8">
                  {navItems.map((item, index) => renderNavItem(item, index))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;