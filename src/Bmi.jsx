import React, { useState } from "react";

const Bmi = () => {
  const [wt, setWt] = useState(60);
  const [ht, setHt] = useState(150);

  const bmi= ((wt/ht**2)*10000).toFixed(2)

  return (
    <div className="bg-gray-200 h-screen">
      <div className=" font-Roboto flex-col px-10 md:px-80 py-6 ">
        <h1 className="text-2xl flex justify-center text-white font-bold bg-indigo-900 px-4 py-6">
          H's BMI Calculator
        </h1>
        <div className="border-[1px] bg-white mt-8 border-gray-400 rounded-xl  py-4 flex-col px-[15%]">
          <div className="flex-col justify-center">
            <h3 className="text-xs ml-1">Weight: {wt}kg</h3>
            <input
              type="range"
              min="25"
              max="150"
              step="1"
              className="w-full"
              value={wt}
              onChange={(e) => setWt(e.target.value)}
            />
            <h3 className="text-xs ml-1">Height: {ht}cm</h3>
            <input
              type="range"
              min="100"
              max="200"
              step="1"
              onChange={(e) => setHt(e.target.value)}
              value={ht}
              className="w-full"
            />
          </div>
          <div className="flex-col justify-around py-4 space-y-2 mt-1">
            <div className="flex justify-center text-sm font-light">Your BMI is</div>
            <div className="flex justify-center text-sm text-white">
              <span className=" bg-indigo-500 px-4 py-2 rounded-full">{bmi}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
