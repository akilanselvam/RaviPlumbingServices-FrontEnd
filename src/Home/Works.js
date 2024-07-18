import React from "react";
import MiddleImg from ".././Assets/Middle.jpg";

const Works = () => {
  return (
    <div>
      {" "}
      <section className="p-4 lg:p- pt-20 ">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src={MiddleImg} alt="" className="h-80 dark:bg-gray-500 " />
            <div className="flex flex-col justify-center flex-1 p-6 bgr bg-custom-green">
              <span className="text-md  text-white">Plumbing Perfection</span>
              <h3 className="text-3xl pt-1 font-bold">Driving Growth and Excellence in Plumbing Services</h3>
              <p className="my-6 text-md text-white">
                "To become the leading plumbing service provider in the local market by increasing our customer base,
                expanding our range of services, and continuously improving our quality of workmanship and customer
                service. We aim to achieve this objective by investing in the professional development of our employees,
                adopting the latest plumbing technologies, and building strategic partnerships with other businesses in
                the industry."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
