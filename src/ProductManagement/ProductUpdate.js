import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
const ProductUpdate = () => {
  const [product, setProduct] = useState({});
  const [cmpId, setCmpId] = useState({});

  const { id } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://gold-fawn-fez.cyclic.app/api/v1/quotationProduct/${id}`)
      .then(response => {
        setProduct(response.data.data.newQuotationProduct);
        setCmpId(response.data.data.newQuotationProduct.cmpId);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .patch(`https://gold-fawn-fez.cyclic.app/api/v1/quotationProduct/${id}`, product)
      .then(response => Navigate(`/ViewAllProduct/${product.cmpId}`))
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className=" flex flex-col lg:flex-row  lg:justify-self-start lg:mx-96 lg:-mb-28 mt-24  ">
        <div className="mx-auto  non-printable lg:-mr-28 ">
          <div className="bg-custom-green bgr  flex justify-between rounded-lg shadow-lg p-2 pb-6 pt-2 mb-10">
            <div className="px-4">
              <label className="block mb-4 font-semibold"></label>
              <div className="flex items-center">
                <Link to={`/ViewAllProduct/${cmpId}`}>
                  <button className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4  rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                    <RiArrowGoBackFill style={{ fontSize: "24px", color: "white" }} />
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
      <div className="p-4 bg-custom-green bgr rounded-xl shadow-xl opacity-80 mx-auto lg:mt-24 lg:w-1/3">
        <h2 className="text-2xl text-center font-semibold mb-4">Edit Item</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Name:</label>
            <input
              className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
              type="text"
              name="name"
              value={product.name || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Description:</label>
            <textarea
              className="h-40 w-full mt-2 border border-yellow-400 px-2 py-1 text-left rounded-lg bg-orange-100 bg-opacity-40"
              type="text"
              name="description"
              value={product.description || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Category:</label>
            <input
              className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
              type="text"
              name="category"
              value={product.category || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Unit Price:</label>
            <input
              className="mt-2 border text-left border-yellow-400 px-2 py-1  rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
              type="number"
              name="unitPrice"
              value={product.unitPrice || 0}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10  mx-auto  w-2/3 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductUpdate;
