import React, { useState, useEffect } from "react";
import axios from "axios";

function HRQuoteForm() {
  const [cmpList, setCmpList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [rowCount, setRowCount] = useState(1);
  const [rowCounts, setRowCounts] = useState(1);
  const [inputDisabled, setInputDisabled] = useState(false);

  const [tableData, setTableData] = useState([]);
  const [overallTotal, setOverallTotal] = useState(0); // Add a new state variable for overall total

  // Load company list on component mount
  useEffect(() => {
    axios
      .get("https://gold-fawn-fez.cyclic.app/api/v1/quotationHRM")
      .then(response => {
        setCmpList(response.data.data.newQuotationHRM);
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
        quantity: 1,
        total: 0
      });
    }
    setTableData(initialData);
  }, [rowCount]);

  // Update selected product and unit price when product is changed
  const handleProductChange = (event, rowIndex) => {
    const productId = event.target.value;
    const product = tableData[rowIndex].productList.find(p => p._id === productId);
    const newData = [...tableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      selectedProduct: productId,
      unitPrice: product.unitPrice,
      total: product.unitPrice * newData[rowIndex].quantity
    };
    setTableData(newData);
  };

  // Update quantity and total when quantity is changed
  const handleQuantityChange = (event, rowIndex) => {
    const newQuantity = parseInt(event.target.value);
    const newData = [...tableData];
    newData[rowIndex] = {
      ...newData[rowIndex],
      quantity: newQuantity,
      total: newData[rowIndex].unitPrice * newQuantity
    };
    setTableData(newData);
  };

  // Update overall total every time table data changes
  useEffect(() => {
    const newOverallTotal = tableData.reduce((total, rowData) => {
      return total + rowData.total;
    }, 0);
    setOverallTotal(newOverallTotal);
  }, [tableData]);
  const handleDoneClick = () => {
    setInputDisabled(true);
  };

  return (
    <div>
      <label>Number of rows:</label>
      <input
        type="number"
        value={rowCounts}
        onChange={event => {
          setRowCounts(event.target.value);
        }}
        disabled={inputDisabled}
      />
      <button
        onClick={() => {
          setRowCount(rowCounts);
          handleDoneClick();
        }}
        disabled={inputDisabled}>
        Done
      </button>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <select value={rowData.cmpId} onChange={event => loadProductList(event.target.value, rowIndex)}>
                  <option value="">Select Company</option>
                  {cmpList.map(cmp => (
                    <option key={cmp._id} value={cmp.jobRole}>
                      {cmp.jobRole}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  value={rowData.selectedProduct}
                  onChange={event => handleProductChange(event, rowIndex)}
                  disabled={!rowData.cmpId}>
                  <option value="">Select Product</option>
                  {rowData.productList.map(product => (
                    <option key={product._id} value={product._id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>{rowData.unitPrice.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={rowData.quantity}
                  onChange={event => handleQuantityChange(event, rowIndex)}
                  disabled={!rowData.selectedProduct}
                />
              </td>
              <td>{rowData.total.toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" style={{ textAlign: "right" }}>
              Overall Total:
            </td>
            <td>{overallTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
// Export the HRQuoteForm component
export default HRQuoteForm;
