import React from "react";
import { useState } from "react";

const PlumbingQuotation = () => {
  const [items, setItems] = useState([
    { name: "Kitchen faucet installation", description: "Standard model", price: 80, quantity: 1 },
    { name: "Toilet repair", description: "Replace fill valve and flapper", price: 120, quantity: 2 },
    { name: "Bathroom sink installation", description: "Wall-mounted", price: 200, quantity: 1 }
  ]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Plumbing Work Quotation</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePrint}>
          Print
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left font-bold">Product Name / Description</th>
            <th className="text-right font-bold">Unit Price</th>
            <th className="text-right font-bold">Quantity</th>
            <th className="text-right font-bold">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="py-2">
                {item.name} ({item.description})
              </td>
              <td className="py-2 text-right">${item.price.toFixed(2)}</td>
              <td className="py-2 text-right">{item.quantity}</td>
              <td className="py-2 text-right">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="py-2"></td>
            <td className="py-2"></td>
            <td className="py-2 text-right font-bold">
              Total: ${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PlumbingQuotation;
