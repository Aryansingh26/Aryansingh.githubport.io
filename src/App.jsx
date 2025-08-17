import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown, FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white"
          >
            John Doe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-xl text-white"
          >
            Full-Stack Developer
          </motion.p>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transform transition"
          >
            View Projects <FaArrowDown className="inline ml-2" />
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            I am a passionate developer with experience in building web applications using modern technologies. I enjoy turning ideas into reality through code, and I'm always eager to learn new things and take on challenges.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
            >
              <FaLaptopCode className="text-indigo-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                A brief description of the project goes here. It highlights the main features and technologies used.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-indigo-600 hover:underline flex items-center">
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
                <a href="#" className="text-indigo-600 hover:underline flex items-center">
                  <FaGithub className="mr-1" /> Code
                </a>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
            >
              <FaLaptopCode className="text-indigo-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                A brief description of the project goes here. It highlights the main features and technologies used.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-indigo-600 hover:underline flex items-center">
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
                <a href="#" className="text-indigo-600 hover:underline flex items-center">
                  <FaGithub className="mr-1" /> Code
                </a>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
            >
              <FaLaptopCode className="text-indigo-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                A brief description of the project goes here. It highlights the main features and technologies used.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-indigo-600 hover:underline flex items-center">
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
                <a href="#" className="text-indigo-600 hover:underline flex items-center">
                  <FaGithub className="mr-1" /> Code
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center"
          >
            Contact Me
          </motion.h2>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600"><FaLinkedin size={30} /></a>
            <a href="#" className="text-gray-700 hover:text-indigo-600"><FaGithub size={30} /></a>
            <a href="#" className="text-gray-700 hover:text-indigo-600"><FaTwitter size={30} /></a>
            <a href="#" className="text-gray-700 hover:text-indigo-600"><FaEnvelope size={30} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
