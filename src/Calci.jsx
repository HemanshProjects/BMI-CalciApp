import React, { useState } from "react";
import CalciButtons from "./CalciButtons";
import { evaluate } from "mathjs";

const Calci = () => {
  const [number, setNumber] = useState('');

  const RecieveData = (data) => {
    console.log("input:", data)
     if(data==='C'){
      setNumber('')
    }
    else if(data==='<'){
      setNumber(number.slice(0,-1))
    }
    else if(data==='='){
      setNumber((evaluate(number).toFixed(0).toString()))

    }
    else {
      setNumber((preValue)=> preValue + data)
    }
  };

    

  return (
    <div className="bg-gray-200 h-screen">
      <div className=" font-Roboto flex-col px-10 md:px-80 pt-6 ">
        <h1 className="text-2xl flex justify-center text-white font-bold bg-indigo-900 px-4 py-6">
          H's Math Calculator
        </h1>
        <div className="border-[6px] border-sky-200 bg-white mt-8 rounded-xl grid grid-rows-6 gap-2 py-4 mx-8 md:mx-20">
          <div className=" flex justify-center text-2xl font-bold">
            {number}
          </div>
          <CalciButtons sendData={RecieveData} />
        </div>
      </div>
    </div>
  );
};

export default Calci;
