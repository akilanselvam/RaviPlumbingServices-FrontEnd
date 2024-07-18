import React from "react";

const Footer = () => {
  return (
    <div className="non-printable  bottom-0 w-full bg-custom-green bgr ">
      <footer className=" ">
        <p className="text-sm text-white py-4 text-center ">
          © Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
