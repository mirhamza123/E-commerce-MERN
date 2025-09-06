import React from "react";
import { Truck, Headphones, Shield } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className=" bg-white">
      <div className="w-5xl  m-auto mt-25 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Free and Fast Delivery */}
          <div className="text-center group">
            {/* Icon Container */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Outer Circle - Light Gray */}
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Inner Circle - Black */}
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    <Truck className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
              FREE AND FAST DELIVERY
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* 24/7 Customer Service */}
          <div className="text-center group">
            {/* Icon Container */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Outer Circle - Light Gray */}
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Inner Circle - Black */}
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    <Headphones
                      className="w-7 h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
              24/7 CUSTOMER SERVICE
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Friendly 24/7 customer support
            </p>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center group">
            {/* Icon Container */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Outer Circle - Light Gray */}
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Inner Circle - Black */}
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    <Shield className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
              MONEY BACK GUARANTEE
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
