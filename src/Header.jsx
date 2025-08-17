import React from 'react';

function Header() {
  return (
    <header id="home" className="bg-gray-100 text-center py-20 mt-16">
      <h1 className="text-4xl md:text-5xl font-bold">Aryan Singh</h1>
      <p className="text-xl text-gray-700 mt-2">Information Security Manager</p>
      <div className="mt-6">
        <p className="uppercase tracking-wider text-gray-600">Follow</p>
        <ul className="flex justify-center space-x-4 mt-2 text-gray-600">
          <li>Pune, Maharashtra</li>
          <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Twitter</a></li>
          <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</a></li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub</a></li>
          <li><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Google Scholar</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
