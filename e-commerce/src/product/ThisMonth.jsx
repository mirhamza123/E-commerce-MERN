import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import bag from "../assets/bag.png";
import shirt from "../assets/shirt.png";
import music from "../assets/music.png";
import cart from "../assets/cart.png";

function ThisMonth() {
  return (
    <div>
      <div className="w-5xl m-auto mt-30 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-5 h-7 bg-red-500 "></div>
            <span className="text-red-500 font-medium">This Month</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-10">
          <h2 className="font-bold text-2xl mt-3">Best Selling Products</h2>
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-medium transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative bg-gray-100 p-6 h-64">
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                  <FaRegHeart />
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                  <FaRegEye />
                </button>
              </div>
              <div className="flex items-center justify-center h-full">
                <img src={shirt} alt="" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">The north coat</h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-red-500 font-medium">$260</span>
                <span className="text-gray-400 line-through">$360</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                </div>
                <span className="text-gray-400 text-sm">(65)</span>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative bg-gray-100 p-6 h-64">
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                  <FaRegHeart />
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                  <FaRegEye />
                </button>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="relative">
                  <img src={bag} alt="" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">
                Gucci duffle bag
              </h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-red-500 font-medium">$960</span>
                <span className="text-gray-400 line-through">$1160</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                </div>
                <span className="text-gray-400 text-sm">(65)</span>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative bg-gray-100 p-6 h-64">
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                  <FaRegHeart />
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                  <FaRegEye />
                </button>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="relative">
                  <img src={music} alt="" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">
                RGB liquid CPU Cooler
              </h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-red-500 font-medium">$160</span>
                <span className="text-gray-400 line-through">$170</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                </div>
                <span className="text-gray-400 text-sm">(65)</span>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative bg-gray-100 p-6 h-64">
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                  <FaRegHeart />
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                  <FaRegEye />
                </button>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="relative">
                  <img src={cart} alt="" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">
                Small BookShelf
              </h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-red-500 font-medium">$360</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                </div>
                <span className="text-gray-400 text-sm">(65)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThisMonth;
