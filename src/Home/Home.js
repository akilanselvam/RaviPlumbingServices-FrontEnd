import React from "react";
import logo from "../Assets/logoGold.png";
import Stats from "./Stats";
import Works from "./Works";
import HeadCard from "./HeadCard";
import Contact from "./Contact";
import CreateHRQuotation from "../HumanResourceManagement/CreateHRQuotation";
import MiddleImg from ".././Assets/Solutions.jpg";

const Home = () => {
  return (
    <>
      <section className="">
        <div className="pt-10">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p className="uppercase tracking-loose w-full text-white font-semibold text-lg ">
                Professional Plumbing Services
              </p>
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Your Trusted{" "}
                <span className="text-yellow-500 bg-white p-8 text-4xl rounded-sm pt-2 pb-2 shadow-xl opacity-95">
                  PLUMBING
                </span>{" "}
                Experts
              </h1>
              <p className="leading-normal  text-xl mb-8">
                For all your plumbing needs, we provide exceptional service with a smile. From fixing leaks to
                installing new fixtures, we've got you covered!
              </p>
              <button className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-yellow-200 to-yellow-600 text-black font-semibold rounded-md  py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Contact Us
              </button>
            </div>
            <div className="w-full md:w-3/5 py-6 text-center">
              <HeadCard />
              {/*<img className="w-16 md:w-4/5 " src={logo} />*/}
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <Works />
      <section className="">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl bgr bg-custom-green rounded-lg mb-16 mt-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-center sm:text-4xl text-black">
              From drips to overflows, we fix it all !
            </h2>
            {/* <p className="max-w-3xl mx-auto mt-4  text-xl text-center text-white">We've got the solutions.</p>*/}
          </div>
          <div className="mt-16">
            <div className="grid lg:gap-8  lg:grid-cols-2 -mt-12 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-black"> Plumbing problems?</h3>
                <p className="mt-3 text-lg text-white">
                  "We provide exceptional plumbing services to our customers while building lasting relationships based
                  on trust, reliability, and integrity. We strive to exceed our customers' expectations by consistently
                  delivering high-quality workmanship and superior customer service."
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-gradient-to-r from-yellow-200 to-yellow-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold leading-6 text-black">Environmental responsibility:</h4>
                      <p className="mt-2 text-white">
                        As a plumbing service provider, we recognize our responsibility to protect the environment. We
                        are committed to using eco-friendly products and methods whenever possible to minimize our
                        environmental impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-r from-yellow-200 to-yellow-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold leading-6 text-black">Expert Plumbing Services</h4>
                      <p className="mt-2 text-white">
                        We believe in providing our customers with the highest level of expertise in plumbing. Our team
                        of licensed and experienced plumbers are equipped with the knowledge and tools to handle any
                        plumbing issue, from routine maintenance to complex repairs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img src={MiddleImg} alt="" className="mx-auto lg:h-96 rounded-lg shadow-lg dark:bg-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CreateHRQuotation />
    </>
  );
};

export default Home;
