import React, { useState } from "react";
import { Container } from "./../index";
import { Template, ShowImagePopup } from "./../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function AllTemplates() {
  const navigate = useNavigate();
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [enlargedImageSrc, setEnlargedImageSrc] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);

  const templates = useSelector((state) => state.resume.allTemplates);

  const handleSearchClick = (src) => {
    setEnlargedImageSrc(src);
    setPopupVisible(true);
    setTimeout(() => setImageVisible(true), 10);
  };

  const closePopup = () => {
    setImageVisible(false);
    setTimeout(() => {
      setPopupVisible(false);
      setEnlargedImageSrc(null);
    }, 300);
  };

  const onNextClick = () => {
    navigate(`/createResume/${selectedTemplateId}`);
  };

  return (
    <>
      <Helmet>
        <title>
          Professional Resume Templates | Create Your Standout Resume
        </title>
        <meta
          name="description"
          content="Explore a wide range of professional resume templates. Choose the one that fits your style and build a standout resume effortlessly."
        />
        <meta
          name="keywords"
          content="resume templates, professional resume builder, create resume, job templates, customizable resume templates"
        />
        <meta name="author" content="Your Brand Name" />
      </Helmet>
      <Container>
        {/* SEO Optimized Header */}
        <header>
          <h1 className="text-2xl font-bold text-center mt-5">
            Choose Your Perfect Resume Template
          </h1>
          <p className="text-center text-gray-700 mt-2">
            Browse our professionally designed resume templates to create a
            standout resume that lands you the job!
          </p>
        </header>

        {/* Grid of Templates */}
        <section
          className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-3 gap-16 flex-wrap justify-center"
          aria-labelledby="templates-heading"
        >
          <h2 id="templates-heading" className="sr-only">
            Resume Templates
          </h2>
          {templates &&
            templates.map((template) => (
              <Template
                key={template.id}
                templateData={template}
                isSelected={selectedTemplateId === template.id}
                onClick={setSelectedTemplateId}
                onSearchClick={handleSearchClick}
              />
            ))}
        </section>

        {/* Next Button */}
        {selectedTemplateId && (
          <button
            onClick={onNextClick}
            className="mt-5 px-10 py-3 fixed bottom-5 right-5 sm:bottom-8 sm:right-8 lg:bottom-9 lg:right-11 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all"
            aria-label="Proceed to create resume with selected template"
          >
            Next
          </button>
        )}

        {/* Enlarged Image Popup */}
        {enlargedImageSrc && (
          <ShowImagePopup
            src={enlargedImageSrc}
            isPopupVisible={isPopupVisible}
            isImageVisible={isImageVisible}
            closePopup={closePopup}
          />
        )}
      </Container>
    </>
  );
}

export default AllTemplates;
