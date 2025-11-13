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
    <section id="expertise" className="py-20 bg-white dark:bg-[#191b1f] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="border-b-4 border-turquoise pb-2 inline-block">Expertise</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((area, idx) => (
            <motion.div
              key={area.title}
              className="relative group bg-white dark:bg-dark-base/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center border border-gray-200 dark:border-turquoise/20 overflow-hidden hover:bg-turquoise hover:text-dark-base dark:hover:bg-turquoise dark:hover:text-dark-base"
              whileHover={{ y: -8, scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-turquoise/10 group-hover:bg-dark-base/20 shadow-md group-hover:scale-110 transition-all duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center tracking-tight group-hover:text-dark-base dark:group-hover:text-dark-base transition-colors">
                {area.title}
              </h3>
              <div className="mb-2 text-xs uppercase tracking-wider text-gray-500 dark:text-white/60 group-hover:text-dark-base/80 dark:group-hover:text-dark-base/80 font-semibold text-center">Projects</div>
              <ul className="mb-3 text-gray-600 dark:text-white/80 group-hover:text-dark-base dark:group-hover:text-dark-base text-sm text-center space-y-1">
                {area.projects.map((proj) => (
                  <li key={proj} className="leading-tight">• {proj}</li>
                ))}
              </ul>
              <div className="mb-2 text-xs uppercase tracking-wider text-gray-500 dark:text-white/60 group-hover:text-dark-base/80 dark:group-hover:text-dark-base/80 font-semibold text-center">Skills/Tools</div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {area.skills.map((skill) => (
                  <span key={skill} className="bg-turquoise/10 dark:bg-turquoise/20 group-hover:bg-dark-base/30 dark:group-hover:bg-dark-base/30 text-gray-700 dark:text-white group-hover:text-dark-base dark:group-hover:text-dark-base text-xs font-semibold px-3 py-1 rounded-full transition-colors shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
              {area.github && (
                <a
                  href={area.github}
                  className="inline-block mt-auto px-5 py-2 rounded-md bg-turquoise group-hover:bg-dark-base text-dark-base group-hover:text-turquoise border-2 border-turquoise group-hover:border-dark-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-sm tracking-wide"
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