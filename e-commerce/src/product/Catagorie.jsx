// import React from "react";

// function Catagorie() {
//   return (
//     <div>
//       <div className="w-5xl  m-auto mt-30 max-w-5xl">
//         <div className="flex">
//           <div className="w-5 h-7 bg-red-600 mt-1 m-2"></div>
//           <div>
//             <h1 className="text-red-600">Categories</h1>
//             <p className="font-bold text-2xl mt-3">Browse By Category</p>
//           </div>
//         </div>
//         {/*  */}
//         <div class="flex gap-9 p-5 font-sans justify-center items-center bg-gray-100 mt-8">
//           <div class="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-shadow">
//             <div class="w-6 h-10 border-2 border-gray-800 rounded mb-4 relative">
//               <div class="w-2 h-0.5 bg-gray-800 absolute top-1 left-1/2 transform -translate-x-1/2"></div>
//               <div class="w-1.5 h-1.5 border border-gray-800 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
//             </div>
//             <span class="text-sm text-gray-800 font-medium">Phones</span>
//           </div>

//           <div class="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-shadow">
//             <div class="mb-4">
//               <div class="w-10 h-7 border-2 border-gray-800 rounded-sm mb-0.5"></div>
//               <div class="w-5 h-2 border-2 border-gray-800 border-t-0 mx-auto rounded-b"></div>
//             </div>
//             <span class="text-sm text-gray-800 font-medium">Computers</span>
//           </div>

//           <div class="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-shadow">
//             <div class="mb-4 relative">
//               <div class="w-8 h-10 border-2 border-gray-800 rounded-lg relative">
//                 <div class="w-1 h-2 bg-gray-800 absolute -top-2.5 left-1/2 transform -translate-x-1/2"></div>
//                 <div class="w-1 h-2 bg-gray-800 absolute -bottom-2.5 left-1/2 transform -translate-x-1/2"></div>
//                 <div class="w-4 h-0.5 bg-gray-800 absolute top-2 left-1/2 transform -translate-x-1/2"></div>
//                 <div class="w-3 h-0.5 bg-gray-800 absolute top-3 left-1/2 transform -translate-x-1/2"></div>
//                 <div class="w-2 h-0.5 bg-gray-800 absolute top-4 left-1/2 transform -translate-x-1/2"></div>
//               </div>
//             </div>
//             <span class="text-sm text-gray-800 font-medium">SmartWatch</span>
//           </div>

//           <div class="w-32 h-32 border-2 border-red-500 rounded-lg flex flex-col justify-center items-center bg-red-500 cursor-pointer hover:shadow-lg transition-shadow">
//             <div class="mb-4 relative">
//               <div class="w-10 h-7 border-2 border-white rounded relative">
//                 <div class="w-4 h-4 border-2 border-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//                 <div class="w-2 h-1 bg-white absolute -top-1.5 left-2 rounded-sm"></div>
//               </div>
//             </div>
//             <span class="text-sm text-white font-medium">Camera</span>
//           </div>

//           <div class="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-shadow">
//             <div class="mb-4 relative">
//               <div class="w-9 h-5 border-4 border-gray-800 border-b-0 rounded-t-full"></div>
//               <div class="w-3 h-4 border-2 border-gray-800 rounded-md absolute left-0 -bottom-2"></div>
//               <div class="w-3 h-4 border-2 border-gray-800 rounded-md absolute right-0 -bottom-2"></div>
//             </div>
//             <span class="text-sm text-gray-800 font-medium">HeadPhones</span>
//           </div>

