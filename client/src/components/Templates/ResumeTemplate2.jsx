import React from 'react';

const ResumeTemplate2 = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 flex mt-10">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-gray-100 p-6 rounded-l-lg">
        <div className="text-center mb-8">
          <img
            src={data.image || 'default-image-url.webp'}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-orange-600">{data.name}</h1>
          <p className="text-lg text-gray-700">{data.permanentdata ? 'Permanent Data' : ''}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600">Contact Information</h2>
          <ul className="text-gray-700">
            {data.contact.email && <li>Email: {data.contact.email}</li>}
            {data.contact.phone && <li>Phone: {data.contact.phone}</li>}
            {data.contact.linkedin && <li>LinkedIn: {data.contact.linkedin}</li>}
            {data.contact.github && <li>GitHub: {data.contact.github}</li>}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-orange-600">Skills</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Languages: {data.skills.languages}</li>
            <li>Frameworks: {data.skills.frameworks}</li>
            <li>Developer Tools: {data.skills.developerTools}</li>
            <li>Libraries: {data.skills.libraries}</li>
          </ul>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-2/3 p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-600">Professional Summary</h2>
          <p className="text-gray-700">
            {data.professionalSummary || 'A compassionate and dedicated professional with relevant experience.'}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-600">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="text-gray-700 mt-4">
              <h3 className="font-bold">{exp.title}</h3>
              <p>{exp.company}, {exp.location} - {exp.duration}</p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-orange-600">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="text-gray-700 mt-4">
              <h3 className="font-bold">{edu.degree}</h3>
              <p>{edu.institution}, {edu.location} - {edu.duration}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-orange-600">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="text-gray-700 mt-4">
              <h3 className="font-bold">{project.title}</h3>
              <p>Technologies: {project.technologies}</p>
              <ul className="list-disc list-inside">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate2;
