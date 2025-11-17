// src/Header.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiMoon, HiSun } from 'react-icons/hi2';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

function getActiveSection() {
  if (typeof window === 'undefined') return '';
  const hash = window.location.hash;
  if (hash) return hash;
  return '#home';
}

export default function Header({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(getActiveSection());

  // Sticky shadow on scroll & active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      let found = '#home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          found = `#${id}`;
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? 'shadow-lg shadow-black/10 dark:shadow-black/30 border-b border-gray-200 dark:border-turquoise/30' : ''}
          bg-white/90 dark:bg-dark-base/95 backdrop-blur-sm
        `}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 py-4 md:py-5 relative">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 select-none">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-turquoise">
            ST
          </span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 md:gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 uppercase tracking-wider focus:outline-none
                ${active === link.href ?
                  'text-turquoise border-b-2 border-turquoise' :
                  'text-gray-700 hover:text-turquoise hover:border-b-2 hover:border-turquoise/50 dark:text-white/80'}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            className="hidden md:inline-flex items-center justify-center rounded-full border border-turquoise/40 p-2.5 text-gray-700 hover:text-turquoise transition-all duration-300 bg-white/80 hover:bg-turquoise/10 dark:bg-dark-base/80 dark:text-turquoise"
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle theme"
          >
            <motion.span
              key={dark ? 'sun-icon' : 'moon-icon'}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="flex items-center justify-center"
            >
              {dark ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
            </motion.span>
          </button>
          {/* Hamburger */}
          <button
            className="md:hidden text-2xl text-turquoise focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white dark:bg-dark-base shadow-2xl flex flex-col gap-8 p-10 border-l border-black/5 dark:border-turquoise/20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <a href="#home" className="flex items-center gap-2 mb-6 select-none">
                <span className="text-2xl font-extrabold text-turquoise">ST</span>
              </a>
              <button
                className="flex items-center justify-center gap-2 rounded-full border border-turquoise/40 p-2.5 text-gray-700 hover:text-turquoise transition-all duration-300 bg-white/80 hover:bg-turquoise/10 dark:bg-dark-base/80 dark:text-turquoise"
                onClick={() => setDark((prev) => !prev)}
                aria-label="Toggle theme"
              >
                {dark ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-base font-semibold uppercase tracking-wider transition-all duration-300
                    ${active === link.href ?
                      'text-turquoise border-l-2 border-turquoise pl-4' :
                      'text-gray-700 hover:text-turquoise hover:border-l-2 hover:border-turquoise/50 hover:pl-4 dark:text-white/80'}
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}