//           <div class="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-shadow">
//             <div class="mb-4 relative">
//               <div class="w-11 h-7 border-2 border-gray-800 rounded-lg relative">
//                 <div class="w-1.5 h-1.5 border border-gray-800 rounded-full absolute left-1.5 top-1.5"></div>
//                 <div class="w-1.5 h-1.5 border border-gray-800 rounded-full absolute left-1.5 bottom-1.5"></div>
//                 <div class="w-1 h-1 bg-gray-800 absolute right-3 top-1"></div>
//                 <div class="w-1 h-1 bg-gray-800 absolute right-1.5 top-2"></div>
//                 <div class="w-1 h-1 bg-gray-800 absolute right-4.5 top-2"></div>
//                 <div class="w-1 h-1 bg-gray-800 absolute right-3 bottom-1"></div>
//               </div>
//             </div>
//             <span class="text-sm text-gray-800 font-medium">Gaming</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Catagorie;
/////////////////////////////////////////////////////////////

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Catagorie() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <div className="w-5xl m-auto mt-36 max-w-5xl">
        {/* Section Header */}
        <div className="flex items-start">
          <div className="w-5 h-7 bg-red-600 mt-1 mr-3"></div>
          <div>
            <h1 className="text-red-600 font-semibold">Categories</h1>
            <p className="font-bold text-2xl mt-3">Browse By Category</p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-wrap gap-9 p-5 font-sans justify-center items-center bg-gray-100 mt-8 rounded-lg">
          {/* Phones */}
          <div
            data-aos="fade-up"
            className="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="w-6 h-10 border-2 border-gray-800 rounded mb-4 relative">
              <div className="w-2 h-0.5 bg-gray-800 absolute top-1 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1.5 h-1.5 border border-gray-800 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <span className="text-sm text-gray-800 font-medium">Phones</span>
          </div>

          {/* Computers */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="mb-4">
              <div className="w-10 h-7 border-2 border-gray-800 rounded-sm mb-0.5"></div>
              <div className="w-5 h-2 border-2 border-gray-800 border-t-0 mx-auto rounded-b"></div>
            </div>
            <span className="text-sm text-gray-800 font-medium">Computers</span>
          </div>

          {/* SmartWatch */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="mb-4 relative">
              <div className="w-8 h-10 border-2 border-gray-800 rounded-lg relative">
                <div className="w-1 h-2 bg-gray-800 absolute -top-2.5 left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1 h-2 bg-gray-800 absolute -bottom-2.5 left-1/2 transform -translate-x-1/2"></div>
                <div className="w-4 h-0.5 bg-gray-800 absolute top-2 left-1/2 transform -translate-x-1/2"></div>
                <div className="w-3 h-0.5 bg-gray-800 absolute top-3 left-1/2 transform -translate-x-1/2"></div>
                <div className="w-2 h-0.5 bg-gray-800 absolute top-4 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
            <span className="text-sm text-gray-800 font-medium">
              SmartWatch
            </span>
          </div>

          {/* Camera */}
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="w-32 h-32 border-2 border-red-500 rounded-lg flex flex-col justify-center items-center bg-red-500 cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="mb-4 relative">
              <div className="w-10 h-7 border-2 border-white rounded relative">
                <div className="w-4 h-4 border-2 border-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-2 h-1 bg-white absolute -top-1.5 left-2 rounded-sm"></div>
              </div>
            </div>
            <span className="text-sm text-white font-medium">Camera</span>
          </div>

          {/* HeadPhones */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="mb-4 relative">
              <div className="w-9 h-5 border-4 border-gray-800 border-b-0 rounded-t-full"></div>
              <div className="w-3 h-4 border-2 border-gray-800 rounded-md absolute left-0 -bottom-2"></div>
              <div className="w-3 h-4 border-2 border-gray-800 rounded-md absolute right-0 -bottom-2"></div>
            </div>
            <span className="text-sm text-gray-800 font-medium">
              HeadPhones
            </span>
          </div>

          {/* Gaming */}
          <div
            data-aos="fade-up"
            data-aos-delay="750"
            className="w-32 h-32 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center bg-white cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="mb-4 relative">
              <div className="w-11 h-7 border-2 border-gray-800 rounded-lg relative">
                <div className="w-1.5 h-1.5 border border-gray-800 rounded-full absolute left-1.5 top-1.5"></div>
                <div className="w-1.5 h-1.5 border border-gray-800 rounded-full absolute left-1.5 bottom-1.5"></div>
                <div className="w-1 h-1 bg-gray-800 absolute right-3 top-1"></div>
                <div className="w-1 h-1 bg-gray-800 absolute right-1.5 top-2"></div>
                <div className="w-1 h-1 bg-gray-800 absolute right-4 top-2"></div>
                <div className="w-1 h-1 bg-gray-800 absolute right-3 bottom-1"></div>
              </div>
            </div>
            <span className="text-sm text-gray-800 font-medium">Gaming</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catagorie;
