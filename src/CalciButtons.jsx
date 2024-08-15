import React from "react";

const CalciButtons = ({ sendData }) => {
  return (
    <>
      <div className="flex justify-evenly">
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData('C')}
        >
          C
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("<")}
        >
          &lt;
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("%")}
        >
          %
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("/")}
        >
          /
        </button>
      </div>
      {/* End of first row */}
      <div className="flex justify-evenly">
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("7")}
        >
          7
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("8")}
        >
          8
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("9")}
        >
          9
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("*")}
        >
          *
        </button>
      </div>
      {/* End of 2nd row */}
      <div className="flex justify-evenly">
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("4")}
        >
          4
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("5")}
        >
          5
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("6")}
        >
          6
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-[18px] flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("-")}
        >
          -
        </button>
      </div>
      {/* End of 3rd row */}
      <div className="flex justify-evenly">
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("1")}
        >
          1
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("2")}
        >
          2
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("3")}
        >
          3
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("+")}
        >
          +
        </button>
      </div>
      {/* End of 4th row */}
      <div className="flex justify-evenly">
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("0")}
        >
          0
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-3 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("00")}
        >
          00
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-[18px] flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData(".")}
        >
          .
        </button>
        <button
          className="border-4 border-sky-200 rounded-full py-2 px-4 flex justify-center items-center hover:bg-blue-300"
          onClick={() => sendData("=")}
        >
          =
        </button>
      </div>
      {/* End of 5th row */}
    </>
  );
};

export default CalciButtons;
