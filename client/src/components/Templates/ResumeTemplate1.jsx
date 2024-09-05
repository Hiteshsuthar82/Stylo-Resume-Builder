import React, { useEffect, useState } from "react";


const ResumeTemplate1 = ({data}) => {
  

  return data && (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <div className="text-center">
        <img
          src={data.image}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-orange-600">{data.name}</h1>
        <p className="text-lg text-gray-700">
          {data.occupation || "Occupation"}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-orange-600">
          Contact Information
        </h2>
        <ul className="text-gray-700">
          <li>Email: {data.contact.email}</li>
          <li>Phone: {data.contact.phone}</li>
          {data.contact.linkedin && <li>LinkedIn: {data.contact.linkedin}</li>}
          {data.contact.github && <li>GitHub: {data.contact.github}</li>}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-orange-600">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="text-gray-700 mt-4">
            <h3 className="font-bold">{edu.degree}</h3>
            <p>
              {edu.institution}, {edu.location} - {edu.duration}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-orange-600">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="text-gray-700 mt-4">
            <h3 className="font-bold">{exp.title}</h3>
            <p>
              {exp.company}, {exp.location} - {exp.duration}
            </p>
            <ul className="list-disc list-inside">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-orange-600">Projects</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="text-gray-700 mt-4">
            <h3 className="font-bold">{project.title}</h3>
            <p>
              {project.technologies} - {project.duration}
            </p>
            <ul className="list-disc list-inside">
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-orange-600">Skills</h2>
        <ul className="text-gray-700 list-disc list-inside">
          {Object.entries(data.skills).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeTemplate1;
