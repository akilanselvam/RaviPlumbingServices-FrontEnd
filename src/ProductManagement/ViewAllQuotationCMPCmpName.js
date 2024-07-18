import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function ViewAllQuotationCMPCmpName() {
  const [quotationCMPs, setQuotationCMPs] = useState([]);
  const Navigate = useNavigate();
  const [cmpId, setCmpId] = useState([]);
  useEffect(() => {
    axios
      .get("https://gold-fawn-fez.cyclic.app/api/v1/quotationCMP/company")
      .then(response => {
        setQuotationCMPs(response.data.data.newQuotationCMP);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="lg:w-1/5  mx-auto pt-24">
        <div className="-mb-48    non-printable ">
          <div className="bg-custom-green bgr rounded-lg shadow-lg p-2 pb-6 pt-2  mb-10 w-24 ">
            <div className="px-2">
              <label className="block mb-4 font-semibold"></label>
              <div className="flex items-center">
                <Link to={`/`}>
                  <button className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4  rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                    <RiArrowGoBackFill style={{ fontSize: "24px", color: "white" }} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <ul className="bg-custom-green bgr rounded-xl  shadow-xl my-52 w-96 mx-auto non-printable opacity-80 overflow-hidden">
            <li className="bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black  rounded-md text-center p-4 font-semibold">
              Available Products
            </li>
            <div className="py-8 px-8">
              {quotationCMPs.map(quotationCMP => (
                <li key={quotationCMP._id} className="text-center p-4 ">
                  <button
                    className=" text-black font-semibold bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-100   h-10 lg:w-3/4 px-4  rounded-lg shadow-xl hover:bg-yellow-400 transition-colors duration-300"
                    onClick={() => {
                      Navigate(`/ViewAllProduct/${quotationCMP.cmpId}`);
                    }}>
                    {quotationCMP.name}
                  </button>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ViewAllQuotationCMPCmpName;
