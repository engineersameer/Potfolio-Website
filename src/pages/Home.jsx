import { motion } from 'framer-motion';
import profilePic from '../pic.jpg';

export default function Home() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-32 md:pt-40 bg-white dark:bg-dark-base transition-colors duration-500 overflow-hidden px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="flex flex-col justify-center text-left space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-turquoise">Sameer Tariq</span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-white/90 leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              MERN Stack & React Native Developer <span className="text-turquoise">|</span> Data Analyst <span className="text-turquoise">|</span> DSA Enthusiast
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              I build <span className="font-semibold text-turquoise">modern web & mobile apps</span>, analyze data, and solve complex problems. Let's create something amazing together.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-md bg-turquoise text-dark-base font-semibold text-base shadow-lg hover:bg-turquoise/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-turquoise/50 text-center"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-md bg-transparent text-turquoise border-2 border-turquoise font-semibold text-base hover:bg-turquoise/10 hover:text-dark-base dark:hover:bg-turquoise dark:hover:text-dark-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-turquoise/50 text-center"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right: Developer Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-turquoise/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-turquoise shadow-2xl">
                <img 
                  src={profilePic} 
                  alt="Sameer Tariq" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 