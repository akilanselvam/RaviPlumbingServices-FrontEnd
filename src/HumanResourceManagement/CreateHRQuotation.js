import React, { useState } from "react";
import axios from "axios";
import Pic from ".././Assets/logoGold.png";

function CreateHRQuotation() {
  const [name, setName] = useState("");
  const [jobRole, setjobRole] = useState("");
  const [experience, setexperience] = useState("");
  const [hourlyRate, sethourlyRate] = useState("5");

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM/", {
        name: name,
        jobRole: jobRole,
        experience: experience,
        hourlyRate: hourlyRate
      })
      .then(response => {
        alert("Thanks for reaching out to us, We will get back to you shortly!");
        setName("");
        setjobRole("");
        setexperience("");
        sethourlyRate("");
      })
      .catch(error => {
        console.log(error);
        alert("Issue with sending the message, Please try again later");
      });
  };

  return (
    <div className="lg:-mt-4">
      {/* <h2>Create New QuotationHR</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="jobRole">Job Role:</label>
          <input type="text" id="jobRole" value={jobRole} onChange={event => setjobRole(event.target.value)} />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <input type="text" id="experience" value={experience} onChange={event => setexperience(event.target.value)} />
        </div>
        <div>
          <label htmlFor="hourlyRate">Hourly Rate:</label>
          <input type="text" id="hourlyRate" value={hourlyRate} onChange={event => sethourlyRate(event.target.value)} />
        </div>

        <button type="submit">Create</button>
  </form> */}
      <div className="antialiased mb-8 ">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col text-center md:text-left md:flex-row  justify-evenly md:items-center">
            <div className="flex flex-col w-full">
              <div className="max-w-md bgr bg-custom-green py-4 px-8 shadow-lg rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                  <div className="w-20 h-20 object-cover rounded-full border-2  border-yellow-400">
                    <img className="pt-4 pl-2 h-12" src={Pic} />
                  </div>
                </div>
                <div>
                  <h2 className="text-black text-2xl font-semibold">Request A Service</h2>
                  <p className="mt-2 text-white">
                    Our team of experts is ready to help you with any plumbing problems or questions you may have.
                    Whether you need emergency repairs, routine maintenance, or new installations, we are here to
                    provide you with prompt, efficient, and cost-effective solutions.
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <a href=" #" className="text-xl font-medium text-black">
                    Ravi Dhandapani
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
              <div className="bgr bg-custom-green p-10 flex flex-col w-full shadow-xl rounded-xl">
                <form onSubmit={handleSubmit} className="w-full">
                  <div id="input" className="flex flex-col w-full my-5">
                    <label htmlFor="username" className="text-white text-lg text-left mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={name}
                      onChange={event => setName(event.target.value)}
                      className="  w-full mt-2  border border-yellow-400 px-2 py-3 text-left rounded-lg bg-orange-100 bg-opacity-40 "
                    />
                  </div>
                  <div id="input" className="flex flex-col w-full my-5">
                    <label htmlFor="phnumber" className="text-white text-lg text-left mb-2">
                      Phone Number
                    </label>
                    <input
                      type="phnumber"
                      id="phnumber"
                      value={experience}
                      onChange={event => setexperience(event.target.value)}
                      className="  w-full mt-2  border border-yellow-400 px-2 py-3 text-left rounded-lg bg-orange-100 bg-opacity-40 "
                    />
                  </div>
                  <div id="input" className="flex flex-col w-full my-5">
                    <label htmlFor="description" className="text-white text-lg text-left mb-2">
                      Describe Your Plumbing Needs
                    </label>
                    <textarea
                      type="description"
                      id="description"
                      value={jobRole}
                      onChange={event => setjobRole(event.target.value)}
                      className=" h-40 w-full mt-2 border border-yellow-400 px-2 py-1 text-left rounded-lg bg-orange-100 bg-opacity-40 "
                    />
                  </div>
                  <div id="button" className="flex flex-col w-full my-5">
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 rounded-lg text-black text-xl">
                      <div className="flex flex-row items-center justify-center">
                        <div className="font-semibold">Submit</div>
                      </div>
                    </button>
                    <div className="flex justify-evenly mt-5">
                      <p className="w-full text-center font-medium text-white">
                        Fill out the contact form above to get in touch with us!
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateHRQuotation;
