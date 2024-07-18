import React, { useState, useEffect } from "react";
import axios from "axios";

function QuotationComponent() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [unitPrice, setUnitPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Fetch companies on component mount
  useEffect(() => {
    axios
      .get("https://gold-fawn-fez.cyclic.app/api/v1/quotationCMP/company")
      .then(response => {
        setCompanies(response.data.data.newQuotationCMP);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Fetch products when selectedCompany changes
  useEffect(() => {
    if (selectedCompany !== "") {
      axios
        .get(`https://gold-fawn-fez.cyclic.app/api/v1/quotationProduct/cmpid/${selectedCompany}`)
        .then(response => {
          setProducts(response.data.data.newQuotationProduct);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [selectedCompany]);

  // Handle selection of company
  const handleCompanyChange = event => {
    setSelectedCompany(event.target.value);
    setSelectedProduct({});
  };

  // Handle selection of product
  const handleProductChange = event => {
    const selectedProduct = products.find(product => product.name === event.target.value);
    setSelectedProduct(selectedProduct);
    setUnitPrice(selectedProduct.unitPrice);
    setQuantity(1);
  };

  // Handle change in quantity
  const handleQuantityChange = event => {
    setQuantity(Number(event.target.value));
  };

  // Calculate total price
  const totalPrice = selectedProduct.unitPrice * quantity;
  useEffect(() => {
    console.log("Change");
  }, [totalPrice]);

  return (
    <div>
      <br />
      <br />
      <h1>Process Quotation</h1>
      <br />
      <br />
      <label htmlFor="company-select">Select Company:</label>
      <select id="company-select" value={selectedCompany} onChange={handleCompanyChange}>
        <option value="">Select Company</option>
        {companies.map(company => (
          <option key={company._id} value={company.cmpId}>
            {company.name}
          </option>
        ))}
      </select>

      {selectedCompany !== "" && (
        <div>
          <label htmlFor="product-select">Select Product:</label>
          <select id="product-select" value={selectedProduct.name || ""} onChange={handleProductChange}>
            <option value="">Select Product</option>
            {Array.isArray(products) &&
              products.map(product => (
                <option key={product._id} value={product.name}>
                  {product.name}
                </option>
              ))}
          </select>

          <div>
            <label htmlFor="unit-price">Unit Price:</label>
            <input id="unit-price" type="number" value={selectedProduct.unitPrice || 0} readOnly />
          </div>

          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input id="quantity" type="number" min="1" max="100" value={quantity} onChange={handleQuantityChange} />
          </div>
          <div>
            <label htmlFor="total-price">Total Price:</label>
            <input id="total-price" type="number" value={totalPrice} readOnly />
          </div>
        </div>
      )}
    </div>
  );
}
export default QuotationComponent;
