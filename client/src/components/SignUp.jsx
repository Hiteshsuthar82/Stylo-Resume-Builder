import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SignUp() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='border-2 rounded-lg bg-white flex flex-col w-full max-w-md min-h-[440px] shadow-2xl max-sm:w-[312px]'>
         <form >
        <div className="flex flex-col items-center mt-10 mx-auto my-6">
                    <h2 className="font-poppins text-[35px] font-semibold text-purple-700 max-sm:text-3xl ">Registration</h2>
                    <div className="w-40 border-2 border-purple-700 mt-2 max-sm:w-36"></div>
                </div>
        <div className="flex flex-col items-center">
            <div className='w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 '>
               <input type="text" placeholder='Username' 
                    name='username' value={inputs.username || ""}
                    onChange={handleChange}
                className='w-full text-base font-semibold outline-none bg-transparent'/>
            </div>
            <div className='w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 '>
               <input type="text" placeholder='Full Name' 
                name='fullname' value={inputs.fullname || ""}
                onChange={handleChange}
                className='w-full text-base font-semibold outline-none bg-transparent'/>
            </div>
            <div className='w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 '>
               <input type="email" placeholder='Email' 
                name='email' value={inputs.email || ""}
                onChange={handleChange}
                className='w-full text-base font-semibold outline-none bg-transparent'/>
            </div>
            <div className='w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 '>
               <input type="password" placeholder='Password' 
                name='password' value={inputs.password || ""}
                onChange={handleChange}
                className='w-full text-base font-semibold outline-none bg-transparent'/>
            </div>
            <div className='w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 '>
               <input type="password" placeholder='Confirm Password' 
                name='confirmpass' value={inputs.confirmpass || ""}
                onChange={handleChange}
                className='w-full text-base font-semibold outline-none bg-transparent'/>
            </div>
           
         </div>
         <div className="flex justify-center mt-4">
              <button
                  type="submit"
                  className="px-16 py-2 bg-purple-600 text-white font-semibold text-base rounded-full hover:bg-purple-700 max-sm:px-12">
                  Register
              </button>
          </div>
          <div className=" w-auto flex justify-evenly items-start my-9 ">
                <div>Already have an Account ?</div>
                <div><Link to="/login" className="text-black hover:underline">
                Log In </Link>
                </div>
          </div>
           </form>
        </div>
       </div>
    );
}

export default SignUp
