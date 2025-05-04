import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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

  return (
    <section id="about" className="py-20">
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
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Replace with your actual image */}
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.3 
                  }}
                  className="text-gray-600 dark:text-gray-300 text-8xl font-bold"
                >
                  AC
                </motion.span>
              </div>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="absolute mt-56 flex space-x-3"
            >
              <a href="https://github.com/adityachavhan45" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1E2235] rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <FiGithub className="w-5 h-5 text-purple-400" />
              </a>
              <a href="https://www.linkedin.com/in/aditya-chavhan-25b39a2bb" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1E2235] rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <FiLinkedin className="w-5 h-5 text-purple-400" />
              </a>
            </motion.div>
          </motion.div>
          
          <div className="w-full md:w-2/3 space-y-3 md:space-y-4 bg-[#1E2235] rounded-xl p-4 md:p-6 shadow-lg text-white">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white"
            >
              Aditya Chavhan
            </motion.h3>
            
            <motion.h4 
              variants={itemVariants}
              className="text-lg md:text-xl mb-4 md:mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold"
            >
              MERN Stack Developer
            </motion.h4>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-100 mb-4 md:mb-6 text-base md:text-lg leading-relaxed text-justify"
            >
              I am a passionate MERN Stack Developer and Cybersecurity enthusiast with expertise in building responsive and user-friendly web applications. 
              I specialize in creating modern web solutions using MongoDB, Express.js, React.js, and Node.js, while also focusing on implementing secure coding practices.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-100 mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-justify"
            >
              My goal is to develop applications that not only meet client requirements but also provide an exceptional user experience with strong security foundations. 
              I have expertise in vulnerability assessment, ethical hacking, and OSINT framework, allowing me to build more secure applications. 
              I am constantly learning and staying updated with the latest technologies in web development and cybersecurity.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:shadow-lg transition-all duration-300 flex items-center gap-1 md:gap-2 text-sm md:text-base"
              >
                <FiMail className="w-4 h-4 md:w-5 md:h-5" />
                Contact Me
              </motion.a>
              
              <motion.a 
                href="/Aditya_CV.pdf" 
                download="Aditya_Chavhan_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 md:px-6 md:py-3 border-2 border-purple-500 text-purple-400 rounded-md hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-1 md:gap-2 text-sm md:text-base"
              >
                <FiDownload className="w-4 h-4 md:w-5 md:h-5" />
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;