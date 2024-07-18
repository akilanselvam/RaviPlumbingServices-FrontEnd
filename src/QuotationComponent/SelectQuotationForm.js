import React, { useState, useEffect } from "react";
import QuotationTable from "../QuotationForm/QuotationForm";
import Quotation from "../QuotationForm/Quotation";
import MaterialQuotationComponent from "./MaterialQuotationComponent";
import WageQuotationComponent from "./WageQuotationComponent";
import axios from "axios";
import MaterialQuotationTotalComponent from "./MaterialQuotationTotalComponent";
import ProcessQuotationTotalComponent from "./ProcessQuotationTotalComponent";
import WageQuotationTotalComponent from "./WageQuotationTotalComponent";
import { Link } from "react-router-dom";

const SelectQuotationForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [quotName, setQuotName] = useState("");
  const [quoAddress, setQuoAddress] = useState("");
  const [quoNumber, setQuoNumber] = useState("");

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  const handleAddQuotation1 = newQuotation => {
    const none = "1";
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("https://gold-fawn-fez.cyclic.app/api/v1/quotationCMP/quo/", {
        quotName,
        quoAddress
      });
      setQuotName(response.data.data.quotationDET.quotName);
      setQuoAddress(response.data.data.quotationDET.quoAddress);
      setQuoNumber(response.data.data.quotationDET.quoNumber);
      // do something with the response
    } catch (error) {
      console.log(error.response.data);
      // handle error
    }
  };

  useEffect(() => {
    if (quoNumber) {
      window.print();
    }
  }, [quoNumber]);

  return (
    <div className="lg:-mb-8">
      <div className="p-4 print-only">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left font-bold border py-2 w-16">Client Name</th>
              <th className="text-left font-bold border py-2">Client Address</th>
              <th className="text-left font-bold border py-2 w-24">Quotation Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-left border">{quotName}</td>
              <td className="py-2 w-3/6 text-left border">{quoAddress}</td>
              <td className="py-2 text-left border">QRPVM000{quoNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-print mt-16 ">
        <div className="non-printable">
          <div className="non-printable flex lg:justify-start justify-center  mx-auto  lg:ml-32 lg:-mb-36  max-w-5xl">
            <div className="bg-custom-green bgr flex flex-col md:flex-row justify-center md:justify-between items-center rounded-lg shadow-lg p-6 mb-6 pt-6 pb-10">
              <div className="px-4">
                <label className="block mb-4 font-semibold"></label>
                <div className="flex items-center">
                  <button
                    className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black font-semibold h-10 px-4 ml-4 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300"
                    onClick={handleSubmit}>
                    <Link to="/viewAllCompany">Manage Quotation</Link>
                  </button>
                </div>
              </div>
              <div className="px-4">
                <label className="block mb-4 font-semibold"></label>
                <div className="flex items-center">
                  <button
                    className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black font-semibold h-10 px-4 ml-4 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300"
                    onClick={handleSubmit}>
                    <Link to="/viewCompanyForProduct">Manage Product</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:justify-center md:flex-row md:justify-between  non-printable">
            <div className="bg-custom-green bgr rounded-lg shadow-lg p-6 mb-4 max-w-5xl md:flex md:items-center">
              <div className="px-2">
                <label className="mr-4 block mb-2 text-white font-semibold">Client Name:</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={quotName}
                    onChange={e => setQuotName(e.target.value)}
                    className="w-full mt-2 border border-yellow-400 px-2 py-1 text-left rounded-lg bg-orange-100 bg-opacity-40"
                  />
                </div>
              </div>
              <div className="px-2">
                <label className="mr-4 block mb-2 font-semibold text-white">Address:</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={quoAddress}
                    onChange={e => setQuoAddress(e.target.value)}
                    className="w-full mt-2 border border-yellow-400 px-2 py-1 text-left rounded-lg bg-orange-100 bg-opacity-40"
                  />
                </div>
              </div>
              <div className="px-2">
                <label className="mr-4 block mb-2 text-white font-semibold">Quotation Type:</label>
                <div className="flex items-center">
                  <select
                    id="select-option"
                    className="non-printable border border-yellow-400 px-4 py-1 w-full mt-2 rounded-lg bg-orange-100 bg-opacity-40"
                    value={selectedOption}
                    onChange={handleOptionChange}>
                    <option value="">Quotation</option>
                    <option value="1">Material Quotation</option>
                    <option value="2">Process Quotation</option>
                    <option value="3">Wage Quotation</option>
                    <option value="all">All</option>
                  </select>
                </div>
              </div>
              <div className="px-2">
                <label className="mr-4 block mb-2 font-semibold"></label>
                <div className="flex items-center">
                  <button
                    className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black font-semibold h-10 px-4 ml-4 mt-3 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300"
                    onClick={handleSubmit}>
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:-mt-44 dmt pt-1">
          {selectedOption === "" && <ProcessQuotationTotalComponent onAddQuotation={handleAddQuotation1} />}
          {selectedOption === "1" && <MaterialQuotationTotalComponent onAddQuotation={handleAddQuotation1} />}
          {selectedOption === "2" && <ProcessQuotationTotalComponent onAddQuotation={handleAddQuotation1} />}
          {selectedOption === "3" && <WageQuotationTotalComponent onAddQuotation={handleAddQuotation1} />}
          {selectedOption === "all" && (
            <>
              <Quotation />
            </>
          )}
        </div>
      </div>

      <div className="p-4 print-only">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left font-bold border py-2 w-16">TERMS AND CONDITIONS:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-left border">
                Orders shall be released in the name of our distributor (Mr. Ravi) A-25, Viduthalai Nagar, Mudaliarpet,
                Puducherry - 605004.
              </td>
            </tr>
            <tr>
              <td className="py-2 text-left border">Valid for 30 days from estimate date.</td>
            </tr>
            <tr>
              <td className="py-2 text-left border">
                The rate quested above is inclusive of cost of material mentioned, tools, labor charges etc.
              </td>
            </tr>
            <tr>
              <td className="py-2 text-left border">
                Complete however any additional works to be carried out should be arranged andpaid for by you
                separately.
              </td>
            </tr>
            <tr>
              <td className="py-2 text-left border">
                Water and electricity required should be provided free of cost by your side.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectQuotationForm;
