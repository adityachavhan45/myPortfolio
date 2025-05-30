import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: null
  });
  
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          submitting: false,
          success: false,
          error: null
        });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: 'Email',
      value: 'chavhanshivaji50@gmail.com',
      link: 'chavhanshivaji50@gmail.com'
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: 'Phone',
      value: '+91 8087182774',
      link: 'tel:+918087182774'
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Umarkhed, Maharashtra, India',
      link: 'https://maps.google.com/?q=Mumbai,Maharashtra,India'
    }
  ];

  const socialLinks = [
    { icon: <FiLinkedin className="w-5 h-5" />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/aditya-chavhan-25b39a2bb' },
    { icon: <FiGithub className="w-5 h-5" />, name: 'GitHub', link: 'https://github.com/adityachavhan45' }
  ];

  return (
    <footer className="relative text-white overflow-hidden bg-[var(--card-bg-color)] mt-20">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        id="contact" 
        className="container mx-auto px-4 py-20"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--purple-color)] to-[var(--pink-color)] text-transparent bg-clip-text"
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-[var(--primary-color)]/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FiMessageSquare className="text-[var(--purple-color)]" />
              <span>Send Me a Message</span>
            </h3>
            
            {formStatus.success ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6"
              >
                <p className="text-green-300 font-medium">Thank you for your message! I'll get back to you soon.</p>
              </motion.div>
            ) : null}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiUser className="text-[var(--purple-color)]" />
                </div>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--primary-color)] border-2 border-[var(--primary-color)] focus:border-[var(--purple-color)] focus:outline-none focus:ring-1 focus:ring-[var(--purple-color)] transition-all duration-300 text-white"
                  placeholder="Your Name"
                  required
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiMail className="text-[var(--purple-color)]" />
                </div>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--primary-color)] border-2 border-[var(--primary-color)] focus:border-[var(--purple-color)] focus:outline-none focus:ring-1 focus:ring-[var(--purple-color)] transition-all duration-300 text-white"
                  placeholder="Your Email"
                  required
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                  <FiMessageSquare className="text-[var(--purple-color)]" />
                </div>
                <textarea 
                  id="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--primary-color)] border-2 border-[var(--primary-color)] focus:border-[var(--purple-color)] focus:outline-none focus:ring-1 focus:ring-[var(--purple-color)] transition-all duration-300 text-white resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </motion.div>
              
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={formStatus.submitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-[var(--purple-color)] to-[var(--pink-color)] text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                {formStatus.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="bg-[var(--primary-color)]/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <FiPhone className="text-[var(--purple-color)]" />
              <span>Contact Information</span>
            </h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-[var(--purple-color)]/20 rounded-lg text-[var(--purple-color)] group-hover:bg-[var(--purple-color)] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 group-hover:text-[var(--purple-color)] transition-colors">{item.title}</h4>
                    <p className="text-gray-400">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="font-medium text-gray-300 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-[var(--primary-color)] rounded-xl p-6 shadow-lg"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="bg-[var(--primary-color)] py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">  Aditya Chavhan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;