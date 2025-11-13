import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/engineersameer' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/sameer-tariq-4bb2032a0/' },
  { icon: <FaTwitter />, href: 'https://x.com/engsameertariq' },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0d1012] border-t border-gray-200 dark:border-turquoise/20 py-8 transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-500 hover:text-turquoise dark:text-white/60 text-sm font-medium uppercase tracking-wider transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-turquoise dark:text-white/60 text-2xl transition-all duration-300 hover:scale-110"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
        <div className="text-gray-500 dark:text-white/60 text-xs text-center md:text-right transition-colors">
          &copy; {new Date().getFullYear()} Sameer Tariq. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
  