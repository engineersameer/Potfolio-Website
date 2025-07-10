import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-[90vh] pt-28 md:pt-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500 overflow-hidden px-4">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-indigo-300/30 via-purple-300/20 to-yellow-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-yellow-200/30 via-pink-200/20 to-indigo-200/20 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center text-center gap-8 mx-auto">
        {/* Left: Text Content */}
        <div className="w-full flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-yellow-300 dark:via-pink-400 dark:to-indigo-400">
              Sameer Tariq
            </span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-700 dark:text-gray-200 transition-colors leading-snug"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            MERN Stack & React Native Developer <span className="text-indigo-600 dark:text-yellow-300">|</span> Data Analyst <span className="text-indigo-600 dark:text-yellow-300">|</span> DSA Enthusiast
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 transition-colors leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I build <span className="font-bold text-indigo-600 dark:text-yellow-300">modern web & mobile apps</span>, analyze data, and solve complex problems. Let’s create something amazing together.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-300 dark:to-pink-400 text-white dark:text-gray-900 font-semibold text-lg shadow-md hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-yellow-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-white dark:bg-gray-900 text-indigo-600 dark:text-yellow-300 border-2 border-indigo-600 dark:border-yellow-300 font-semibold text-lg shadow-md hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-yellow-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>
        {/* Right: Optional Hero Illustration or Layered Shape */}
      </div>
    </section>
  );
} 