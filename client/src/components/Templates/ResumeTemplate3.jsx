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
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <div
        id="content-to-print"
        className="bg-white max-w-4xl mx-auto p-8 shadow-lg mt-10"
      >
        <header className="flex justify-between mb-5">
          <div>
            <h1 className="text-4xl font-bold text-purple-700">{data.name}</h1>
            <p className="text-lg">Software Engineer</p>
            <p className="text-lg">
              {data.contact.email} | {data.contact.phone} |{" "}
              {data.contact.linkedin}
            </p>
          </div>
          <img
            src={data.image || "default-image-url.webp"}
            alt="Profile"
            className="w-32 h-40 rounded-md"
          />
        </header>
        <main>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
              Profile
            </h2>
            <p className="mt-2">
              A highly skilled software engineer with over 5 years of
              experience...
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
              Experience
            </h2>
            {data.experience.map((job, index) => (
              <div className="mt-4" key={index}>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-lg">
                  {job.company} | {job.duration}
                </p>
                <ul className="list-disc list-inside mt-2">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div className="mt-4" key={index}>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-lg">
                  {edu.institution} | {edu.duration}
                </p>
              </div>
            ))}
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
              Projects
            </h2>
            {data.projects.map((project, index) => (
              <div className="mt-4" key={index}>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-lg">
                  {project.technologies} | {project.duration}
                </p>
                <ul className="list-disc list-inside mt-2">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
              Skills
            </h2>
            <ul className="list-disc list-inside mt-4">
              <li>{data.skills.languages}</li>
              <li>{data.skills.frameworks}</li>
              <li>{data.skills.developerTools}</li>
              <li>{data.skills.libraries}</li>
            </ul>
          </section>
        </main>
      </div>
      <button
        className={`fixed top-10 right-5 px-12 lg:px-16 my-9 py-3 text-white font-bold text-base rounded-full bg-purple-600 hover:bg-purple-700`}
        onClick={generatePDF}
      >
        download
      </button>
    </>
  );
}

export default Resume;
