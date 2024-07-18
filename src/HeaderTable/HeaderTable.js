import React from "react";
import logo from "../Assets/logo.png";
const HeaderTable = () => {
  return (
    <div className="print-only">
      <div className="flex items-center justify-between bg-gray-100 py-4 px-8 head-print printable print-only ">
        <div className="flex items-center">
          <div className="algn w-18">
            <img src={logo} alt="Logo" className="h-16 mr-6" />
            <p className="text-lg font-semibold pt-2">Ravi Plumbing and Sanitary Works</p>
            <p className="text-md ">+91 97902 17150</p>
          </div>
        </div>
        <div className="flex items-center">
          <table>
            <tbody>
              <tr>
                <td className="font-semibold text-left pr-2">Address:</td>
                <td>No.25 A Block, Viduthalai Nagar, Mudaliarpet.</td>
              </tr>

              <tr>
                <td className="font-semibold text-left pr-2">Date:</td>
                <td>06-08-2021</td>
              </tr>
              <tr>
                <td className="font-semibold text-left pr-2">GST No:</td>
                <td>34AASFR4030P1ZP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
