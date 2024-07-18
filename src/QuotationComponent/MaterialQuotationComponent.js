import React, { useState, useEffect } from "react";
import axios from "axios";

function MaterialQuotationComponent({ onAddQuotation }) {
  const [cmpList, setCmpList] = useState([]);

  const [productDescription, setProductDescription] = useState([]);
  const [newQuantity, setNewQuantity] = useState();

  const [rowCount, setRowCount] = useState(1);
  const [rowCounts, setRowCounts] = useState(1);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [productId, setProductId] = useState();
  const [tableData, setTableData] = useState([]);
  const [overallTotal, setOverallTotal] = useState(0); // Add a new state variable for overall total

  const handlePrint = () => {
    window.print();
  };
  // Load company list on component mount
  useEffect(() => {
    axios
      .get("https://gold-fawn-fez.cyclic.app/api/v1/quotationCMP/company")
      .then(response => {
        setCmpList(response.data.data.newQuotationCMP);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const loadProductList = (cmpId, rowIndex) => {
    axios
      .get(`https://gold-fawn-fez.cyclic.app/api/v1/quotationProduct/cmpid/${cmpId}`)
      .then(response => {
        const products = response.data.data.newQuotationProduct;
        const newData = [...tableData];
        newData[rowIndex] = {
          ...newData[rowIndex],
          productList: products,
          cmpId: cmpId // Add cmpId to the new state array
        };
        setTableData(newData);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Initialize table data with default values
  useEffect(() => {
    const initialData = [];
    for (let i = 0; i < rowCount; i++) {
      initialData.push({
        cmpId: "",
        productList: [],
        selectedProduct: "",
        unitPrice: 0,
        ls: "false",
        quantity: 1,
        qty: 1,
        total: 0
      });
    }
    setTableData(initialData);
  }, [rowCount]);

  // Update selected product and unit price when product is changed
  const handleProductChange = (event, rowIndex) => {
    const productId = event.target.value;
    const product = tableData[rowIndex].productList.find(p => p._id === productId);
    setProductId(productId);

    const newData = [...tableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      selectedProduct: productId,
      unitPrice: product.quantity === "LS" ? "" : product.unitPrice,
      description: product.description,
      ls: "false",
      name: product.name,
      qty: newData[rowIndex].quantity,
      total: product.unitPrice * newData[rowIndex].quantity
    };
    setTableData(newData);
  };

  useEffect(() => {
    if (productId != null) {
      axios
        .get(`https://gold-fawn-fez.cyclic.app/api/v1/quotationProduct/${productId}`)
        .then(response => {
          const prodDesc = response.data.data.newQuotationProduct.description;
          setProductDescription(prodDesc);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [productId]);

  // Update quantity and total when quantity is changed
  const handleQuantityChange = (event, rowIndex) => {
    const newQuantity = event.target.value !== "LS" ? parseInt(event.target.value) : 1;
    const newData = [...tableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      quantity: newQuantity,
      qty: newQuantity,
      total: newData[rowIndex].unitPrice * newQuantity
    };
    setTableData(newData);
  };
  const handleQuantityLumpSum = (event, rowIndex) => {
    const newData = [...tableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      qty: event.target.checked ? "LS" : 1
    };
    setTableData(newData);
  };

  const handleNameChange = (event, rowIndex) => {
    const prodName = event.target.value;
    const newData = [...tableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      name: prodName
    };
    setTableData(newData);
  };
  const handleDescriptionChange = (event, rowIndex) => {
    const prodDesc = event.target.value;
    const newData = [...tableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      description: prodDesc
    };
    setTableData(newData);
  };

  // Update overall total every time table data changes
  useEffect(() => {
    const newOverallTotal = tableData.reduce((total, rowData) => {
      return total + rowData.total;
    }, 0);
    setOverallTotal(newOverallTotal);
    onAddQuotation(newOverallTotal);
  }, [tableData]);

  const handleDoneClick = () => {
    setInputDisabled(true);
  };
  const handleUnitPriceChange = (event, rowIndex) => {
    const newUnitPrice = event.target.value;
    const newData = [...tableData];
    const qty = newData[rowIndex].quantity;

    newData[rowIndex] = {
      ...newData[rowIndex],
      unitPrice: newUnitPrice,
      total: newUnitPrice * qty
    };
    setTableData(newData);
  };

  function handlePrintClick() {
    window.print();
  }
  return (
    <div className="my-8">
      <div className="non-printable">
        <div className="flex justify-end lg:pr-52  e">
          <div className=" bg-custom-green bgr w-26 rounded-lg shadow-lg p-6 mb-4  w-md">
            <label className="mr-4 block mb-2 font-semibold text-white">Number of Products:</label>
            <div className="flex items-center">
              <input
                type="number"
                value={rowCounts}
                onChange={event => {
                  setRowCounts(event.target.value);
                }}
                className="mt-2 border text-center border-yellow-400 px-2 py-1 bg-orange-100 rounded-lg  bg-opacity-40 flex-grow"
              />
              <button
                onClick={() => {
                  setRowCount(rowCounts);
                  handleDoneClick();
                }}
                className="bg-gradient-to-r from-yellow-200 to-yellow-600 text-black h-10 px-4 ml-10 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="bg-custom-green bgr rounded-md shadow-xl my-4 mx-auto non-printable opacity-80 overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black  rounded-md">
              <th className="text-center font-semibold py-4 px-2  ">Quotation Type</th>
              <th className="text-center font-semibold py-4 px-2 ">Product Name</th>
              <th className="text-center font-semibold py-4 px-2 lg:w-24 ">Unit Price</th>
              <th className="text-center font-semibold py-4 px-2 lg:w-24 ">Quantity</th>
              <th className="text-center font-semibold py-4 px-2 ">L.S</th>
              <th className="text-center font-semibold py-4 px-2 ">Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, rowIndex) => (
              <tr key={rowIndex} className="border border-yellow-400 border-l-2 border-r-2 ">
                <td className="py-4 px-4 lg:w-48  non-printable">
                  <select
                    value={rowData.cmpId}
                    onChange={event => loadProductList(event.target.value, rowIndex)}
                    className="border border-yellow-400 px-2 py-1 w-full rounded-lg bg-orange-100 bg-opacity-40 ">
                    <option value="">Select Company</option>
                    {cmpList.map(cmp => (
                      <option key={cmp._id} value={cmp.cmpId}>
                        {cmp.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-4 px-4 lg:w-3/6  ">
                  <br />
                  <select
                    value={rowData.selectedProduct}
                    onChange={event => handleProductChange(event, rowIndex)}
                    disabled={!rowData.cmpId}
                    className="border border-yellow-400 px-2 py-1 w-full rounded-lg bg-orange-100 bg-opacity-40 ">
                    <option value="">Select Quotation</option>
                    {rowData.productList.map(product => (
                      <option key={product._id} value={product._id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                  <br />
                  <br />
                  <div className="text-white">Title:</div>
                  <input
                    type="text"
                    value={rowData.name}
                    onChange={event => handleNameChange(event, rowIndex)}
                    className="  w-full mt-2  border border-yellow-400 px-2 py-1 text-left rounded-lg bg-orange-100 bg-opacity-40 "
                    disabled={!rowData.cmpId}
                  />
                </td>
                <td className="py-4 px-4 text-center  ">
                  <input
                    type="number"
                    value={rowData.unitPrice}
                    onChange={e => handleUnitPriceChange(e, rowIndex)}
                    disabled={rowData.quantity === "LSD"}
                    className="border border-yellow-400 px-2 py-1 text-left rounded-lg bg-orange-100 bg-opacity-40 "
                  />
                </td>
                <td className="py-4 px-4 text-center  ">
                  <input
                    type="number"
                    min="1"
                    value={rowData.quantity}
                    onChange={event => handleQuantityChange(event, rowIndex)}
                    disabled={!rowData.selectedProduct}
                    className="border border-yellow-400 px-2 py-1 text-left rounded-lg bg-orange-100 bg-opacity-40 "
                  />
                </td>
                <td className="py-4 px-4  text-center  ">
                  <input
                    type="checkbox"
                    onChange={event => handleQuantityLumpSum(event, rowIndex)}
                    className="border border-yellow-400 rounded-md px-2 py-2   appearance-none checked:bg-yellow-400 checked:border-yellow-400 checked:ring-2 checked:ring-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </td>
                <td className="py-4 px-4 w-48 text-center ">
                  {rowData.quantity === "LSD"
                    ? "Lump Sum"
                    : rowData.unitPrice && rowData.quantity
                    ? `$${(rowData.unitPrice * rowData.quantity).toFixed(2)}`
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black">
              <td className="py-4 px-2 hidden lg:table-cell "></td>
              <td className="py-4 px-2 hidden lg:table-cell "></td>
              <td className="py-4 px-2 hidden lg:table-cell "></td>
              <td className="py-4 px-2 hidden lg:table-cell "></td>
              <td className="py-4 px-2 text-center  font-semibold">Total :</td>
              <td className="py-4 px-2 text-center  font-semibold ">{overallTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="p-4 print-only">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Material Quotation</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrint}></button>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left font-bold border py-2 w-16">SI No.</th>
              <th className="text-left font-bold border py-2">Product Name</th>
              <th className="text-right font-bold border py-2 w-24">Unit Price</th>
              <th className="text-right font-bold border py-2 w-24">Quantity</th>
              <th className="text-right font-bold border py-2 ">Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                <td className="py-2 text-right border">{rowIndex + 1}</td>
                <td className="py-2 w-3/6 border">{rowData.name}</td>
                <td className="py-2 text-right border">{rowData.unitPrice}</td>
                <td className="py-2 text-right border">{rowData.qty}</td>
                <td className="py-2 text-right border">{rowData.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2 text-center font-bold border">Total: {overallTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
// Export the MaterialQuotationComponent component
export default MaterialQuotationComponent;
