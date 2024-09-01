import React from "react";

const UserProfile = () => {
  const user = {
    name: "Jake Ryan",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fconstructingexcellence.org.uk%2Fdummy-member%2F&psig=AOvVaw0MK1-isonIeKyHplT_z_VX&ust=1723723747150000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCbqbe59IcDFQAAAAAdAAAAABAE",
    contact: {
      phone: "123-456-7890",
      email: "jake@uni.edu",
      linkedin: "linkedin.com/in/jake",
      github: "github.com/jake",
    },
    education: [
      {
        institution: "Southwestern University",
        degree: "Bachelor of Arts in Computer Science, Minor in Business",
        location: "Georgetown, TX",
        duration: "Aug. 2018 - May 2021",
      },
      {
        institution: "University of Texas",
        degree: "Master of Science in Computer Science",
        location: "Austin, TX",
        duration: "Aug. 2021 - May 2023",
      },
    ],
    experience: [
      {
        title: "Undergraduate Research Assistant",
        company: "Texas A&M University",
        location: "College Station, TX",
        duration: "June 2020 - Present",
        responsibilities: [
          "Developed a REST API using FlaskAPI and PostgreSQL to store data from learning management systems.",
        ],
      },
      {
        title: "Software Engineering Intern",
        company: "Google",
        location: "Mountain View, CA",
        duration: "June 2022 - Aug. 2022",
        responsibilities: [
          "Worked on enhancing the Google Cloud Platform by developing new features and fixing bugs.",
          "Collaborated with cross-functional teams to deliver high-quality software.",
        ],
      },
    ],
    skills: {
      languages: "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R",
      frameworks:
        "React, Node.js, Flask, jUnit, WordPress, Material-UI, FastAPI",
      developerTools:
        "Git, Docker, Tmux, CI/CD, Google Cloud Platform, VS Code, Virtual Studio, PyCharm, IntelliJ, Eclipse",
      libraries: "pandas, NumPy, Matplotlib",
    },
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={user.image}
          alt={`${user.name}'s profile`}
          className="w-32 h-32 rounded-full object-cover mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.contact.email}</p>
          <p className="text-gray-600">{user.contact.phone}</p>
          <div className="flex space-x-4 mt-2">
            {user.contact.linkedin && (
              <a
                href={`https://${user.contact.linkedin}`}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            {user.contact.github && (
              <a
                href={`https://${user.contact.github}`}
                className="text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {user.education && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
          <ul className="list-disc list-inside mt-2">
            {user.education.map((edu, index) => (
              <li key={index} className="text-gray-700">
                <p className="font-bold">{edu.degree}</p>
                <p>{edu.institution}</p>
                <p>{edu.location}</p>
                <p className="text-gray-500">{edu.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {user.experience && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
          <ul className="list-disc list-inside mt-2">
            {user.experience.map((exp, index) => (
              <li key={index} className="text-gray-700">
                <p className="font-bold">
                  {exp.title} - {exp.company}
                </p>
                <p>{exp.location}</p>
                <p className="text-gray-500">{exp.duration}</p>
                <ul className="list-disc list-inside ml-5">
                  {exp.responsibilities.map((task, idx) => (
                    <li key={idx} className="text-gray-600">
                      {task}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      {user.skills && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
          <ul className="list-none mt-2 space-y-2">
            <li className="text-gray-700">
              <strong>Languages:</strong> {user.skills.languages}
            </li>
            <li className="text-gray-700">
              <strong>Frameworks:</strong> {user.skills.frameworks}
            </li>
            <li className="text-gray-700">
              <strong>Developer Tools:</strong> {user.skills.developerTools}
            </li>
            <li className="text-gray-700">
              <strong>Libraries:</strong> {user.skills.libraries}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
