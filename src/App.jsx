import ProfileCard from './ProfileCard';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import profilePic from './pic.jpg';

export default function App() {
  const socialLinks = {
    github: 'https://github.com/engineersameer',
    linkedin: 'https://www.linkedin.com/in/sameer-tariq-4bb2032a0/',
    twitter: 'https://x.com/engsameertariq',
    leetcode: 'https://leetcode.com/yourusername',
    hackerrank: 'https://hackerrank.com/yourusername'
  };  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white">
        <div id="home" className="py-20 pt-36">
          <section className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    Sameer Tariq
                  </span>
                </h1>
                <h2 className="text-3xl font-bold text-gray-700 mb-6">Full Stack Developer</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Experienced in the field of software development with a strong background in web technologies. 
                  Passionate about creating intuitive and performant applications that solve real-world problems.
                </p>
                
                <div className="flex space-x-4 mb-8">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-all"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={socialLinks.linkedin}O
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-all"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-all"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href={socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-all"
                  >
                    <SiLeetcode size={24} />
                  </a>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md">
                    Contact Me
                  </a>
                  <a href="#projects" className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all">
                    My Work
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="order-1 md:order-2 flex justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-20"></div>
                  <img
                    src={profilePic}
                    alt="Sameer Tariq"
                    className="w-64 h-64 rounded-full border-4 border-indigo-600 relative z-10 bg-white object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        <div id="skills" className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 py-20 shadow-inner">
          <section className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 pt-12">
                <span className="border-b-4 border-indigo-500 pb-2">My Skills</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "React", level: 90 },
                  { name: "Node.js", level: 85 },
                  { name: "JavaScript", level: 95 },
                  { name: "TypeScript", level: 80 },
                  { name: "MongoDB", level: 75 },
                  { name: "Tailwind CSS", level: 85 }
                ].map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-gray-600 text-right">{skill.level}%</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
          
        <div id="projects" className="py-20">
          <section className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 pt-12">
                <span className="border-b-4 border-indigo-500 pb-2">Projects</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "E-commerce Platform",
                    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB",
                    tags: ["React", "Node.js", "MongoDB"]
                  },
                  {
                    title: "Portfolio Website",
                    description: "A responsive portfolio website showcasing my projects and skills",
                    tags: ["React", "Tailwind CSS", "Framer Motion"]
                  }
                ].map((project, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
          
        <div id="experience" className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 py-20 shadow-inner">
          <section className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 pt-12">
                <span className="border-b-4 border-indigo-500 pb-2">Experience</span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    role: "Senior Frontend Developer",
                    company: "Tech Innovators",
                    period: "2021 - Present",
                    description: "Leading the frontend development team, implementing new features and optimizing performance."
                  },
                  {
                    role: "Full Stack Developer",
                    company: "Digital Solutions",
                    period: "2019 - 2021",
                    description: "Developed and maintained various web applications using React, Node.js, and MongoDB."
                  }
                ].map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-600"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                      <span className="text-indigo-600 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
          
        <div id="contact" className="py-20">
          <section className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 pt-12">
                <span className="border-b-4 border-indigo-500 pb-2">Contact Me</span>
              </h2>
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 rounded-md font-medium hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
