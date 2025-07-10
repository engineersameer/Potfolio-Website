import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaServer, FaMobileAlt, FaJs, FaCode } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'React', level: 95, icon: <FaReact className="text-sky-500" /> },
  { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', level: 85, icon: <SiMongodb className="text-green-700" /> },
  { name: 'Express', level: 85, icon: <FaServer className="text-gray-700 dark:text-gray-200" /> },
  { name: 'React Native', level: 90, icon: <FaMobileAlt className="text-indigo-500" /> },
  { name: 'JavaScript', level: 98, icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript', level: 80, icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Power BI', level: 80, icon: <FaDatabase className="text-yellow-600" /> },
  { name: 'DSA', level: 85, icon: <FaCode className="text-purple-500" /> },
  { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-sky-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-800 dark:text-gray-100 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="border-b-4 border-indigo-500 dark:border-yellow-300 pb-2 inline-block">Skills & Tools</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="relative group bg-gradient-to-br from-white/80 via-indigo-50 to-purple-50 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-950 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800 backdrop-blur-lg overflow-hidden"
              whileHover={{ y: -8, scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-100 via-purple-100 to-yellow-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-md group-hover:scale-110 transition-transform text-3xl">
                {skill.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center tracking-tight group-hover:text-indigo-700 dark:group-hover:text-yellow-300 transition-colors">
                {skill.name}
              </h3>
              <div className="w-full mb-2 mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Proficiency</span>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 transition-colors">
                  <motion.div
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-300 dark:to-pink-400 h-3 rounded-full shadow-sm"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
              <span className="mt-4 px-4 py-1 rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-yellow-300 text-xs font-semibold tracking-wide shadow-sm transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 