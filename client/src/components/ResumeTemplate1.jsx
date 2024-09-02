import React from 'react'
import React from "react";
import { Container } from "./index";
import dgt from "../assets/doubleRight.png";
import rev from "../assets/review-1.jpeg"

const ResumeTemplate1 = ({ formData }) => {
  return (
    <Container>
    <h2 className="text-center text-3xl lg:text-4xl my-8 font-bold">
      Resume Details Overview
    </h2>
    <div className="lg:mx-28 mt-10 mb-20 mx-10">
      {/* all details of template */}

      <header className="ml-3">
        <div className="flex items-center">
          <img src={dgt} alt="" height="25" width="25" />
          <h1 className="m-6 ml-3 font-bold text-xl">
            PERSONAL INFORMATION :
          </h1>
        </div>
        <div className="">
          {/* photo fetch  */}
          <img src={rev} alt="image" className="h-32 w-32 object-cover m-4 rounded border"/>
          <p className="font-semibold text-lg my-3">Name: {formData} Suthar Kamlesh</p>
          {/* contact of about */}
        </div>
        <div className="flex flex-col">
          <div className="flex mb-2 items-center">
            <p className="font-medium ">Phone : {formData}7990184597</p>
          </div>
          <div className="flex mb-2 items-center">
            <p className="font-medium ">Mail : {formData}dfg</p>
          </div>
          <div className="flex mb-2 items-center">
            <p className="font-medium ">LinkedIn : {formData}dfbh</p>
          </div>
          <div className="flex mb-2 items-center">
            <p className="font-medium">Git : {formData} jdfh</p>
          </div>
        </div> 
      </header>

      {/* <section className="ml-3">
      <div className="flex items-center">
          <img src={dgt} alt="" height="25" width="25" />
          <h1 className="m-6 ml-3 font-bold text-xl">
            EDUCATION :
          </h1>
        </div>
      <ul>
        {resumeData.education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> at {edu.institution}, {edu.location} ({edu.duration})
          </li>
        ))}
      </ul>
    </section> */}
    </div>
  </Container>
  )
}

export default ResumeTemplate1;
