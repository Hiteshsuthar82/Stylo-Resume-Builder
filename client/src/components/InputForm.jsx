import React, {useState} from 'react'
import {Container} from './index'
import mail from "../assets/envelop.svg"
import phone from "../assets/phone.svg"
import linkedin from "../assets/linkedin.svg"
import git from "../assets/github.svg"
import dgt from "../assets/doubleRight.png"

function InputForm() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mail: '',
    git: '',
    linkedin: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([
    { title: '', technologies: '', duration: '', description: ''}
  ]);
  const [educations, setEducations] = useState([
    { institution: '', degree: '', location: '', duration: ''}
  ]);


  const addExperience = () => {
    setExperiences([
      ...experiences,
      {title: '', company: '', location: '', duration: '', responsibilities: '' }
    ]);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {institution: '', degree: '', location: '', duration: ''}
    ]);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {title: '', technologies: '', duration: '', description: ''}
    ]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleExperience = (index, e) => {
    const {name, value} = e.target;
    const updateExperience = experiences.map((experience, i) => 
    i === index ? { ...experience, [name]: value} : experience );
    setExperiences(updateExperience);
  };

  const handleEducation = (index, e) => {
    const {name, value} = e.target;
    const updateEducation = educations.map((education, i) =>
    i === index ? {...education, [name]: value} : education);
    setEducations(updateEducation);
  }

  const handleProject = (index, e) => {
    const {name, value} = e.target;
    const updateProject = projects.map((project, i) => 
    i === index ? { ...project, [name]: value} : project );
    setProjects(updateProject);
  };

  // Handle the file input change event
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };


  return (
    <Container>
      <div>
        <form>
          <h2 className="text-center text-3xl lg:text-5xl my-8 font-bold">Career Profile Form</h2>
            <p className="text-lg lg:text-xl mx-auto mt-10 lg:mx-24 ">
                Enter your information below to build a strong resume.
            </p>
          {/* form */}
          <div className='lg:mx-28 mt-10 mb-20 mx-10'>
            <div className='ml-3'>
              {/* about myself */}  
              <div className='flex items-center'>
                <img src={dgt} alt="" height="25" width="25"  />
                <h1 className='m-6 ml-3 font-bold text-xl'>PERSONAL INFORMATION : </h1>
              </div>
              <div className='flex flex-col lg:flex-row'>
                  <div className='h-32 w-32 border border-purple-400 flex items-center justify-center rounded'>
                    {/* image-box */}
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
                  {/* photo add  */}
                  <div className='flex flex-col'>
                    <div className='m-5'>
                      <p>Add a Photo to your resume</p>
                    </div>
                    <div>
                      {/* image-box */}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="ml-5 block text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-200"
                      />
                    </div>
                  </div>
              </div>
                        {/* name of about */}
              <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row my-7'>
                <label className='font-medium'> Name: </label>
                <input type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Kamlesh Suthar' className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
                          {/* contact of about */}
              </div>
              <div className='flex max-sm:flex-col'>
                  <div className='flex items-center my-2 mr-5'>
                      <img src={phone} alt="phone-icon" className='mb-2'/>
                      <input type="text" 
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='+91 12345 67890' className='border border-gray-400 rounded-sm w-[270px] mb-2 mx-8 mt-1 h-8 px-3 py-1'/>
                  </div>
                  <div className='flex my-2 mr-5'>
                      <img src={mail} alt="mail-icon" className='mb-2'/>
                      <input type="text" 
                      name='mail'
                      value={formData.mail}
                      onChange={handleChange}
                      placeholder='kamleshsuthar12@example.com' className='border border-gray-400 rounded-sm w-[270px] mb-2 mx-8 mt-1 h-8 px-3 py-1'/>
                  </div>
              </div>
              <div className='flex max-sm:flex-col'>
                  <div className='flex items-center my-2 mr-5'>
                      <img src={linkedin} alt="linkedin-icon" className='mb-2'/>
                      <input type="text" 
                      name='linkedin'
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder='linkedin.com/in/kamlesh'
                      className='border border-gray-400 rounded-sm w-[270px] mb-2 mx-8 mt-1 h-8 px-3 py-1'/>
                  </div>
                  <div className='flex my-2 mr-5'>
                      <img src={git} alt="git-icon" className='mb-2'/>
                      <input type="text" 
                      name='git'
                      value={formData.git}
                      onChange={handleChange}
                      placeholder='github.com/kamlesh'
                      className='border border-gray-400 rounded-sm w-[270px] mb-2 mx-8 mt-1 h-8 px-3 py-1'/>
                  </div>
              </div>
            </div>

          {educations.map((education, index) => (
            <div key={index} className="ml-3">
               {/* education */}
              <div className='flex items-center'>
                <img src={dgt} alt="" height="25" width="25"  />
                <h1 className='m-6 ml-3 font-bold text-xl'>EDUCATION : </h1>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Institution: </label>
                <input type="text" 
                name='institution' value={educations.institution}
                onChange={(e) => handleEducation(index, e)}
                className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Degree: </label>
                <input type="text"
                 name='degree' value={educations.degree}
                 onChange={(e) => handleEducation(index, e)}
                 className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Location: </label>
                <input type="text"
                 name='location' value={educations.location}
                 onChange={(e) => handleEducation(index, e)}
                 className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Duration: </label>
                <input type="text" 
                 name='duration' value={educations.duration}
                 onChange={(e) => handleEducation(index, e)}
                 className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
            </div>
            ))}
            <button
            type='button'
            onClick={addEducation}
            className='ml-5 mb-5 border rounded-full px-4 py-1 text-purple-700 bg-purple-50 hover:bg-purple-200' > Add more 
            </button>


            {projects.map((project, index) => (

              <div key={index} className="ml-3">
               {/* projects */}
               <div className='flex items-center'>
                <img src={dgt} alt="" height="25" width="25"  />
                <h1 className='m-6 ml-3 font-bold text-xl'>PROJECTS : </h1>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Title: </label>
                <input type="text" 
                name='title' value={projects.title}
                onChange={(e) => handleProject(index, e)}
                className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Technologies: </label>
                <input type="text" 
                name='technologies' value={projects.technologies}
                onChange={(e) => handleProject(index, e)}
                className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Duration: </label>
                <input type="text" 
                name='duration' value={projects.duration}
                onChange={(e) => handleProject(index, e)}
                className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Description: </label>
                <textarea rows="3"
                name='description' value={projects.description}
                onChange={(e) => handleProject(index, e)}
                className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 px-3 py-1'></textarea>
              </div>
            </div>
            ))}
            <button
            type='button'
            onClick={addProject}
            className='ml-5 mb-5 border rounded-full px-4 py-1 text-purple-700 bg-purple-50 hover:bg-purple-200' > Add more 
            </button>


            {experiences.map((experience, index) => (
              <div key={index} className=" ml-3">
               {/* experience */}
               <div className='flex items-center'>
                <img src={dgt} alt="" height="25" width="25"  />
                <h1 className='m-6 ml-3 font-bold text-xl'>EXPERIENCE : </h1>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Title: </label>
                <input type="text"
                 name='title' value={experiences.title}
                 onChange={(e) => handleExperience(index, e)}
                 className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Company: </label>
                <input type="text" 
                name='company' value={experiences.company}
                onChange={(e) => handleExperience(index, e)}
                className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Location: </label>
                <input type="text" 
                name='location' value={experiences.location}
                onChange={(e) => handleExperience(index, e)}
                className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
               <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Duration: </label>
                <input type="text" 
                name='duration' value={experiences.duration}
                onChange={(e) => handleExperience(index, e)}
                className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
              <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Responsibilities: </label>
                <textarea rows="3" 
                name='responsibilities' value={experiences.responsibilities}
                onChange={(e) => handleExperience(index, e)}
                className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 px-3 py-1'></textarea>
              </div>
            </div>
            ))}
            <button
            type='button'
            onClick={addExperience}
            className='ml-5 mb-5 border rounded-full px-4 py-1 text-purple-700 bg-purple-50 hover:bg-purple-200' > Add Experience 
            </button>


            <div className='ml-3 '>
              {/* skills */}
              <div className='flex items-center'>
                <img src={dgt} alt="" height="25" width="25"  />
                <h1 className='m-6 ml-3 font-bold text-xl'>SKILLS : </h1>
              </div>              
              <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7 '>
                <label className=' font-medium w-[20%]'> Languages: </label>
                <input type="text" placeholder='Java, Python, C++, etc...' className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
              <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7'>
                <label className=' font-medium w-[20%]'> Frameworks: </label>
                <input type="text" placeholder='React, Node.js, Flask, etc...' className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
              <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7'>
                <label className=' font-medium w-[20%]'> Developer Tools: </label>
                <input type="text" placeholder='Git, VS Code, Google Cloud Platform, etc...' className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
              <div className='flex flex-col lg:items-center lg:gap-10 lg:flex-row mb-7'>
                <label className=' font-medium w-[20%]'> Libraries: </label>
                <input type="text" placeholder='pandas, NumPy, etc...' className='border border-gray-400 rounded-sm w-2/4 max-sm:w-[80%] md:w-2/5 h-8 px-3 py-1'/>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10">
              <button
                type="submit"
                className="px-12 lg:px-16 my-9 py-3 bg-purple-600 text-white font-bold text-base rounded-full hover:bg-purple-700"
              >
                Submit
              </button>
            </div>
              
          </div>
        </form>
      </div>
    </Container>
  )
}

export default InputForm
