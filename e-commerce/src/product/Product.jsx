import React from "react";
import time from "../assets/time.png";
import remote from "../assets/remote.png";
import keybord from "../assets/keyborad.png";
import chair from "../assets/chair.png";
import monitor from "../assets/monitor.png";
import { FaStar } from "react-icons/fa";

function Product() {
  return (
    <div>
      <div className="w-5xl  m-auto mt-25 max-w-5xl">
        <div>
          <div className="flex gap-10 ">
            <div className="flex">
              <div className="w-5 h-7 bg-red-600 mt-1 m-2"></div>
              <div>
                <h1 className="text-red-600">Today’s</h1>
                <p className="font-bold text-2xl mt-3">Flash Sales</p>
              </div>
            </div>
            <img src={time} alt="" className="w-[302px] h-[50px]" />
          </div>
        </div>
        {/* card product */}

        <div class="flex gap- overflow-x-auto  mt-20">
          <div class="bg-white p-4 rounded-lg shadow-md w-64 relative shrink-0">
            <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -40%
            </div>

            <div class="absolute top-2 right-2 flex flex-col gap-2">
              <div class="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i class="fa-regular fa-heart text-gray-700"></i>
              </div>
              <div class="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i class="fa-regular fa-eye text-gray-700"></i>
              </div>
            </div>

            <div class="flex justify-center mb-4">
              <img
                src={remote}
                alt="HAVIT HV-G92 Gamepad"
                class="h-32 object-contain"
              />
            </div>

            <h3 class="text-sm font-semibold text-center">
              HAVIT HV-G92 Gamepad
            </h3>

            <div class="text-center mt-2">
              <span class="text-red-500 font-bold text-lg">$120</span>
              <span class="line-through text-gray-400 ml-2">$160</span>
            </div>

            <div class="flex justify-center items-center mt-1 gap-1 text-yellow-400">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <span class="text-gray-500 text-sm ml-2">(88)</span>
            </div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md w-64 relative shrink-0">
            <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -40%
            </div>

            <div class="absolute top-2 right-2 flex flex-col gap-2">
              <div class="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i class="fa-regular fa-heart text-gray-700"></i>
              </div>
              <div class="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i class="fa-regular fa-eye text-gray-700"></i>
              </div>
            </div>

            <div class="flex justify-center mb-4">
              <img
                src={keybord}
                alt="HAVIT HV-G92 Gamepad"
                class="h-32 object-contain"
              />
            </div>

            <h3 class="text-sm font-semibold text-center">KeyBoard</h3>

            <div class="text-center mt-2">
              <span class="text-red-500 font-bold text-lg">$960</span>
              <span class="line-through text-gray-400 ml-2">$1160</span>
            </div>

            <div class="flex justify-center items-center mt-1 gap-1 text-yellow-400">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <span class="text-gray-500 text-sm ml-2">(88)</span>
            </div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md w-64 relative shrink-0">
            <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -40%
            </div>

            <div class="absolute top-2 right-2 flex flex-col gap-2">
              <div class="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i class="fa-regular fa-heart text-gray-700"></i>
              </div>
              <div class="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i class="fa-regular fa-eye text-gray-700"></i>
              </div>
            </div>

            <div class="flex justify-center mb-4">
              <img
                src={monitor}
                alt="HAVIT HV-G92 Gamepad"
                class="h-32 object-contain"
              />
            </div>

            <h3 class="text-sm font-semibold text-center">Monitor</h3>

            <div class="text-center mt-2">
              <span class="text-red-500 font-bold text-lg">$360</span>
              <span class="line-through text-gray-400 ml-2">$400</span>
            </div>

            <div class="flex justify-center items-center mt-1 gap-1 text-yellow-400">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <span class="text-gray-500 text-sm ml-2">(88)</span>
            </div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md w-64 relative shrink-0">
            <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -40%
            </div>

            <div class="absolute top-2 right-2 flex flex-col gap-2">
              <div class="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i class="fa-regular fa-heart text-gray-700"></i>
              </div>
              <div class="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i class="fa-regular fa-eye text-gray-700"></i>
              </div>
            </div>

            <div class="flex justify-center mb-4">
              <img
                src={chair}
                alt="HAVIT HV-G92 Gamepad"
                class="h-32 object-contain"
              />
            </div>

            <h3 class="text-sm font-semibold text-center">Chair</h3>

            <div class="text-center mt-2">
              <span class="text-red-500 font-bold text-lg">$375</span>
              <span class="line-through text-gray-400 ml-2">$400</span>
            </div>

            <div class="flex justify-center items-center mt-1 gap-1 text-yellow-400">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <span class="text-gray-500 text-sm ml-2">(88)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
