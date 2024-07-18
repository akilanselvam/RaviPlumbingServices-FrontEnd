import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
function CreateProduct() {
  const [name, setName] = useState("");
  // const [cmpId, setCmpId] = useState("");
  const { cmpId } = useParams();
  const Navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("https://gold-fawn-fez.cyclic.app/api/v1/quotationProduct/", {
        name,
        cmpId,
        description,
        category,
        unitPrice
      });
      Navigate(`/ViewAllProduct/${cmpId}`);
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  return (
    <>
      <div>
        <div className=" flex flex-col lg:flex-row  lg:justify-self-start lg:mx-96 lg:-mb-28 mt-24  ">
          <div className="mx-auto  non-printable lg:-mr-28 ">
            <div className="bg-custom-green bgr flex justify-between rounded-lg shadow-lg p-2 pb-6 pt-2 mb-10">
              <div className="px-2">
                <label className="block mb-4 font-semibold"></label>
                <div className="flex items-center">
                  <Link to={`/ViewAllProduct/${cmpId}`}>
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
        <div className="p-4 bg-custom-green bgr rounded-xl shadow-xl opacity-80 mx-auto lg:mt-24 sm:w-1/3">
          <h2 className="text-2xl text-left font-semibold mb-4">Create New Item</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold">
                Name:
              </label>
              <input
                type="text"
                value={name}
                className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Description:</label>
              <textarea
                className="h-40 w-full mt-2 border border-yellow-400 px-2 py-1 text-left rounded-lg bg-orange-100 bg-opacity-40"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Category:</label>
              <input
                type="text"
                value={category}
                className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
                onChange={e => setCategory(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Unit Price:</label>
              <input
                type="text"
                value={unitPrice}
                className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
                onChange={e => setUnitPrice(e.target.value)}
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
    </>
  );
}

export default CreateProduct;
