import React, { useState } from "react";
import Quotation from "./Quotation";
import QuotationTable from "./QuotationForm";

function QuotationSelect() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <label htmlFor="select-option ">Select an option:</label>
      <select id="select-option" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="all">All</option>
      </select>

      {selectedOption === "1" && <Quotation />}
      {selectedOption === "2" && <Quotation />}
      {selectedOption === "all" && (
        <>
          <QuotationTable />{" "}
        </>
      )}
    </div>
  );
}

export default QuotationSelect;
