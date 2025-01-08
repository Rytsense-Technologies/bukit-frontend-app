import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../asset/images/logo.png"

function Register() {
  return (
    <div className="flex items-center ">
      {/* Left Side */}
      <div className="w-1/2  bg-gray-900 px-52 h-screen">
      <img src={logo} className="w-40"/>
        <h2 className="text-5xl font-bold text-gray-900 mb-8 mt-10">
          Create an Account
        </h2>
        <p className="text-lg mb-6 text-gray-100">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold underline text-blue-600 cursor-pointer"
          >
            Login
          </Link>
        </p>
        <form>
          <div className="mb-4">
            <label
              className="block text-md font-medium text-gray-50"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded mt-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Email address"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-[#c026d3] rounded-md font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Continue
          </button>
        </form>

        <div className="my-6 text-center text-gray-500">or</div>

        <button className="w-full flex items-center justify-center text-gray-100 py-3 mb-4 border rounded-md font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/598/471/non_2x/google-logo-icon-illustration-free-vector.jpg"
            alt="Google"
            className="w-8 h-8 mr-2"
          />
          Continue with Google
        </button>

        <div>
          <h1 className="text-gray-50">Other Login options</h1>
          <div className="flex items-start mt-6 space-x-4">
            <button className="text-white text-2xl bg-sky-500 p-4 rounded-full">
              <FaFacebookF />
            </button>
            <button className="text-white text-2xl bg-gray-700 p-4 rounded-full">
              <FaApple />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 h-screen">
        <img
          src="https://wallpapercave.com/wp/wp2349410.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
    </div>
  );
}

export default Register;
