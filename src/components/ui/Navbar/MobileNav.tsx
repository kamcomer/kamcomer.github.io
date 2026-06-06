import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';
import { navLinks } from './navbarConfig';

const MobileNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 right-4 z-50 p-2 bg-bg dark:bg-bg-dark border border-borderMuted"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={closeMobileMenu}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-bg dark:bg-bg-dark border-l border-borderMuted"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-borderMuted">
                  <span className="text-lg font-semibold text-primary dark:text-primary-dark">
                    Menu
                  </span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-1 text-muted hover:text-text dark:hover:text-text-dark"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4">
                  {navLinks.map((item) => (
                    <div key={item.to}>
                      {item.children ? (
                        <>
                          <div className="px-4 py-2 text-sm font-semibold text-muted dark:text-muted-dark">
                            {item.label}
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              onClick={closeMobileMenu}
                              className="block px-6 py-2 pl-8 text-primary dark:text-primary-dark hover:bg-bg2 dark:hover:bg-bg2-dark transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <Link
                          to={item.to}
                          onClick={closeMobileMenu}
                          className="block px-4 py-3 text-primary dark:text-primary-dark hover:bg-bg2 dark:hover:bg-bg2-dark transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="p-4 border-t border-borderMuted">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
