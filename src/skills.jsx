import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Network Security:</strong> Firewalls, IDS/IPS, Endpoint Protection, VPN</li>
          <li><strong>Security Operations & Monitoring:</strong> SIEM (Splunk, Azure Sentinel), Log Analysis, Threat Detection</li>
          <li><strong>Cloud Security & Platforms:</strong> Microsoft Azure, AWS, Cloud Security Fundamentals</li>
          <li><strong>Governance, Risk & Compliance (GRC):</strong> Risk Assessment, IT Audit, ISO 27001, NIST, Vendor Risk Management</li>
          <li><strong>Identity & Access Management:</strong> IAM, Access Control Policies, Role-Based Access</li>
          <li><strong>AI & Data Security:</strong> Generative AI Security, AI Model Security, Data Privacy, Threat Assessment</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
