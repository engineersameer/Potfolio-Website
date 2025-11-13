import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-[#111417] transition-colors duration-500 overflow-hidden">
      {/* Clip-path angled section for freelancing CTA */}
      <div className="absolute top-0 left-0 w-full h-32 bg-light-gray dark:bg-[#16191d]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="border-b-4 border-turquoise pb-2">Contact Me</span>
        </motion.h2>
        <div className="max-w-2xl mx-auto bg-white/80 dark:bg-dark-base/50 border border-turquoise/20 p-8 rounded-xl shadow-lg transition-colors">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1 transition-colors">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-turquoise/30 rounded-md focus:ring-2 focus:ring-turquoise focus:border-turquoise bg-white dark:bg-dark-base/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/50 transition-colors" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1 transition-colors">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-turquoise/30 rounded-md focus:ring-2 focus:ring-turquoise focus:border-turquoise bg-white dark:bg-dark-base/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/50 transition-colors" 
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1 transition-colors">Message</label>
              <textarea 
                rows="4" 
                className="w-full px-4 py-2 border border-turquoise/30 rounded-md focus:ring-2 focus:ring-turquoise focus:border-turquoise bg-white dark:bg-dark-base/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/50 transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-turquoise text-dark-base py-3 px-6 rounded-md font-semibold hover:bg-turquoise/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center">
            <a href="mailto:your.email@example.com" className="text-turquoise hover:text-turquoise/80 underline transition-colors font-medium">Or email me directly</a>
          </div>
        </div>
      </div>
    </section>
  );
} 