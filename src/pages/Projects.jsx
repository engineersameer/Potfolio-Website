import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with MERN stack, featuring authentication, payments, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Fitness Tracker App',
    description: 'A cross-platform mobile app to track workouts and nutrition, built with React Native and Expo.',
    tags: ['React Native', 'Expo', 'Redux'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Sales Dashboard',
    description: 'Interactive Power BI dashboard for sales analytics and business insights.',
    tags: ['Power BI', 'DAX', 'SQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Algorithm Visualizer',
    description: 'A web app to visualize classic data structures and algorithms in action.',
    tags: ['JavaScript', 'DSA', 'React'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="border-b-4 border-indigo-500 dark:border-yellow-300 pb-2">Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col"
              whileHover={{ y: -8, scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-yellow-300 text-xs font-semibold px-2.5 py-0.5 rounded-full transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                <a href={project.github} className="text-indigo-600 dark:text-yellow-300 underline transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} className="text-purple-600 dark:text-pink-400 underline transition-colors" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 