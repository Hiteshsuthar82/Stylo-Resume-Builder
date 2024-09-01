import React from "react";
import { useSelector } from "react-redux";
import { Container, Template } from "./../index";
import { useNavigate } from "react-router-dom";

function MyResumes() {
  const templates = useSelector((state) => state.resume.allTemplates);
  const navigate = useNavigate()

  const myResumes = [
    {
      templateId: "t2",
    },
    {
      templateId: "t5",
    },
    {
      templateId: "t3",
    },
  ];

  const openResumeView = (resumeId) => {
    navigate(`/resumeView/${resumeId}`)
  }

  return (
    <Container>
      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-3 gap-16 flex-wrap justify-center">
        {templates &&
          myResumes &&
          myResumes.map((resume, index) => {
            const template = templates.find(
              (template) => template.id == resume.templateId
            );
            if (template) {
              return (
                <Template
                  key={index}
                  templateData={template}
                  onClick={openResumeView}
                  // isSelected={selectedTemplateId === template.id}
                  // onSearchClick={handleSearchClick}
                />
              );
            }
          })}
      </div>

      {/* {selectedTemplateId && (
        <button
          onClick={() => alert(`You selected template ${selectedTemplateId}`)}
          className="mt-5 px-10 py-3 fixed bottom-5 right-5 sm:bottom-8 sm:right-8 lg:bottom-9 lg:right-11 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all"
        >
          Next
        </button>
      )} */}

      {/* {enlargedImageSrc && (
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-20 transition-opacity duration-300 ${
            isPopupVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closePopup}
        >
          <div
            className={`relative transform transition-transform duration-300 ${
              isImageVisible ? "scale-100" : "scale-y-0"
            }`}
          >
            <img
              src={enlargedImageSrc}
              alt="Enlarged Template"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 h-10 w-10"
            >
              ✕
            </button>
          </div>
        </div>
      )} */}
    </Container>
  );
}

export default MyResumes;
