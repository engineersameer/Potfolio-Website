// src/Header.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi2';

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 border-b border-gray-200 dark:border-gray-800
        ${scrolled ? 'shadow-md' : 'shadow-none'}
        bg-white/90 dark:bg-gray-950/90 backdrop-blur
      `}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 md:py-5 relative">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 select-none">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-800 dark:from-yellow-300 dark:via-pink-400 dark:to-indigo-400 drop-shadow-lg">
            ST
          </span>
          <span className="hidden md:inline text-lg font-bold text-gray-800 dark:text-gray-100 tracking-wide">Sameer Tariq</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 md:gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-base font-semibold transition-all duration-200 rounded-lg focus:outline-none
                ${active === link.href ?
                  'text-indigo-700 dark:text-yellow-300 bg-indigo-50 dark:bg-gray-800 shadow-sm' :
                  'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-yellow-300 hover:bg-indigo-50 dark:hover:bg-gray-800'}
              `}
            >
              <span className="relative inline-block">
                {link.label}
                {/* Active underline */}
                {active === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-indigo-500 to-indigo-800 dark:from-yellow-300 dark:to-indigo-400"
                  />
                )}
              </span>
            </a>
          ))}
        </div>
        {/* Dark/Light toggle (always top-right) */}
        <button
          className="absolute right-4 top-1 md:static md:ml-4 p-2 md:p-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-indigo-100 dark:hover:bg-gray-700 text-xl text-indigo-600 dark:text-yellow-300 transition-colors shadow-md border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-yellow-300"
          onClick={() => setDark(d => !d)}
          aria-label="Toggle dark mode"
        >
          <motion.span
            key={dark ? 'moon' : 'sun'}
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {dark ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
          </motion.span>
        </button>
        {/* Hamburger */}
        <button
          className="md:hidden text-2xl text-indigo-600 dark:text-yellow-300 focus:outline-none ml-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
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
              className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white/95 dark:bg-gray-950/95 shadow-2xl flex flex-col gap-8 p-10 border-l border-gray-200 dark:border-gray-800"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <a href="#home" className="flex items-center gap-2 mb-6 select-none">
                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-800 dark:from-yellow-300 dark:via-pink-400 dark:to-indigo-400">ST</span>
                <span className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-wide">Sameer Tariq</span>
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-200
                    ${active === link.href ?
                      'text-indigo-700 dark:text-yellow-300 bg-indigo-50 dark:bg-gray-800 shadow-sm' :
                      'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-yellow-300 hover:bg-indigo-50 dark:hover:bg-gray-800'}
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="relative inline-block">
                    {link.label}
                    {active === link.href && (
                      <motion.span
                        layoutId="mobile-underline"
                        className="absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-indigo-500 to-indigo-800 dark:from-yellow-300 dark:to-indigo-400"
                      />
                    )}
                  </span>
                </a>
              ))}
              <button
                className="mt-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-indigo-100 dark:hover:bg-gray-700 text-xl text-indigo-600 dark:text-yellow-300 transition-colors shadow-md border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-yellow-300"
                onClick={() => setDark(d => !d)}
                aria-label="Toggle dark mode"
              >
                <motion.span
                  key={dark ? 'moon-mobile' : 'sun-mobile'}
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {dark ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
                </motion.span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}