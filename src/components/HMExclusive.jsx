import React from "react";
import home from "./../assets/jpg/sellCategoryImage.jpg";

export default function HMExclusive() {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="">
        <div className="font-bold text-3xl">House <span className="font-normal">Marketplace</span> <span className="font-normal">Exclusives</span></div>
        <p className="text-sm mb-7 ">
          Be the first to browse exclusive listings before they hit the market.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          {array.map((el) => (
            <div className="relative text-white">
              <img className="z-0" src={home} alt="" />
              <div className="absolute flex justify-between p-2 right-0 left-0 bottom-0 z-10">
                <div>
                  <div className="text-lg font-bold">$3,900,000</div>
                  <div className="text-xs">
                    <div>300 S Arden Blvd</div>
                    <div>Los Angeles, CA 90004</div>
                  </div>
                </div>
                <div className="flex divide-x ">
                  <div className="px-1 flex flex-col items-center justify-center">
                    <div>5</div>
                    <div>Bed</div>
                  </div>
                  <div className="px-1 flex flex-col items-center justify-center">
                    <div>2</div>
                    <div>Bath</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="p-3 px-6 my-5 bg-blue-500 text-white">View All HM Exclusives -></button>
      </div>
    </>
  );
}
