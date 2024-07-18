import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function PatchQuotationCMP() {
  const [name, setName] = useState("");
  const [cmpId, setCmpId] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const Navigate = useNavigate();

  const { id } = useParams(); // get the id parameter from the URL

  useEffect(() => {
    axios
      .get(`https://gold-fawn-fez.cyclic.app/api/v1/quotationCMP/${id}`)
      .then(response => {
        const quotationCMP = response.data.data.newQuotationCMP;

        setName(quotationCMP.name);
        setCmpId(quotationCMP.cmpId);
        setAddress(quotationCMP.address);
        setPhoneNumber(quotationCMP.phoneNumber);
        setEmail(quotationCMP.email);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleCmpIdChange = event => {
    setCmpId(event.target.value);
  };

  const handleAddressChange = event => {
    setAddress(event.target.value);
  };

  const handlePhoneNumberChange = event => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const quotationCMP = {
      name: name,
      cmpId: cmpId,
      address: address,
      phoneNumber: phoneNumber,
      email: email
    };

    axios
      .patch(`https://gold-fawn-fez.cyclic.app/api/v1/quotationCMP/${id}`, quotationCMP)
      .then(response => {
        Navigate("/viewAllCompany");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className=" flex flex-col lg:flex-row  lg:justify-self-startlg:mx-96 lg:-mb-28 mt-24  ">
        <div className="mx-auto  non-printable lg:-mr-28 ">
          <div className="bg-custom-green bgr flex flex-col md:flex-row justify-between  rounded-lg shadow-lg p-2 pb-6 pt-2 mb-10">
            <div className="px-4">
              <label className="block mb-4 font-semibold"></label>
              <div className="flex items-center">
                <Link to={`/viewAllCompany`}>
                  <button className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4  rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                    <RiArrowGoBackFill style={{ fontSize: "24px", color: "black" }} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-auto  non-printable max-w-5xl">
          <div className="bg-custom-green bgr flex flex-col md:flex-row  justify-between rounded-lg shadow-lg p-2 pb-6 pt-2 mb-10">
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
      <div className="p-4 bg-custom-green bgr rounded-xl shadow-xl opacity-80 mx-auto lg:mt-24 lg:w-1/3">
        <h2 className="text-2xl text-center font-semibold mb-4">Update Quotation Model</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="mb-2 font-semibold">Name:</label>
          <input
            className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
            type="text"
            value={name || ""}
            onChange={handleNameChange}
          />

          <label className="mb-2 font-semibold">CMP ID:</label>
          <input
            className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
            type="text"
            value={cmpId || ""}
            onChange={handleCmpIdChange}
          />

          <label className="mb-2 font-semibold">Address:</label>
          <input
            className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
            type="text"
            value={address || ""}
            onChange={handleAddressChange}
          />

          <label className="mb-2 font-semibold">Phone Number:</label>
          <input
            className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
            type="text"
            value={phoneNumber || ""}
            onChange={handlePhoneNumberChange}
          />

          <label className="mb-2 font-semibold">Email:</label>
          <input
            className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
            type="text"
            value={email || ""}
            onChange={handleEmailChange}
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10  mx-auto  w-2/3 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PatchQuotationCMP;
