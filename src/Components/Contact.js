import React from "react";
import Navbar from "./Navbar";

function Contact() {
  const [check, setcheck] = React.useState(false);

  const onClickit = () => {
    setcheck(!check);
  };

  console.log(check);
  return (
    <div>
      
      <div className='bg-[url("https://wallpaperset.com/w/full/a/3/d/45475.jpg")] bg-cover bg-no-repeat pb-24'>
        <div className = "h-screen mt-0">
          <h1 className = "text-4xl text-pretty font-bold flex justify-center">
            <div className="mt-20 pl-10 text-brightRed">
              Lets Work Together
            </div>
            <button onClick={onClickit} className=" space-x-6">
              <img
                src="pencil.jpeg"
                class="relative left-64 top-20 h-10 w-auto animate-bounce"
              />
            </button>
          </h1>

          <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">

            {check && (
              <div className="bg-white flex flex-col md:ml-auto w-1/2 mt-20 h-1/2 -my-2 md:mr-10 mr-4 p-8 border border-solid border-black">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Post-ironic portland shabby chic echo park, banjo fashion axe
                </p>
                <div className="relative mb-4">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <div className="w-10 ">
                  <button className="text-white animate-bounce bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg  ">
                    Submit
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Chicharrones blog helvetica normcore iceland tousled brook
                  viral artisan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// ... (other imports and code)
