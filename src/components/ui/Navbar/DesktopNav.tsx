import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';
import { devNavLinks, publicNavLinks } from './navbarConfig';

const isHashLink = (to: string) => to.startsWith('/#');

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const scrollToHash = (to: string) => {
  const id = to.slice(2);
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const navHoverClass =
  'border border-transparent text-primary transition-colors duration-200 hover:border-primary/35 hover:bg-primary/10 hover:text-text dark:text-primary-dark dark:hover:border-primary-dark/40 dark:hover:bg-primary-dark/15 dark:hover:text-text-dark'

const navActiveClass =
  'border border-primary/35 bg-primary/12 text-text dark:border-primary-dark/40 dark:bg-primary-dark/18 dark:text-text-dark'

const devMenuItemClass =
  'block border-b border-borderMuted px-4 py-2 text-sm text-primary transition-colors last:border-b-0 hover:border-primary/35 hover:bg-primary/10 hover:text-text dark:text-primary-dark dark:hover:border-primary-dark/40 dark:hover:bg-primary-dark/15 dark:hover:text-text-dark'

const DesktopNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleHashNavigation = (to: string) => {
    if (location.pathname === '/') {
      scrollToHash(to);
      return;
    }

    navigate('/');
    window.setTimeout(() => scrollToHash(to), 50);
  };

  const isActiveLink = (to: string) => {
    if (isHashLink(to)) {
      return false;
    }

    return location.pathname === to;
  };

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
          <div className="text-xl font-semibold tracking-[0.12em] text-primary dark:text-primary-dark">
            <Link to="/">My Portfolio</Link>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 border border-borderMuted bg-bg2/60 px-2 py-1 dark:bg-bg2-dark/60">
              {publicNavLinks.map((item) => {
              if (isHashLink(item.to)) {
                return (
                  <a
                    key={item.to}
                    href={item.to}
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashNavigation(item.to);
                    }}
                    className={`px-3 py-2 text-sm ${navHoverClass}`}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={item.to === '/' ? scrollToTop : undefined}
                  className={`px-3 py-2 text-sm ${
                    isActiveLink(item.to)
                      ? navActiveClass
                      : navHoverClass
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            </div>

            {devNavLinks.length > 0 && (
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted dark:text-muted-dark">
                  Dev
                </span>
                {devNavLinks.map((item) => (
                  <div key={item.to} className="relative" ref={devMenuRef}>
                    <button
                      onClick={() => setIsDevMenuOpen(!isDevMenuOpen)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm ${
                        isDevMenuOpen ? navActiveClass : navHoverClass
                      }`}
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
                          className="absolute right-0 top-full mt-2 w-40 border border-borderMuted bg-bg shadow-lg dark:bg-bg-dark"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className={devMenuItemClass}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}

            <ThemeToggle />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default DesktopNav;
