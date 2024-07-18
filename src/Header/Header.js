import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from ".././Assets/logoGold.png";

const Header = () => {
  return (
    <div className="non-printable bg-custom-green bgr ">
      <div className="py-4 px-10 flex justify-between items-center ">
        <div className="flex items-center space-x-2 ">
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none">
              <Link to={`/`} className="font-bold tracking-wide text-gray-800 uppercase">
                <img src={logo} alt="" className="w-48 " />
              </Link>
            </h2>
          </div>
        </div>

        <Link
          to={`/navigationCheck`}
          className=" bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 text-black font-semibold  py-2 ml-6  mt-2 px-6 rounded-sm cursor-pointer shadow-lg focus:shadow-xl hover:shadow-xl active:shadow transform hover:-translate-y-0.5 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 duration-300 ease-in-out">
          Management
        </Link>
      </div>
    </div>
  );
};

export default Header;
