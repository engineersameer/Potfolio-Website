import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Expertise from './pages/Expertise';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';

export default function App() {
  // Global dark mode state
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-500 bg-white dark:bg-gray-950">
      <Header dark={dark} setDark={setDark} />
      <main className="flex-grow">
        <Home />
        <About />
        <Skills />
        <Expertise />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
