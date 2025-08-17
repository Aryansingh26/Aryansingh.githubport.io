import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
        <div className="text-gray-700">
          <p className="mb-2">
            <strong>Email:</strong> <a href="mailto:Aryanrnaa@gmail.com" className="text-blue-500 hover:underline">Aryanrnaa@gmail.com</a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> <a href="tel:+917007127106" className="text-blue-500 hover:underline">+91-7007127106</a>
          </p>
          <p className="mb-2">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aryan-singh-05a464209" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn Profile</a>
          </p>
          <p>
            <strong>GitHub:</strong> <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/username</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
