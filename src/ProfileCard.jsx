// src/ProfileCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 }
};

const socialLinks = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  leetcode: 'https://leetcode.com/yourusername',
  hackerrank: 'https://hackerrank.com/yourusername'
};

function ProfileCard({ name, role, description }) {
  return (
    <motion.div
      className="bg-dark-base/50 border border-turquoise/20 rounded-xl shadow-2xl p-8 max-w-md mx-4 mb-8 hover:shadow-3xl transition-shadow duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
          alt={name}
          className="w-32 h-32 rounded-full mb-6 border-4 border-turquoise"
        />
        
        <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
        <h3 className="text-xl text-turquoise font-medium mb-4">{role}</h3>
        <p className="text-white/80 mb-6">{description}</p>

        <div className="flex space-x-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-turquoise transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-turquoise transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-turquoise transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href={socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-turquoise transition-colors duration-300"
          >
            <SiLeetcode size={24} />
          </a>
          <a
            href={socialLinks.hackerrank}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-turquoise transition-colors duration-300"
          >
            <SiHackerrank size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfileCard;

