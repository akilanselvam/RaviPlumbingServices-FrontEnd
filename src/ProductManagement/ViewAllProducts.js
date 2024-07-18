import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
function ViewAllProducts() {
  const { cmpId } = useParams();
  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();
  const [selectedUpdate, setSelectedUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(`https://gold-fawn-fez.cyclic.app/api/v1/quotationProduct/cmpid/${cmpId}`)
      .then(response => {
        setProducts(response.data.data.newQuotationProduct);
        setSelectedUpdate(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [cmpId, selectedUpdate]);

  return (
    <div>
      <div className=" flex flex-col lg:flex-row justify-between lg:-mb-12 pt-16">
        <div className=" mx-auto lg:-mr-8  non-printable max-w-5xl">
          <div className="bg-custom-green bgr flex justify-between rounded-lg shadow-lg p-2 pb-6 pt-2 mb-10">
            <div className="px-2">
              <label className="block mb-4 font-semibold"></label>
              <div className="flex items-center">
                <Link to={`/viewCompanyForProduct`}>
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
                  <Link to={`/CreateUpdate/${cmpId}`}>Create Products</Link>
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
            <th className="text-center font-semibold py-2  ">Name</th>

            <th className="text-center font-semibold py-2  ">Category</th>
            <th className="text-center font-semibold py-2  ">Unit Price</th>
            <th className="text-center font-semibold py-2  ">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id} className="border border-yellow-400 border-l-2 border-r-2 ">
              <td className="py-2 px-4 text-center  ">{product.name}</td>

              <td className="py-2 px-4 text-center  ">{product.category}</td>
              <td className="py-2 px-4 text-center  ">{product.unitPrice}</td>
              <td className="py-2 px-4 text-center flex justify-between   ">
                {" "}
                <Link className="-mr-24" to={`/ProductUpdate/${product._id}`}>
                  {" "}
                  <FaRegEdit style={{ fontSize: "24px", color: "#FDE047" }} />
                </Link>
                <button
                  onClick={() => {
                    axios.delete(`https://gold-fawn-fez.cyclic.app/api/v1/quotationProduct/${product._id}`);
                    // Redirect to life hack list after deleting
                    setSelectedUpdate(true);
                    Navigate(`/ViewAllProduct/${product.cmpId}`);
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

export default ViewAllProducts;
