import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function CreateQuotationCMP() {
  const [name, setName] = useState("");
  const [cmpId, setCmpId] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://gold-fawn-fez.cyclic.app/api/v1/quotationCMP/", {
        name: name,
        cmpId: cmpId,
        address: address,
        phoneNumber: phoneNumber,
        email: email
      })
      .then(response => {
        alert("New Quotation Format is Created!");
        setName("");
        setCmpId("");
        setAddress("");
        setPhoneNumber("");
        setEmail("");
      })
      .catch(error => {
        console.log(error);
        alert("Error creating new quotation");
      });
  };

  return (
    <div className="">
      <div className=" flex flex-col lg:flex-row  lg:justify-self-start lg:mx-96 lg:-mb-28 mt-24  ">
        <div className="mx-auto  non-printable lg:-mr-28 ">
          <div className="bg-custom-green bgr flex justify-between rounded-lg shadow-lg p-2 pb-6 pt-2 mb-10">
            <div className="px-2">
              <label className="block mb-4 font-semibold"></label>
              <div className="flex items-center">
                <Link to={`/`}>
                  <button className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4  rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                    <RiArrowGoBackFill style={{ fontSize: "24px", color: "black" }} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-auto  non-printable max-w-5xl">
          <div className="bg-custom-green bgr flex flex-col md:flex-row justify-between  rounded-lg shadow-lg p-2 pb-6 pt-2 mb-10">
            <div className="px-4">
              <label className="block mb-4 font-semibold"></label>
              <div className="flex items-center">
                <button className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4 ml-4 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                  <Link to={`/viewAllCompany`}>Manage Company</Link>
                </button>
              </div>
            </div>
            <div className="px-4">
              <label className="block mb-4 font-semibold"></label>
              <div className="flex items-center">
                <button className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4 ml-4 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                  <Link to="/viewCompanyForProduct">Manage Products</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-custom-green bgr rounded-xl shadow-xl opacity-80 mx-auto lg:mt-24  sm:w-2/3 md:w-1/2 lg:w-2/5 ">
        <h2 className="text-2xl text-center font-bold mb-4">Create New Quotation Model</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
              className="mt-2 border text-left border-yellow-400 px-2 py-1 text-white rounded-lg bg-custom-green bgr bg-opacity-40 flex-grow"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cmpId" className="mb-2 font-semibold">
              CMP ID:
            </label>
            <input
              type="text"
              id="cmpId"
              value={cmpId}
              onChange={event => setCmpId(event.target.value)}
              className="mt-2 border text-left border-yellow-400 px-2 py-1 text-white rounded-lg bg-custom-green bgr bg-opacity-40 flex-grow"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="mb-2 font-semibold">
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={event => setAddress(event.target.value)}
              className="mt-2 border text-left border-yellow-400 px-2 py-1 text-white rounded-lg bg-custom-green bgr bg-opacity-40 flex-grow"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="mb-2 font-semibold">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={event => setPhoneNumber(event.target.value)}
              className="mt-2 border text-left border-yellow-400 px-2 py-1 text-white  rounded-lg bg-custom-green bgr bg-opacity-40 flex-grow"
            />
          </div>
          <div className="flex flex-col pb-6">
            <label htmlFor="email" className="mb-2 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              className="mt-2 border text-left border-yellow-400 px-2 py-1 text-white  rounded-lg bg-custom-green bgr bg-opacity-40 flex-grow"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10  mx-auto  w-2/3 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateQuotationCMP;
