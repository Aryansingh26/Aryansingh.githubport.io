import React from 'react';

function Experience() {
  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Information Security Manager</h3>
          <p className="text-gray-600 italic">Tata Consultancy Services (Aug 2022 – Present)</p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Reviewed Generative AI integration (Azure OpenAI) for secure deployment and compliance.</li>
            <li>Led cloud security initiatives including CSPM report analyses and architecture reviews.</li>
            <li>Conducted security training and phishing simulations, reducing successful attacks by 20%.</li>
            <li>Executed an ISO 27001 audit with zero findings and managed server hardening to improve compliance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
