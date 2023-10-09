import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-3">
      <div className="skew-x-[-8deg] text-white bg-[#4285F4] sm:col-span-1 w-auto">
        <div className="flex flex-col sm:h-screen justify-between">
          <div className="mt-5 mb-8 sm:mt-10 ml-6 text-sm font-semibold">
            <p>LOGO</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Board.
            </span>
          </div>
          <div className="flex gap-6 sm:gap-10 text-xl sm:text-3xl text-white mt-20 mb-0 sm:mt-0 sm:mb-10 justify-center">
            <FaLinkedin />
            <FaGithub />
            <FaSquareTwitter />
            <FaDiscord />
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center  ">
        <div>
          <div className="mb-6 sm:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center sm:text-start">
              Sign In
            </h2>
            <p className="text-sm mb-2 font-Lato text-center sm:text-start">
              Sign in to your account
            </p>
          </div>

          <div className="flex flex-col gap-2 mb-2 text-xs text-[#858585] sm:flex-row">
            <button className="flex items-center justify-center sm:w-[180px] p-2 bg-gray-100 rounded-xl">
              <FcGoogle className="text-lg" />
              <span className="ml-2">Sign in with Google</span>
            </button>
            <button className="flex items-center justify-center sm:w-[180px] p-2 bg-gray-100 rounded-xl">
              <FaApple className="text-lg" />
              <span className="ml-2">Sign in with Apple</span>
            </button>
          </div>

          <form
            className="flex flex-col p-6 mb-2 bg-white rounded-2xl font-Lato"
            onSubmit={handleSignIn}
          >
            <label htmlFor="email" className="text-sm mb-2 tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="rounded-lg bg-[#f5f5f5] mb-2 text-sm p-2 focus:outline-none focus:bg-[#eaeaea]"
            />
            <label
              htmlFor="password"
              className="text-sm mb-2 font-Verdana lett"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="rounded-lg bg-[#f5f5f5] mb-2 text-sm p-2 focus:outline-none focus:bg-[#eaeaea]"
            />

            <a href="#" className="mb-2 text-[#346bd4]">
              Forgot password?
            </a>
            <button
              className="bg-[#4285F4] text-white rounded-lg py-1 font-semibold"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <p className="text-center font-Lato">
            Don’t have an account?{" "}
            <a href="#" className="text-[#346bd4]">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
