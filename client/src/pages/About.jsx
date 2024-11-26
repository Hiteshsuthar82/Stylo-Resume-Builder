import React from "react";
import { Helmet } from "react-helmet-async";
import AboutCompo from "../components/AboutUs";

function About() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us | Stylo Resume Builder</title>
        <meta
          name="description"
          content="Learn more about Stylo Resume Builder, your trusted platform for creating professional, stunning resumes with ease."
        />
        <meta
          name="keywords"
          content="about Stylo Resume Builder, resume platform, professional CV maker"
        />
        <meta property="og:title" content="About Us | Stylo Resume Builder" />
        <meta
          property="og:description"
          content="Discover the story behind Stylo Resume Builder and our commitment to providing easy-to-use resume templates."
        />
        <meta
          property="og:image"
          content="https://stylo-resume-builder.vercel.app/logo.png"
        />
        <meta property="og:url" content="https://stylo-resume-builder.vercel.app/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Content */}
      <AboutCompo />
    </>
  );
}

export default About;
