import React from "react";
import { Helmet } from "react-helmet-async";
import HomeCompo from "../components/Home";

function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Home | Stylo Resume Builder</title>
        <meta
          name="description"
          content="Welcome to Stylo Resume Builder. Create professional resumes effortlessly with customizable templates."
        />
        <meta
          name="keywords"
          content="resume builder, professional CV, online resume maker, free resume templates"
        />
        <meta property="og:title" content="Home | Stylo Resume Builder" />
        <meta
          property="og:description"
          content="Create professional resumes effortlessly with Stylo Resume Builder."
        />
        <meta
          property="og:image"
          content="https://stylo-resume-builder.vercel.app/logo.png"
        />
        <meta property="og:url" content="https://stylo-resume-builder.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Component Content */}
      <HomeCompo />
    </>
  );
}

export default Home;
