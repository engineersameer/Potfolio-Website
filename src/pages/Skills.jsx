import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaServer, FaMobileAlt, FaJs, FaCode } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'React', level: 95, icon: <FaReact className="text-sky-500" /> },
  { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', level: 85, icon: <SiMongodb className="text-green-700" /> },
  { name: 'Express', level: 85, icon: <FaServer className="text-gray-400" /> },
  { name: 'React Native', level: 90, icon: <FaMobileAlt className="text-indigo-500" /> },
  { name: 'JavaScript', level: 98, icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript', level: 80, icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Power BI', level: 80, icon: <FaDatabase className="text-yellow-600" /> },
  { name: 'DSA', level: 85, icon: <FaCode className="text-purple-500" /> },
  { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-sky-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-light-gray dark:bg-[#111315] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-dark-base dark:text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="border-b-4 border-turquoise pb-2 inline-block">Skills & Tools</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="relative group bg-white dark:bg-dark-base/60 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center border border-gray-200 dark:border-turquoise/20 overflow-hidden hover:bg-turquoise hover:text-dark-base dark:hover:bg-turquoise dark:hover:text-dark-base"
              whileHover={{ y: -8, scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-dark-base/5 dark:bg-white/10 group-hover:bg-dark-base/20 dark:group-hover:bg-white/20 shadow-md group-hover:scale-110 transition-all duration-300 text-3xl">
                {skill.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark-base dark:text-white mb-2 text-center tracking-tight group-hover:text-dark-base transition-colors">
                {skill.name}
              </h3>
              <div className="w-full mb-2 mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-dark-base/60 dark:text-white/60 group-hover:text-dark-base/80 uppercase tracking-wider">Proficiency</span>
                  <span className="text-xs font-semibold text-dark-base dark:text-white group-hover:text-dark-base">{skill.level}%</span>
                </div>
                <div className="w-full bg-dark-base/10 dark:bg-white/10 group-hover:bg-dark-base/20 dark:group-hover:bg-white/20 rounded-full h-3 transition-colors">
                  <motion.div
                    className="bg-turquoise group-hover:bg-dark-base h-3 rounded-full shadow-sm"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
              <span className="mt-4 px-4 py-1 rounded-full bg-dark-base/10 dark:bg-white/10 group-hover:bg-dark-base/30 dark:group-hover:bg-white/20 text-dark-base dark:text-white text-xs font-semibold tracking-wide shadow-sm transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 