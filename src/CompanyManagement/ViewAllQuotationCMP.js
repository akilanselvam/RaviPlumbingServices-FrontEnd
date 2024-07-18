import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

import { AiTwotoneDelete } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";

function ViewAllQuotationCMP() {
  const [quotationCMPs, setQuotationCMPs] = useState([]);
  const [selectedQuotationCMP, setSelectedQuotationCMP] = useState(null);
  const [selectedUpdate, setSelectedUpdate] = useState(false);

  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://gold-fawn-fez.cyclic.app/api/v1/quotationCMP/")
      .then(response => {
        setQuotationCMPs(response.data.data.newQuotationCMP);
        setSelectedUpdate(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [selectedUpdate]);

  return (
    <div className="h-2/5">
      <div className="pb-8">
        <div className=" flex flex-col lg:flex-row  lg:justify-between -mb-12 pt-16 ">
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
                  <button className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4 ml-4 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                    <Link to={`/createCompany`}>Create Company</Link>
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
      </div>

      <table className="bg-custom-green bgr rounded-md shadow-xl mt-10 my-4 mx-auto non-printable opacity-80 overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black  rounded-md">
            <th className="text-center font-semibold py-2  ">Name</th>
            <th className="text-center font-semibold py-2  ">CMP ID</th>
            <th className="text-center font-semibold py-2  ">Address</th>
            <th className="text-center font-semibold py-2  ">Phone Number</th>
            <th className="text-center font-semibold py-2  ">Email</th>
            <th className="text-center font-semibold py-2  ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotationCMPs.map(quotationCMP => (
            <tr key={quotationCMP._id} className="border border-yellow-400 border-l-2 border-r-2 ">
              <td className="py-2 px-4 text-center  ">{quotationCMP.name}</td>
              <td className="py-2 px-4 text-center  ">{quotationCMP.cmpId}</td>
              <td className="py-2 px-4 text-center  ">{quotationCMP.address}</td>
              <td className="py-2 px-4 text-center  ">{quotationCMP.phoneNumber}</td>
              <td className="py-2 px-4 text-center  ">{quotationCMP.email}</td>
              <td className="py-2 px-4 text-center flex justify-between  ">
                <Link to={`/editCompany/${quotationCMP._id}`}>
                  <FaRegEdit style={{ fontSize: "24px", color: "#FDE047" }} />
                </Link>
                <div className="pl-4 ">
                  <button
                    onClick={() => {
                      axios.delete(`https://gold-fawn-fez.cyclic.app/api/v1/quotationCMP/${quotationCMP._id}`);
                      // Redirect to life hack list after deleting
                      setSelectedUpdate(true);
                      Navigate(`/viewAllCompany`);
                    }}>
                    <AiTwotoneDelete style={{ fontSize: "24px", color: "#B91C1C" }} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllQuotationCMP;
