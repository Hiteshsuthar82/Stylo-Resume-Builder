import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, signup } from "../features/authslice";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import buttonLoader from "./../assets/button-loader.gif";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm();
  const { loading, error } = useSelector((state) => state.auth);

  // Watch the password field to get its value
  const password = watch("password");

  const handleSignup = async (data) => {
    try {
      const session = await dispatch(signup(data)).unwrap();
      if (session) {
        console.log(session);
        const loginResult = await dispatch(login(data)).unwrap();
        if (loginResult) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log("Error during signup or login:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="border-2 rounded-lg bg-white flex flex-col w-full max-w-md min-h-[440px] shadow-2xl max-sm:w-[312px]">
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="flex flex-col items-center mt-10 mx-auto my-6">
            <h2 className="font-poppins text-[35px] font-semibold text-purple-700 max-sm:text-3xl ">
              Registration
            </h2>
            <div className="w-40 border-2 border-purple-700 mt-2 max-sm:w-36"></div>
          </div>
          {error && (
            <p className="text-red-600 mt-8 text-center">{error.message}</p>
          )}
          <div className="flex flex-col items-center">
            <div className="w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 ">
              <input
                type="text"
                placeholder="Username"
                name="username"
                {...register("username", {
                  required: true,
                })}
                className="w-full text-base font-semibold outline-none bg-transparent"
              />
            </div>
            <div className="w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 ">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                {...register("fullName", {
                  required: true,
                })}
                className="w-full text-base font-semibold outline-none bg-transparent"
              />
            </div>
            <div className="w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 ">
              <input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: true,
                })}
                className="w-full text-base font-semibold outline-none bg-transparent"
              />
            </div>
            <div className="w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 ">
              <input
                type="password"
                placeholder="Password"
                name="password"
                {...register("password", {
                  required: true,
                })}
                className="w-full text-base font-semibold outline-none bg-transparent"
              />
            </div>
            <div className="w-[70%] flex items-center p-2 pl-3 border-2 rounded-full border-gray-400 my-2 ">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpass"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password ||
                    "Passwords and confirm password not match",
                })}
                className="w-full text-base font-semibold outline-none bg-transparent"
              />
            </div>
            {isSubmitted && errors.confirmPassword && (
              <p className="text-red-600 text-center">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="h-10 w-52 px-16 py-2 bg-purple-600 text-white font-semibold text-base rounded-full hover:bg-purple-700 max-sm:px-12 flex justify-center items-center"
            >
              {loading ? (
                <img src={buttonLoader} alt="Loading.." className="w-7 h-5" />
              ) : (
                "Register"
              )}
            </button>
          </div>
          <div className=" w-auto flex justify-evenly items-start my-9 ">
            <div>Already have an Account ?</div>
            <div>
              <Link to="/login" className="text-black hover:underline">
                Log In{" "}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
