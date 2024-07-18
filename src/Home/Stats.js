import React from "react";
import CountUp from "react-countup";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { BsTools } from "react-icons/bs";

const Stats = () => {
  return (
    <section className="flex items-center justify-center  text-gray-800 px-10 lg:-mb-2 lg:mt-10 ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="flex items-center p-4 bgr bg-custom-green rounded">
          <div className="flex flex-shrink-0 items-center justify-center bg-gradient-to-r from-yellow-200  to-yellow-600 h-16 w-16 rounded">
            <AiOutlineFundProjectionScreen style={{ fontSize: "34px" }} />
          </div>
          <div className="flex-grow flex flex-col ml-4">
            <span className="text-xl text-white font-bold">
              {" "}
              <CountUp start={200} end={1000} duration={3.75} />+
            </span>
            <div className="flex items-center justify-between">
              <span className="text-white">Projects Completed</span>
              <span className="text-green-500 text-sm font-semibold ml-2"></span>
            </div>
          </div>
        </div>
        <div className="flex items-center p-4 bgr bg-custom-green rounded">
          <div className="flex flex-shrink-0 items-center justify-center bg-gradient-to-r from-yellow-200  to-yellow-600 h-16 w-16 rounded">
            <GrUserWorker style={{ fontSize: "30px" }} />
          </div>
          <div className="flex-grow flex flex-col ml-4">
            <span className="text-xl text-white font-bold">
              <CountUp start={1} end={16} duration={4.75} />+
            </span>
            <div className="flex items-center justify-between">
              <span className="text-white">Employee Headcount</span>
            </div>
          </div>
        </div>
        <div className="flex items-center p-4 bgr bg-custom-green rounded">
          <div className="flex flex-shrink-0 items-center justify-center bg-gradient-to-r from-yellow-200  to-yellow-600 h-16 w-16 rounded">
            <BsTools style={{ fontSize: "30px" }} />
          </div>
          <div className="flex-grow flex flex-col ml-4">
            <span className="text-xl text-white font-bold">
              <CountUp start={0} end={10} duration={4.75} />+
            </span>
            <div className="flex items-center justify-between">
              <span className="text-white">Industry Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
