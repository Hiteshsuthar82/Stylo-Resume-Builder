import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../features/authslice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      // sample dummy data
      // login({
      //   username: "johndoe",
      //   password: "Password1234",
      // })
    );
    console.log("login");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-white border-2 rounded-lg flex flex-col w-full max-w-md min-h-[440px] shadow-2xl max-sm:w-[312px]">
        <form>
          <div className="flex flex-col items-center mt-10 mx-auto my-6">
            <h2 className="font-poppins text-[35px] font-semibold text-purple-700 max-sm:text-3xl">
              Login
            </h2>
            <div className="w-[80px] border-2 border-purple-700 mt-2 max-sm:w-14"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center w-[70%] border-2 border-gray-400 rounded-full my-2 px-2">
              <img src="src/assets/mail1.svg" alt="" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-2 py-2 text-base font-semibold outline-none bg-transparent"
                required
              />
            </div>
            <div className="flex items-center w-[70%] border-2 border-gray-400 rounded-full my-2 px-2">
              <img src="src/assets/password.svg" alt="" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 text-base font-semibold outline-none bg-transparent"
                required
              />
            </div>
          </div>
          <div className=" flex items-center gap-2 m-3 pl-16 max-sm:pl-12">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="w-4 h-4"
            />
            <p className="text-base">Remember Me</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              onClick={handleLogin}
              className="px-16 py-2 bg-purple-600 text-white font-semibold text-base rounded-full hover:bg-purple-700 max-sm:px-12"
            >
              Login
            </button>
          </div>
          <div className=" w-auto flex justify-evenly items-start my-9 ">
            <div>Don't have an Account ?</div>
            <div>
              <Link to="/signup" className="text-black hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
