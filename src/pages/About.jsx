import { motion } from 'framer-motion';
import profilePic from '../pic.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-white via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 mb-10 md:mb-0 group perspective-1000"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div
            className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-600 dark:border-yellow-300 bg-gradient-to-tr from-indigo-100 via-purple-100 to-yellow-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 transition-transform duration-300 hover:scale-105"
          >
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-600/40 to-transparent pointer-events-none" />
            {/* Layered border reveal on hover */}
            <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-indigo-400 dark:group-hover:border-yellow-200 transition-all duration-500 pointer-events-none" />
          </div>
        </motion.div>
        {/* About Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center md:text-left mb-14 text-gray-800 dark:text-gray-100 tracking-tight drop-shadow-lg transition-colors border-b-4 border-indigo-500 dark:border-yellow-300 pb-2 inline-block mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-300 dark:from-yellow-300 dark:via-pink-400 dark:to-indigo-400 rounded-full mb-6" />
          <div className="space-y-5 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            <p>
              Hi! I'm <span className="font-bold text-indigo-600 dark:text-yellow-300">Sameer Tariq</span>, a <span className="font-bold text-purple-600 dark:text-pink-400">MERN Stack & React Native Developer</span> with a passion for <span className="font-bold text-indigo-600 dark:text-yellow-300">data analytics</span> and <span className="font-bold text-purple-600 dark:text-pink-400">problem solving</span>.
            </p>
            <p>
              I specialize in building <span className="font-bold text-indigo-600 dark:text-yellow-300">modern web & mobile apps</span>, analyzing data for insights, and creating scalable solutions for real-world challenges.
            </p>
            <p>
              My approach combines <span className="font-bold text-indigo-600 dark:text-yellow-300">clean code</span>, <span className="font-bold text-purple-600 dark:text-pink-400">creative UI/UX</span>, and a drive for <span className="font-bold text-indigo-600 dark:text-yellow-300">continuous learning</span>.
            </p>
          </div>
          <div className="flex gap-8 mt-10 text-center">
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-yellow-300">3+</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-semibold">Years Experience</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-yellow-300">20+</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-semibold">Projects</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-yellow-300">5+</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-semibold">Certifications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 