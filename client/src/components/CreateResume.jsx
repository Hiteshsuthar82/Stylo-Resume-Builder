import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Container } from "./index";
import person from "../assets/person.svg";
import mail from "../assets/envelop.svg";
import phone from "../assets/phone.svg";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/github.svg";
import dgt from "../assets/doubleRight.png";
import { useDispatch } from "react-redux";
import { createResume } from "../features/resumeSlice";
import { useNavigate, useParams } from "react-router-dom";

function CreateResume() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { templateId } = useParams();

  const [selectedImage, setSelectedImage] = React.useState(null);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      contact: { phone: "", email: "", github: "", linkedin: "" },
      experience: [],
      projects: [],
      education: [{ institution: "", degree: "", location: "", duration: "" }],
      skills: {},
    },
  });

  const {
    fields: experienceFields,
    append: addExperience,
    remove: removeExerienceField,
  } = useFieldArray({
    control,
    name: "experience",
  });

  const {
    fields: projectFields,
    append: addProject,
    remove: removeProjectField,
  } = useFieldArray({
    control,
    name: "projects",
  });

  const {
    fields: educationFields,
    append: addEducation,
    remove: removeEducationField,
  } = useFieldArray({
    control,
    name: "education",
  });

  const removeExerience = (index) => {
    removeExerienceField(index);
  };

  const removeProject = (index) => {
    removeProjectField(index);
  };

  const removeEducation = (index) => {
    removeEducationField(index);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (formData) => {
    try {
      formData.templateId = templateId;

      const response = await dispatch(createResume(formData));

      if (response && response.payload && response.payload.data) {
        const data = response.payload.data;
        alert("redirecting to temlpate view page");
        navigate(`/resumeView/${templateId}/${data._id}`);
      } else {
        console.log("No data in response or response structure is different");
      }
    } catch (error) {
      console.log("Error occurred:", error.message || error);
    }
  };

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center text-3xl lg:text-5xl my-8 font-bold">
            Career Profile Form
          </h2>
          <p className="hidden sm:block text-lg lg:text-xl mx-14 mt-10 lg:mx-24">
            Enter your information below to build a strong resume.
          </p>
          <div className="lg:mx-28 mt-10 mb-20 sm:mx-10 mr-2 ml-4">
            {/* Presnol information fields */}
            <div className="ml-3 mb-10">
              {/* Personal Information */}
              <div className="flex items-center">
                <img src={dgt} alt="" height="25" width="25" />
                <h1 className="m-6 ml-3 font-bold text-xl">
                  PERSONAL INFORMATION :
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="h-32 w-32 border border-purple-400 flex items-center justify-center rounded">
                  {/* Image Box */}
                  {selectedImage && (
                    <div>
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="h-32 w-32 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
                {/* Photo Upload */}
                <div className="flex flex-col">
                  <div className="m-5">
                    <p>Add a Photo to your resume</p>
                  </div>
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="ml-5 block text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-200"
                    />
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex lg:items-center gap-6 flex-row my-7">
                {/* <label className="font-medium"> Name: </label> */}
                <img src={person} alt="phone-icon" className="mb-2 h-9" />
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Kamlesh Suthar"
                  className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                />
              </div>
              <div className="flex max-sm:flex-col">
                <div className="flex items-center my-2 mr-5">
                  <img src={phone} alt="phone-icon" className="mb-2" />
                  <input
                    type="text"
                    {...register("contact.phone")}
                    placeholder="+91 12345 67890"
                    className="border border-gray-400 rounded-sm w-[270px] mb-2 mx-8 mt-1 h-8 px-3 py-1"
                  />
                </div>
                <div className="flex my-2 mr-5">
                  <img src={mail} alt="mail-icon" className="mb-2" />
                  <input
                    type="text"
                    {...register("contact.email")}
                    placeholder="kamleshsuthar12@example.com"
                    className="border border-gray-400 rounded-sm w-[270px] mb-2 mx-8 mt-1 h-8 px-3 py-1"
                  />
                </div>
              </div>
              <div className="flex max-sm:flex-col">
                <div className="flex items-center my-2 mr-5">
                  <img src={linkedin} alt="linkedin-icon" className="mb-2" />
                  <input
                    type="text"
                    {...register("contact.linkedin")}
                    placeholder="linkedin.com/in/kamlesh"
                    className="border border-gray-400 rounded-sm w-[270px] mb-2 mx-8 mt-1 h-8 px-3 py-1"
                  />
                </div>
                <div className="flex my-2 mr-5">
                  <img src={git} alt="git-icon" className="mb-2" />
                  <input
                    type="text"
                    {...register("contact.github")}
                    placeholder="github.com/kamlesh"
                    className="border border-gray-400 rounded-sm w-[270px] mb-2 mx-8 mt-1 h-8 px-3 py-1"
                  />
                </div>
              </div>
            </div>

            {/* Education Fields */}
            <div className="mb-10">
              {educationFields.map((education, index) => (
                <div key={education.id} className="ml-3">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <img src={dgt} alt="" height="25" width="25" />
                      <h1 className="m-6 ml-3 font-bold text-xl">
                        EDUCATION {educationFields.length > 1 ? index + 1 : ""}{" "}
                        :
                      </h1>
                    </div>
                    {educationFields.length > 1 ? (
                      <button
                        type="button"
                        onClick={() => removeEducation(index)}
                        className="ml-0 lg:ml-12 border border-red-300 rounded-full px-4 py-1 text-red-500 bg-purple-50 hover:bg-purple-200"
                      >
                        remove
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]">
                      {" "}
                      Institution:{" "}
                    </label>
                    <input
                      type="text"
                      {...register(`education.${index}.institution`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]"> Degree: </label>
                    <input
                      type="text"
                      {...register(`education.${index}.degree`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]"> Location: </label>
                    <input
                      type="text"
                      {...register(`education.${index}.location`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]"> Duration: </label>
                    <input
                      type="text"
                      {...register(`education.${index}.duration`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addEducation({
                    institution: "",
                    degree: "",
                    location: "",
                    duration: "",
                  })
                }
                className="ml-5 mb-5 border rounded-full px-4 py-1 text-purple-700 bg-purple-50 hover:bg-purple-200"
              >
                {" "}
                Add education
              </button>
            </div>

            {/* Project Fields */}
            <div className="mb-10">
              {projectFields.map((project, index) => (
                <div key={project.id} className="ml-3">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <img src={dgt} alt="" height="25" width="25" />
                      <h1 className="m-6 ml-3 font-bold text-xl">
                        PROJECT {projectFields.length > 1 ? index + 1 : ""} :
                      </h1>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProject(index)}
                      className="ml-0 lg:ml-12 border border-red-300 rounded-full px-4 py-1 text-red-500 bg-purple-50 hover:bg-purple-200"
                    >
                      remove
                    </button>
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]"> Title: </label>
                    <input
                      type="text"
                      {...register(`projects.${index}.title`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]">
                      {" "}
                      Technologies:{" "}
                    </label>
                    <input
                      type="text"
                      {...register(`projects.${index}.technologies`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]"> Duration: </label>
                    <input
                      type="text"
                      {...register(`projects.${index}.duration`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]">
                      {" "}
                      Description:{" "}
                    </label>
                    <textarea
                      {...register(`projects.${index}.description`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-24 px-3 py-1"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addProject({
                    title: "",
                    technologies: "",
                    duration: "",
                    description: "",
                  })
                }
                className="ml-5 mb-5 border rounded-full px-4 py-1 text-purple-700 bg-purple-50 hover:bg-purple-200"
              >
                {" "}
                Add project
              </button>
            </div>

            {/* Experience Fields */}
            <div className="mb-10">
              {experienceFields.map((experience, index) => (
                <div key={experience.id} className="ml-3">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <img src={dgt} alt="" height="25" width="25" />
                      <h1 className="m-6 ml-3 font-bold text-xl">
                        EXPERIENCE{" "}
                        {experienceFields.length > 1 ? index + 1 : ""} :
                      </h1>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeExerience(index)}
                      className="ml-12 border border-red-300 rounded-full px-4 py-1 text-red-500 bg-purple-50 hover:bg-purple-200"
                    >
                      remove
                    </button>
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]"> Title: </label>
                    <input
                      type="text"
                      {...register(`experience.${index}.title`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]"> Company: </label>
                    <input
                      type="text"
                      {...register(`experience.${index}.company`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]"> Location: </label>
                    <input
                      type="text"
                      {...register(`experience.${index}.location`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]"> Duration: </label>
                    <input
                      type="text"
                      {...register(`experience.${index}.duration`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                    <label className="font-medium w-[20%]">
                      {" "}
                      Responsibilities:{" "}
                    </label>
                    <textarea
                      {...register(`experience.${index}.responsibilities`)}
                      className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-24 px-3 py-1"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addExperience({
                    title: "",
                    company: "",
                    location: "",
                    duration: "",
                    responsibilities: "",
                  })
                }
                className="ml-5 mb-5 border rounded-full px-4 py-1 text-purple-700 bg-purple-50 hover:bg-purple-200"
              >
                {" "}
                Add experience
              </button>
            </div>

            {/* Stills section */}
            <div className="ml-3 mb-10">
              {/* skills */}
              <div className="flex items-center">
                <img src={dgt} alt="" height="25" width="25" />
                <h1 className="m-6 ml-3 font-bold text-xl">SKILLS : </h1>
              </div>
              <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 ">
                <label className=" font-medium w-[20%]"> Languages: </label>
                <input
                  type="text"
                  placeholder="Java, Python, C++, etc..."
                  {...register("skills.languages")}
                  className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                />
              </div>
              <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7">
                <label className=" font-medium w-[20%]"> Frameworks: </label>
                <input
                  type="text"
                  placeholder="React, Node.js, Flask, etc..."
                  {...register("skills.frameworks")}
                  className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                />
              </div>
              <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7">
                <label className=" font-medium w-[40%] sm:w-[20%]">
                  {" "}
                  Developer Tools:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Git, VS Code, Google Cloud Platform, etc..."
                  {...register("skills.developerTools")}
                  className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                />
              </div>
              <div className="flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7">
                <label className=" font-medium w-[20%]"> Libraries: </label>
                <input
                  type="text"
                  placeholder="pandas, NumPy, etc..."
                  {...register("skills.libraries")}
                  className="border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-12 lg:px-16 my-9 py-3 bg-purple-600 text-white font-bold text-base rounded-full hover:bg-purple-700"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default CreateResume;
