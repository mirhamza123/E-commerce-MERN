// import React from "react";
// import girl from "../assets/girls.jpg";

// export default function Story() {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="w-5xl  m-auto mt-10 max-w-5xl">
//         <div className="grid lg:grid-cols-2 min-h-screen">
//           {/* Left Side - Text Content */}
//           <div className="flex items-center justify-center p-8 lg:p-16 bg-white">
//             <div className="max-w-lg">
//               <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//                 Our Story
//               </h1>

//               <div className="space-y-6 text-gray-700 text-base lg:text-lg leading-relaxed">
//                 <p>
//                   Launched in 2015, Exclusive is South Asia's premier online
//                   shopping marketplace with an active presence in Bangladesh.
//                   Supported by wide range of tailored marketing, data and
//                   service solutions, Exclusive has 10,500 sellers and 300 brands
//                   and serves 3 millions customers across the region.
//                 </p>

//                 <p>
//                   Exclusive has more than 1 Million products to offer, growing
//                   at a very fast. Exclusive offers a diverse assortment in
//                   categories ranging from consumer.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Image Section */}
//           <div className="relative w-full flex items-center justify-center overflow-hidden">
//             {/* Image of two women shopping */}
//             {/* <div className="relative  flex items-center justify-center"></div> */}
//             <img
//               src={girl}
//               alt="Two happy women shopping with colorful shopping bags"
//               className="w-full  max-w-sm object-contain rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////
import React, { useEffect } from "react";
import girl from "../assets/girls.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Story() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // duration = speed of animation
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-5xl m-auto mt-10 max-w-5xl">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Side - Text Content */}
          <div
            className="flex items-center justify-center p-8 lg:p-16 bg-white"
            data-aos="fade-right"
          >
            <div className="max-w-lg">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Our Story
              </h1>

              <div className="space-y-6 text-gray-700 text-base lg:text-lg leading-relaxed">
                <p>
                  Launched in 2015, Exclusive is South Asia's premier online
                  shopping marketplace with an active presence in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sellers and 300 brands
                  and serves 3 millions customers across the region.
                </p>

                <p>
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assortment in
                  categories ranging from consumer.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div
            className="relative w-full flex items-center justify-center overflow-hidden"
            data-aos="fade-left"
          >
            <img
              src={girl}
              alt="Two happy women shopping with colorful shopping bags"
              className="w-full max-w-sm object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
