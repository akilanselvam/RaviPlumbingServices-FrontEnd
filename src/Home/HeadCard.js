import React from "react";
import HomeHead from ".././Assets/Homehero.jpg";
const HeadCard = () => {
  return (
    <div className="lg:ml-52">
      <div className="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-">
        <div className="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 ">
          <a className="" href="#" title="Image Link">
            <picture className="relative block w-full h-0  overflow-hidden shadow-lg pt-80">
              <img className="absolute inset-0 w-full h-full rounded-lg object-cover" src={HomeHead} />
            </picture>
          </a>
        </div>
        <div className="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
          <div className="p-4 md:p-8 rounded-lg bg-gradient-to-r  from-yellow-600 via-yellow-200 to-yellow-600 shadow-lg">
            <p className="mb-2 text-lg leading-none ">
              <a className="font-semibold" href="#" title="Heading Link">
                Ravi Dhandapani
              </a>
            </p>
            <p className="mb-2 text-sm text-gray-700 ">A-25, Viduthalai Nagar, Mudaliarpet, Puducherry - 605004.</p>
            <p className="text-xs text-black font-semibold">+91 97902 17150</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadCard;
