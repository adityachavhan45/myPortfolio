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
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--purple-color)] to-[var(--pink-color)] text-transparent bg-clip-text"
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="bg-[var(--card-bg-color)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-[var(--primary-color)] text-gray-300 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-[var(--primary-color)] text-gray-300 rounded-md text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 bg-gradient-to-r from-[var(--purple-color)] to-[var(--pink-color)] text-white rounded-md flex-grow flex items-center justify-center gap-1"
                    onClick={() => openProjectDetails(project)}
                  >
                    View Details
                  </motion.button>
                  
                  <motion.a 
                    href={project.demoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-[var(--primary-color)] text-white rounded-md flex items-center justify-center"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a 
                    href={project.codeLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-[var(--primary-color)] text-white rounded-md flex items-center justify-center"
                  >
                    <FiGithub className="w-5 h-5" />
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
            className="bg-[var(--card-bg-color)] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-4">
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
              
              <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4 bg-gradient-to-r from-[var(--purple-color)] to-[var(--pink-color)] text-transparent bg-clip-text">
                {selectedProject.title}
              </h2>
              
              <p className="text-gray-300 mb-6">
                {selectedProject.longDescription}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-[var(--purple-color)] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-[var(--primary-color)] text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a 
                  href={selectedProject.demoLink} 
                  className="px-6 py-3 bg-gradient-to-r from-[var(--purple-color)] to-[var(--pink-color)] text-white rounded-md transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <FiExternalLink className="w-5 h-5" /> Live Demo
                </a>
                <a 
                  href={selectedProject.codeLink} 
                  className="px-6 py-3 border-2 border-[var(--purple-color)] text-[var(--purple-color)] rounded-md hover:bg-[var(--purple-color)] hover:text-white transition-all duration-300 flex items-center gap-2"
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