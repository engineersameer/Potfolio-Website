import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Sameer is a fantastic developer! His MERN stack skills are top-notch and he delivers on time.',
    title: 'CTO, Tech Innovators',
  },
  {
    name: 'Jane Smith',
    feedback: 'Great experience working with Sameer on our mobile app. Highly recommended for React Native projects.',
    title: 'Product Manager, FitApp',
  },
  {
    name: 'Alex Lee',
    feedback: 'His Power BI dashboards provided us with valuable business insights. Very professional and skilled.',
    title: 'Business Analyst, DataCorp',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="border-b-4 border-indigo-500 dark:border-yellow-300 pb-2">Testimonials & Achievements</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -8, scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                “{t.feedback}”
              </p>
              <div className="font-semibold text-indigo-700 dark:text-yellow-300 transition-colors">{t.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">{t.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 