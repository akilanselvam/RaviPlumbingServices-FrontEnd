import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";

function ViewAllHR() {
  const [quotationHRs, setQuotationHRs] = useState([]);
  const [selectedQuotationCMP, setSelectedQuotationCMP] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM/")
      .then(response => {
        setQuotationHRs(response.data.data.newQuotationHRM);
        setSelectedQuotationCMP(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [selectedQuotationCMP]);

  return (
    <div>
      {/*
      <h2>View All QuotationHRs</h2>
      <Link to={`/createHR`}>Create</Link>
      <br />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Role</th>
            <th>Experience</th>
            <th>Hourly Rate</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotationHRs.map(quotationHR => (
            <tr key={quotationHR._id}>
              <td>{quotationHR.name}</td>
              <td>{quotationHR.jobRole}</td>
              <td>{quotationHR.experience}</td>
              <td>{quotationHR.hourlyRate}</td>

              <td>
                <Link to={`/editHR/${quotationHR._id}`}>Edit ⟶</Link>
                <button
                  onClick={() => {
                    axios.delete(`https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM/${quotationHR._id}`);
                    // Redirect to life hack list after deleting
                    Navigate(`/viewHR`);
                  }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
                */}
      <div className=" flex flex-col lg:flex-row justify-between lg:-mb-12 pt-16">
        <div className=" mx-auto lg:-mr-8  non-printable max-w-5xl">
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
          <div className="bg-custom-green bgr flex flex-col md:flex-row justify-between rounded-lg shadow-lg p-2 pb-6 pt-2 mb-10">
            <div className="px-4">
              <label className="block mb-4 font-semibold"></label>
              <div className="flex items-center">
                <button className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4 pr-6 ml-4 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                  <Link to={`/`}>Create Products</Link>
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
      <table className="bg-custom-green bgr rounded-md shadow-xl mt-10 my-4 lg:w-1/2 mx-auto non-printable opacity-80 overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black  rounded-md">
            <th className="text-center font-semibold py-2  ">Customer Name</th>

            <th className="text-center font-semibold py-2  ">Description</th>
            <th className="text-center font-semibold py-2  ">Phone Number</th>
            <th className="text-center font-semibold py-2  ">Action</th>
          </tr>
        </thead>
        <tbody>
          {quotationHRs.map(quotationHR => (
            <tr key={quotationHR._id} className="border border-yellow-400 border-l-2 border-r-2 ">
              <td className="py-2 px-4 text-center  ">{quotationHR.name}</td>

              <td className="py-2 px-4 text-center  ">{quotationHR.jobRole}</td>
              <td className="py-2 px-4 text-center  ">{quotationHR.experience}</td>
              <td className="py-2 px-4 text-center flex justify-between   ">
                <button
                  onClick={() => {
                    axios.delete(`https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM/${quotationHR._id}`);
                    setSelectedQuotationCMP(true);
                    Navigate(`/viewHR`);
                  }}>
                  <AiTwotoneDelete style={{ fontSize: "24px", color: "#B91C1C" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllHR;

<div></div>;
