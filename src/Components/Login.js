import React from "react";
import Link from "next/link";
function Login() {
  return (
    <div className="transition ease-in-out delay-150">
      
      <div className="  bg-[url('https://wallpapercave.com/wp/wp3325889.jpg')] relative flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-cover bg-no-repeat h-screen">
        <div className="text-4xl font-semibold pl-11">
          Let's <span className="text-brightRed italic">Complete</span>{" "}
          the Journey
        </div>
        <div className="flex flex-1 flex-col  mt-12 px-5 py-12 lg:px-8 text-white w-1/2 border bg-black opacity-80 rounded-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold  tracking-tight text-white">
              Login to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-white"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                className="flex items-center justify-center w-1/2 rounded-md bg-indigo-600 px-3 py-1.5 mt-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                  <a href="/newindex">
                Login
                </a>
              </button>
          </div>

            <p className="mt-10 text-center text-sm text-white">
              Not a member?
              <Link
                href="/signup"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
