import { motion } from 'framer-motion';
import profilePic from '../pic.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-light-gray dark:bg-[#15171a] transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 mb-10 md:mb-0 group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div
            className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-turquoise transition-transform duration-300 hover:scale-105"
          >
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full transition-transform duration-300" />
            <div className="absolute inset-0 bg-turquoise/10 group-hover:bg-turquoise/20 transition-colors duration-300 pointer-events-none" />
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
            className="text-4xl md:text-5xl font-extrabold text-center md:text-left mb-14 text-gray-900 dark:text-white tracking-tight border-b-4 border-turquoise pb-2 inline-block mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="space-y-5 text-lg md:text-xl text-gray-600 dark:text-white/80 leading-relaxed">
            <p>
              Hi! I'm <span className="font-semibold text-turquoise">Sameer Tariq</span>, a <span className="font-semibold text-turquoise">MERN Stack & React Native Developer</span> with a passion for <span className="font-semibold text-turquoise">data analytics</span> and <span className="font-semibold text-turquoise">problem solving</span>.
            </p>
            <p>
              I specialize in building <span className="font-semibold text-turquoise">modern web & mobile apps</span>, analyzing data for insights, and creating scalable solutions for real-world challenges.
            </p>
            <p>
              My approach combines <span className="font-semibold text-turquoise">clean code</span>, <span className="font-semibold text-turquoise">creative UI/UX</span>, and a drive for <span className="font-semibold text-turquoise">continuous learning</span>.
            </p>
          </div>
          <div className="flex gap-8 mt-10 text-center">
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-turquoise">3+</span>
              <span className="text-gray-500 dark:text-white/60 text-sm md:text-base font-semibold">Years Experience</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-turquoise">20+</span>
              <span className="text-gray-500 dark:text-white/60 text-sm md:text-base font-semibold">Projects</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-turquoise">5+</span>
              <span className="text-gray-500 dark:text-white/60 text-sm md:text-base font-semibold">Certifications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 