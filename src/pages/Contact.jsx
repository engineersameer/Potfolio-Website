import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="border-b-4 border-indigo-500 dark:border-yellow-300 pb-2">Contact me</span>
        </motion.h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transition-colors">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 transition-colors">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-yellow-300 focus:border-transparent bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 transition-colors">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-yellow-300 focus:border-transparent bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 transition-colors">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-yellow-300 focus:border-transparent bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-300 dark:to-pink-400 text-white dark:text-gray-900 py-2 px-6 rounded-md font-medium hover:opacity-90 transition-opacity transition-colors">
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center">
            <a href="mailto:your.email@example.com" className="text-indigo-600 underline">Or email me directly</a>
          </div>
        </div>
      </div>
    </section>
  );
} 
