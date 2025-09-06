// import React from "react";
// import { Store, DollarSign, ShoppingBag, Target } from "lucide-react";

// export default function State() {
//   const stats = [
//     {
//       icon: Store,
//       number: "10.5k",
//       description: "Sellers active our site",
//       bgColor: "bg-white",
//       iconBgColor: "bg-gray-900",
//       textColor: "text-gray-900",
//       iconColor: "text-white",
//     },
//     {
//       icon: DollarSign,
//       number: "33k",
//       description: "Mopnthly Produduct Sale",
//       bgColor: "bg-red-500",
//       iconBgColor: "bg-white",
//       textColor: "text-white",
//       iconColor: "text-red-500",
//     },
//     {
//       icon: ShoppingBag,
//       number: "45.5k",
//       description: "Customer active in our site",
//       bgColor: "bg-white",
//       iconBgColor: "bg-gray-900",
//       textColor: "text-gray-900",
//       iconColor: "text-white",
//     },
//     {
//       icon: Target,
//       number: "25k",
//       description: "Anual gross sale in our site",
//       bgColor: "bg-white",
//       iconBgColor: "bg-gray-900",
//       textColor: "text-gray-900",
//       iconColor: "text-white",
//     },
//   ];

//   return (
//     <div className=" bg-gray-50">
//       <div className="w-5xl  m-auto mt-10 max-w-5xl">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, index) => {
//             const IconComponent = stat.icon;
//             return (
//               <div
//                 key={index}
//                 className={`${stat.bgColor} ${stat.textColor} p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group cursor-pointer`}
//               >
//                 {/* Icon Circle */}
//                 <div
//                   className={`${stat.iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <IconComponent
//                     className={`${stat.iconColor} w-8 h-8`}
//                     strokeWidth={2}
//                   />
//                 </div>

//                 {/* Number */}
//                 <h3 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
//                   {stat.number}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm font-medium opacity-90 leading-relaxed">
//                   {stat.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////

import React, { useEffect } from "react";
import { Store, DollarSign, ShoppingBag, Target } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function State() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    {
      icon: Store,
      number: "10.5k",
      description: "Sellers active our site",
      bgColor: "bg-white",
      iconBgColor: "bg-gray-900",
      textColor: "text-gray-900",
      iconColor: "text-white",
      animation: "fade-up",
    },
    {
      icon: DollarSign,
      number: "33k",
      description: "Monthly Product Sale",
      bgColor: "bg-red-500",
      iconBgColor: "bg-white",
      textColor: "text-white",
      iconColor: "text-red-500",
      animation: "fade-up",
    },
    {
      icon: ShoppingBag,
      number: "45.5k",
      description: "Customer active in our site",
      bgColor: "bg-white",
      iconBgColor: "bg-gray-900",
      textColor: "text-gray-900",
      iconColor: "text-white",
      animation: "fade-up",
    },
    {
      icon: Target,
      number: "25k",
      description: "Annual gross sale in our site",
      bgColor: "bg-white",
      iconBgColor: "bg-gray-900",
      textColor: "text-gray-900",
      iconColor: "text-white",
      animation: "fade-up",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="w-5xl m-auto mt-10 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                data-aos={stat.animation}
                data-aos-delay={index * 200} // staggered animation
                className={`${stat.bgColor} ${stat.textColor} p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group cursor-pointer`}
              >
                {/* Icon Circle */}
                <div
                  className={`${stat.iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent
                    className={`${stat.iconColor} w-8 h-8`}
                    strokeWidth={2}
                  />
                </div>

                {/* Number */}
                <h3 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
                  {stat.number}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium opacity-90 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
