import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiServer, FiTool, FiDatabase, FiShield } from 'react-icons/fi';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Backend');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiCode />,
      skills: [
        { name: 'HTML5', level: 80 },
        { name: 'CSS3', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'React.js', level: 80 },
        { name: 'Tailwind CSS', level: 60 },
        { name: 'Bootstrap', level: 60 },
        { name: 'Responsive Design', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: <FiServer />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 70 },
        { name: 'RESTful APIs', level: 75 },
      ],
    },
    {
      title: 'Cybersecurity',
      icon: <FiShield />,
      skills: [
        { name: 'Vulnerability Assessment', level: 80 },
        { name: 'Basic Networking', level: 85 },
        { name: 'Ethical Hacking', level: 75 },
        { name: 'OSINT Framework', level: 82 },
        { name: 'Security Testing', level: 80 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: <FiTool />,
      skills: [
        { name: 'Git & GitHub', level: 70 },
        { name: 'VS Code', level: 75 },
        { name: 'Burpsuite', level: 95 },
        { name: 'NMAP', level: 95 }
      ],
    },
  ];

  const activeCategory = skillCategories.find(category => category.title === activeTab);

  return (
    <section id="skills" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          My Skills
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title)}
              className={`px-3 py-2 md:px-4 md:py-3 rounded-md flex items-center gap-1 md:gap-2 transition-all duration-300 text-sm md:text-base ${activeTab === category.title
                ? 'bg-purple-600 text-white'
                : 'bg-[#1E2235] text-gray-300 hover:bg-opacity-80'}`}
            >
              <span className="text-base md:text-lg">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1E2235] rounded-lg p-4 md:p-6 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="p-2 md:p-3 rounded-full bg-purple-600 text-white">
              {activeCategory.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{activeCategory.title}</h3>
          </div>

          <div className="space-y-4 md:space-y-6">
            {activeCategory.skills.map((skill, index) => (
              <div key={skill.name} className="space-y-1 md:space-y-2">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 md:h-2 bg-[#1E2235] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;