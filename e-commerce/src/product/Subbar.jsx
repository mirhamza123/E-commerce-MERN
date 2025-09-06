import React from "react";
import speakerImg from "../assets/Frame 694.png"; // Adjust the path if needed

function Subbar() {
  return (
    <div className="w-5xl  m-auto mt-30 max-w-5xl">
      <div className="relative bg-black  overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 py-12">
        {/* Text Content */}
        <div className="text-center md:text-left md:max-w-md">
          <div className="mb-4">
            <span className="text-green-400 font-medium text-sm tracking-wide">
              Categories
            </span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8">
            Enhance Your <br /> Music Experience
          </h1>
          {/* Timer */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            {[
              { value: "23", label: "Hours" },
              { value: "05", label: "Days" },
              { value: "59", label: "Minutes" },
              { value: "35", label: "Seconds" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center"
              >
                <span className="text-black font-bold text-lg">
                  {item.value}
                </span>
                <span className="text-black text-xs">{item.label}</span>
              </div>
            ))}
          </div>
          {/* Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            Buy Now!
          </button>
        </div>

        {/* Image */}

        <div className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={speakerImg}
            alt="Speaker"
            className="max-w-xs md:max-w-md w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Subbar;
