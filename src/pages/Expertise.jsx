import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaChartBar, FaCode } from 'react-icons/fa';

const expertise = [
  {
    icon: <FaLaptopCode size={36} className="text-indigo-600" />,
    title: 'MERN Stack Development',
    projects: ['E-commerce Platform', 'Blog API', 'Task Manager'],
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/engineersameer/MERN-Hospital-Management',
    visual: 'Web App Screenshot',
  },
  {
    icon: <FaMobileAlt size={36} className="text-purple-600" />,
    title: 'React Native Development',
    projects: ['Fitness Tracker App', 'Chat App'],
    skills: ['React Native', 'Expo', 'Redux'],
    github: 'https://github.com/engineersameer/HomeEase-App-FYP',
    visual: 'Mobile Mockup',
  },
  {
    icon: <FaChartBar size={36} className="text-yellow-500" />,
    title: 'Data Analyst & Power BI',
    projects: ['Sales Dashboard', 'Customer Insights'],
    skills: ['Power BI', 'Excel', 'SQL', 'Python'],
    github: '#',
    visual: 'Chart Placeholder',
  },
  {
    icon: <FaCode size={36} className="text-green-600" />,
    title: 'Database Engineer',
    projects: ['LeetCode Solutions', 'Algorithm Visualizer'],
    skills: ['JavaScript', 'Python', 'C++'],
    github: '#',
    visual: 'Code Snippet',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-800 dark:text-gray-100 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="border-b-4 border-indigo-500 dark:border-yellow-300 pb-2 inline-block">Expertise</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((area, idx) => (
            <motion.div
              key={area.title}
              className="relative group bg-gradient-to-br from-white/80 via-indigo-50 to-purple-50 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-950 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800 backdrop-blur-lg overflow-hidden"
              whileHover={{ y: -8, scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-100 via-purple-100 to-yellow-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-md group-hover:scale-110 transition-transform">
                {area.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center tracking-tight group-hover:text-indigo-700 dark:group-hover:text-yellow-300 transition-colors">
                {area.title}
              </h3>
              <div className="mb-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold text-center">Projects</div>
              <ul className="mb-3 text-gray-700 dark:text-gray-300 text-sm text-center space-y-1">
                {area.projects.map((proj) => (
                  <li key={proj} className="leading-tight">• {proj}</li>
                ))}
              </ul>
              <div className="mb-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold text-center">Skills/Tools</div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {area.skills.map((skill) => (
                  <span key={skill} className="bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full transition-colors shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
              {area.github && (
                <a
                  href={area.github}
                  className="inline-block mt-auto px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-300 dark:to-pink-400 text-white dark:text-gray-900 font-semibold shadow-md hover:opacity-90 transition-all text-sm tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub/Code
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 