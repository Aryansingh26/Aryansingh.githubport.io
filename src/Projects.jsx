import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Generative AI Security Review (2023):</strong> Evaluated the security integration of Azure OpenAI and ensured compliance with cloud security policies.</li>
          <li><strong>ISO 27001 Audit (2023):</strong> Conducted an internal ISO 27001 audit for a core application with zero major findings.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
