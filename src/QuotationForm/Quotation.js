// import React, { useState } from "react";
// import QuotationTable from "./QuotationForm";
// import MaterialQuotationComponent from "../QuotationComponent/MaterialQuotationComponent";
// import WageQuotationComponent from "../QuotationComponent/WageQuotationComponent";
// import QuoteBox from "./QuoteBox";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";

// const Quotation = () => {
//   const [quotations1, setQuotations1] = useState([]);
//   const [quotations2, setQuotations2] = useState([]);
//   const [quotations, setQuotations] = useState([]);
//   const [showTotal, setShowTotal] = useState(false);
//   const [totalQuotation, settotalQuotation] = useState(0);
//   const handleAddQuotation = newQuotation => {
//     setShowTotal(false);
//     setQuotations(newQuotation);
//   };
//   const handleAddQuotation1 = newQuotation => {
//     setShowTotal(false);
//     setQuotations1(newQuotation);
//   };
//   const handleAddQuotation2 = newQuotation => {
//     setShowTotal(false);
//     setQuotations2(newQuotation);
//   };

//   const handleGetTotalQuotation = () => {
//     setShowTotal(true);
//     settotalQuotation(quotations + quotations1 + quotations2);
//   };

//   return (
//     <div>
//       <QuotationTable onAddQuotation={handleAddQuotation} />

//       <MaterialQuotationComponent onAddQuotation={handleAddQuotation1} />

//       <WageQuotationComponent onAddQuotation={handleAddQuotation2} />

//       {showTotal && <p>Total Quotation: {totalQuotation}</p>}

//       <button onClick={handleGetTotalQuotation}>Get Total Quotation</button>
//     </div>
//   );
// };

// export default Quotation;
import React, { useState } from "react";
import QuotationTable from "./QuotationForm";
import MaterialQuotationComponent from "../QuotationComponent/MaterialQuotationComponent";
import WageQuotationComponent from "../QuotationComponent/WageQuotationComponent";
import QuoteBox from "./QuoteBox";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Quotation = () => {
  const [quotations1, setQuotations1] = useState([]);
  const [quotations2, setQuotations2] = useState([]);
  const [quotations, setQuotations] = useState([]);
  const [showTotal, setShowTotal] = useState(false);
  const [totalQuotation, settotalQuotation] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddQuotation = newQuotation => {
    setShowTotal(false);
    setQuotations(newQuotation);
  };
  const handleAddQuotation1 = newQuotation => {
    setShowTotal(false);
    setQuotations1(newQuotation);
  };
  const handleAddQuotation2 = newQuotation => {
    setShowTotal(false);
    setQuotations2(newQuotation);
  };

  const handleGetTotalQuotation = () => {
    const total = quotations + quotations1 + quotations2;
    const cgstAmount = (total * 9) / 100;
    const sgstAmount = (total * 9) / 100;
    const discountAmount = (total * discountPercentage) / 100;
    const totalAmount = total + cgstAmount + sgstAmount - discountAmount;

    setShowTotal(true);
    setCgst(cgstAmount);
    setSgst(sgstAmount);
    setDiscountAmount(discountAmount);
    setTotalAmount(totalAmount);
    settotalQuotation(total);
  };
  const handleDiscountChange = event => {
    const discount = event.target.value;
    setDiscountPercentage(discount);
  };

  return (
    <div>
      <QuotationTable onAddQuotation={handleAddQuotation} />

      <MaterialQuotationComponent onAddQuotation={handleAddQuotation1} />

      <WageQuotationComponent onAddQuotation={handleAddQuotation2} />
      <div className="flex flex-col sm:flex-row justify-between lg:pb-8">
        <table className=" bg-custom-green bgr rounded-md shadow-xl my-8 mx-auto non-printable opacity-80 overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black  rounded-md">
              <th className="text-center font-semibold py-4 px-8">Discount Percentage</th>
              <th className="text-center font-semibold py-4 px-8">Get Total Quotation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-8 text-center  ">
                {" "}
                <input
                  type="number"
                  value={discountPercentage}
                  onChange={handleDiscountChange}
                  className="  w-full mt-2  border border-yellow-400 px-2 py-1 text-center rounded-lg bg-orange-100 bg-opacity-40 "
                  placeholder="Discount Percentage"
                />
              </td>
              <td className="py-4 px-8 text-center  ">
                {" "}
                <button
                  className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4 ml-4 py-2 text-center  rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300"
                  onClick={handleGetTotalQuotation}>
                  Proceed
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="lg:-ml-52 bg-custom-green bgr rounded-md shadow-xl my-8 mx-auto non-printable opacity-80 overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black  rounded-md">
              <th className="text-center font-semibold py-4 px-12 hidden sm:hidden md:hidden lg:table-cell ">
                Quotation Total
              </th>
              <th className="text-center font-semibold py-4 px-12 hidden sm:hidden md:hidden lg:table-cell  ">
                CGST (9%)
              </th>
              <th className="text-center font-semibold py-4 px-12 hidden sm:hidden md:hidden lg:table-cell  ">
                SGST (9%)
              </th>
              <th className="text-center font-semibold py-4 px-12 hidden sm:hidden md:hidden lg:table-cell  ">
                Discount ({discountPercentage}%)
              </th>
              <th className="text-center font-semibold py-4 px-12 hidden sm:hidden md:hidden lg:table-cell  ">
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-center font-bold py-4 px-12 lg:hidden bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black ">
                Quotation Total
              </th>
              <td className="py-4 px-8 text-center text-white font-bold ">{totalQuotation}</td>
              <th className="text-center font-bold py-4 px-12 lg:hidden bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black ">
                CGST (9%)
              </th>
              <td className="py-4 px-8 text-center text-white font-bold  ">{cgst}</td>
              <th className="text-center font-bold py-4 px-12 lg:hidden bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black ">
                SGST (9%)
              </th>
              <td className="py-4 px-8 text-center text-white font-bold  ">{sgst}</td>
              <th className="text-center font-bold py-4 px-12 lg:hidden bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black ">
                Discount ({discountPercentage}%)
              </th>
              <td className="py-4 px-8 text-center text-white font-bold  ">{discountAmount}</td>
              <th className="text-center font-bold py-4 px-12 lg:hidden bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black ">
                Total Amount
              </th>
              <td className="py-4 px-8 text-center text-white font-bold ">{totalAmount.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="print-only">
        {showTotal && (
          <table>
            <thead>
              <tr>
                <th>Quotation Total</th>
                <th>CGST (9%)</th>
                <th>SGST (9%)</th>
                <th>Discount ({discountPercentage}%)</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{totalQuotation}</td>
                <td>{cgst}</td>
                <td>{sgst}</td>
                <td>{discountAmount}</td>
                <td>{totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      {/*}  <div className="non-printable">
        <input
          type="number"
          value={discountPercentage}
          onChange={handleDiscountChange}
          placeholder="Discount Percentage"
        />
        <button onClick={handleGetTotalQuotation}>Get Total Quotation</button>
        </div>*/}
    </div>
  );
};

export default Quotation;
