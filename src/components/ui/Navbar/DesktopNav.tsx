import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';
import { navLinks } from './navbarConfig';

const DesktopNav: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isDevMenuOpen, setIsDevMenuOpen] = useState(false);
  const devMenuRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(isHomePage ? window.scrollY > 5 : true);
    }, 0);
    const handleScroll = () => setIsVisible(window.scrollY > 5);

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [isHomePage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        devMenuRef.current &&
        !devMenuRef.current.contains(event.target as Node)
      ) {
        setIsDevMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-gradient-bg dark:bg-gradient-bg-dark border-b-2 border-primary"
        >
          <div className="text-xl font-semibold text-primary dark:text-primary-dark">
            <Link to="/">My Portfolio</Link>
          </div>
          <div className="flex items-center gap-5">
            {navLinks.map((item) => {
              if (item.children) {
                return (
                  <div key={item.to} className="relative" ref={devMenuRef}>
                    <button
                      onClick={() => setIsDevMenuOpen(!isDevMenuOpen)}
                      className="text-primary dark:text-primary-dark text-sm hover:text-primary/80 dark:hover:text-primary-dark/80 transition-colors duration-200 flex items-center gap-1"
                    >
                      {item.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {isDevMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-40 bg-bg dark:bg-bg-dark border border-borderMuted shadow-lg"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block px-4 py-2 text-sm text-primary dark:text-primary-dark hover:bg-bg2 dark:hover:bg-bg2-dark transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-primary dark:text-primary-dark text-sm hover:text-primary/80 dark:hover:text-primary-dark/80 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default DesktopNav;
