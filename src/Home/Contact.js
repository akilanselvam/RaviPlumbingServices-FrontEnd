import React from "react";

const Contact = () => {
  return (
    <section className="">
      <body className="antialiased mb-8 ">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col text-center md:text-left md:flex-row  justify-evenly md:items-center">
            <div className="flex flex-col w-full">
              <div>
                <svg
                  className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h1 className="text-5xl text-gray-800 font-semibold">Client Area</h1>
              <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
                Control and monitorize your website data from dashboard.
              </p>
            </div>
            <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
              <div className="bgr bg-custom-green p-10 flex flex-col w-full shadow-xl rounded-xl">
                <form action="" className="w-full">
                  <div id="input" className="flex flex-col w-full my-5">
                    <label htmlFor="username" className="text-white text-lg font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="  w-full mt-2  border border-yellow-400 px-2 py-3 text-left rounded-lg bg-orange-100 bg-opacity-40 "
                    />
                  </div>
                  <div id="input" className="flex flex-col w-full my-5">
                    <label htmlFor="phnumber" className="text-white text-lg font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="phnumber"
                      id="phnumber"
                      className="  w-full mt-2  border border-yellow-400 px-2 py-3 text-left rounded-lg bg-orange-100 bg-opacity-40 "
                    />
                  </div>
                  <div id="input" className="flex flex-col w-full my-5">
                    <label htmlFor="description" className="text-white text-lg font-semibold mb-2">
                      Describe your plumbing needs
                    </label>
                    <textarea
                      type="description"
                      id="description"
                      className=" h-40 w-full mt-2 border border-yellow-400 px-2 py-1 text-left rounded-lg bg-orange-100 bg-opacity-40 "
                    />
                  </div>
                  <div id="button" className="flex flex-col w-full my-5">
                    <button
                      type="button"
                      className="w-full py-4 bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 rounded-lg text-black text-xl">
                      <div className="flex flex-row items-center justify-center">
                        <div className="font-semibold">Submit</div>
                      </div>
                    </button>
                    <div className="flex justify-evenly mt-5">
                      <a href="#" className="w-full text-center font-medium text-white">
                        Recover password!
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </section>
  );
};

export default Contact;
