import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";  // Import React Helmet
import template_img from "../assets/template.svg";
import res_design from "../assets/resume_design.svg";
import ready_res from "../assets/ready_resume.svg";

function StepsPage() {
  const navigate = useNavigate();
  
  return (
    <>
      <Helmet>
        <title>How Stylo Resume Builder Works - Step-by-Step Guide</title>
        <meta
          name="description"
          content="Learn how Stylo Resume Builder works through a simple 3-step process. Explore templates, add pre-written content, and generate a polished resume!"
        />
        <meta name="keywords" content="Resume Builder, create resume, resume templates, professional resume, job application, career, resume generator" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="How Stylo Resume Builder Works - Step-by-Step Guide" />
        <meta
          property="og:description"
          content="Explore how Stylo Resume Builder helps you create a standout resume in just three easy steps."
        />
        <meta
          property="og:image"
          content="https://stylo-resume-builder.vercel.app/assets/template.svg"  // Add a relevant image URL
        />
        <meta property="og:url" content="https://stylo-resume-builder.vercel.app/steps" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://stylo-resume-builder.vercel.app/steps" />
      </Helmet>

      <div className="contain mx-20">
        <h2 className="text-center text-4xl my-10 font-bold">
          Here’s how Stylo Resume Builder works:
        </h2>
        <div className="flex flex-col lg:flex-row mt-20 lg:w-full">
          <div className="flex flex-col mb-10 items-center lg:w-1/3">
            <div className="mb-2">
              <img src={template_img} alt="template image" height="65" width="67" />
            </div>
            <div className="m-2">
              <h4 className="text-xl font-semibold">Step 1</h4>
            </div>
            <div className="w-80 h-20 text-center m-2">
              <p className="text-lg">
                Explore our created templates and step-by-step guidance to create
                a standout resume quickly.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 items-center lg:w-1/3">
            <div className="mb-2">
              <img src={res_design} alt="design image" />
            </div>
            <div className="m-2">
              <h4 className="text-xl font-semibold">Step 2</h4>
            </div>
            <div className="w-80 h-20 text-center m-2">
              <p className="text-lg">
                Find the right words to showcase your skills. Just search by job
                title, and access pre-written content tailored to your expertise.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 items-center lg:w-1/3">
            <div className="mb-2">
              <img src={ready_res} alt="ready resume image" />
            </div>
            <div className="m-2">
              <h4 className="text-xl font-semibold">Step 3</h4>
            </div>
            <div className="w-80 h-20 text-center m-2">
              <p className="text-lg">
                Fine-tune the details with our tools, generate each section with
                ease, and download your polished resume. You’re all set to apply!
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            onClick={() => navigate("/all-templates")}
            className="px-16 lg:px-20 my-9 py-3 bg-purple-600 text-white font-bold text-base rounded-full hover:bg-purple-700"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default StepsPage;
