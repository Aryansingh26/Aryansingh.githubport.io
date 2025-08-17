
import React from 'react';

function Nav() {
  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <ul className="container mx-auto flex justify-end space-x-6 py-4 px-6">
        <li><a href="#home" className="text-gray-800 hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="text-gray-800 hover:text-blue-500">About</a></li>
        <li><a href="#experience" className="text-gray-800 hover:text-blue-500">Experience</a></li>
        <li><a href="#education" className="text-gray-800 hover:text-blue-500">Education</a></li>
        <li><a href="#skills" className="text-gray-800 hover:text-blue-500">Skills</a></li>
        <li><a href="#projects" className="text-gray-800 hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="text-gray-800 hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
