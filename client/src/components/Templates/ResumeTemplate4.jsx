import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Resume({ data }) {
  const generatePDF = () => {
    const input = document.getElementById("content-to-print");
    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <>
      {/* A4 Size Page Layout */}
      <div
        id="content-to-print"
        className="bg-white w-[210mm] h-[297mm] mx-auto p-10 shadow-lg relative"
      >
        {/* Background Design */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-purple-200 to-purple-300"></div>

        {/* Header Section */}
        <header className="flex justify-between items-center mb-8 relative z-10">
          <div className="text-left">
            <h1 className="text-5xl font-bold text-purple-700">{data.name}</h1>
            <p className="text-lg mt-2 text-gray-700 flex items-center">
              <span className="material-icons mr-2">email</span>
              {data.contact.email}
            </p>
            <p className="text-lg mt-2 text-gray-700 flex items-center">
              <span className="material-icons mr-2">phone</span>
              {data.contact.phone}
            </p>
            <p className="text-lg mt-2 text-gray-700 flex items-center">
              <span className="material-icons mr-2">link</span>
              {data.contact.linkedin}
            </p>
          </div>
          <img
            src={data.image || "default-image-url.webp"}
            alt="Profile"
            className="w-32 h-40 rounded-md shadow-md"
          />
        </header>

        {/* Two-Column Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Left Column */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            {/* Profile Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
                Profile
              </h2>
              <p className="mt-2 text-gray-700">
                A highly skilled software engineer with over 5 years of
                experience in full-stack development...
              </p>
            </section>

            {/* Experience Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
                Experience
              </h2>
              {data.experience.map((job, index) => (
                <div className="mt-4" key={index}>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-lg text-gray-600">
                    {job.company} | {job.duration}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {/* Education Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
                Education
              </h2>
              {data.education.map((edu, index) => (
                <div className="mt-4" key={index}>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-lg text-gray-600">
                    {edu.institution} | {edu.duration}
                  </p>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
                Projects
              </h2>
              {data.projects.map((project, index) => (
                <div className="mt-4" key={index}>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-lg text-gray-600">
                    {project.technologies} | {project.duration}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
                Skills
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>{data.skills.languages}</li>
                <li>{data.skills.frameworks}</li>
                <li>{data.skills.developerTools}</li>
                <li>{data.skills.libraries}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        className="fixed top-10 right-5 px-6 py-3 text-white font-bold bg-purple-600 rounded-full hover:bg-purple-700 shadow-md z-20"
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </>
  );
}

export default Resume;
