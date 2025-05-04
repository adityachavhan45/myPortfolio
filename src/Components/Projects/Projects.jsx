import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: 'Room Booking System',
      description: 'A comprehensive room booking platform built with the MERN stack. Users can search, book, and manage room reservations with an intuitive interface.',
      longDescription: 'This Room Booking System provides a seamless experience for users looking to book accommodations. The application features an advanced search functionality with filters for dates, room types, and amenities. Users can create accounts, manage their bookings, and leave reviews. The admin panel allows property owners to manage their listings, view booking statistics, and respond to user inquiries.',
      features: ['User authentication', 'Advanced search filters', 'Real-time availability', 'Booking management', 'Review system', 'Admin dashboard'],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://placehold.co/600x400/e2e8f0/1e40af?text=Room+Booking',
      demoLink: 'https://room-booking-frontend-euwi.onrender.com/',
      codeLink: 'https://github.com/adityachavhan45/room-booking-frontend',
    },
    {
      id: 2,
      title: 'Blogging Website',
      description: 'A feature-rich blogging platform where Admin users can create, edit, and publish articles. Includes user authentication, comments, and content management.',
      longDescription: 'This Blogging Platform offers a comprehensive solution for content creators. Users can write and format articles with a rich text editor, categorize posts, and add tags for better discoverability. The platform supports user profiles, followers, and a notification system. Readers can interact through comments, likes, and sharing options. The admin dashboard provides content moderation tools and analytics.',
      features: ['Rich text editor', 'Categories and tags', 'User profiles', 'Comment system', 'Social sharing', 'Analytics dashboard'],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://placehold.co/600x400/e2e8f0/1e40af?text=Blogging+Website',
      demoLink: 'https://likhoverse.in/',
      codeLink: 'https://github.com/adityachavhan45/blogfrontend',
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'An online shopping platform with user authentication, product catalog, shopping cart, and checkout functionality.',
      longDescription: 'This E-commerce Platform provides a complete online shopping experience. The application features a product catalog with categories, filters, and search functionality. Users can add items to their cart, proceed to checkout, and make payments securely. The platform includes user profiles, order history, and wishlist functionality. The admin panel allows for inventory management, order processing, and sales analytics.',
      features: ['Product catalog', 'Shopping cart', 'Secure checkout', 'User accounts', 'Order tracking', 'Admin dashboard'],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://placehold.co/600x400/e2e8f0/1e40af?text=E-commerce',
      demoLink: '#',
      codeLink: 'https://github.com/adityachavhan45/shophub',
    },
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20">
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
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#1E2235] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-white"
            >
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-500 mb-4">{project.title}</h3>
              </div>
              
              <div className="px-6 pb-6">
                <p className="text-gray-300 mb-6 text-justify">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-[#151823] rounded-md text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-[#151823] rounded-md text-xs text-gray-300">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-purple-500 text-purple-400 rounded-md hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={closeProjectDetails}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                {selectedProject.title}
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {selectedProject.longDescription}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={selectedProject.demoLink} 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <FiExternalLink className="w-5 h-5" /> Live Demo
                </a>
                <a 
                  href={selectedProject.codeLink} 
                  className="px-6 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <FiGithub className="w-5 h-5" /> View Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;