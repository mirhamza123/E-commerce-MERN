// // import React from "react";
// // import { FaTruck, FaHeadset, FaUndo } from "react-icons/fa";
// // import { FaPlaystation } from "react-icons/fa";
// // import { FaFemale } from "react-icons/fa";
// // import { FaSpeakerDeck } from "react-icons/fa";
// // import { FaBottleWater } from "react-icons/fa6";
// // import ps5 from "../assets/ps5.png";
// // import woman from "../assets/woman.jpg";
// // import speaker from "../assets/spraker.png";
// // import perfum from "../assets/perfum.png";

// // const Feature = () => {
// //   // A reusable Card component for consistent styling and hover effects.
// //   const Card = ({ children, className = "" }) => (
// //     <div
// //       className={`relative group cursor-pointer overflow-hidden transform transition-transform duration-300 hover:translate-y-[-4px] ${className}`}
// //     >
// //       {children}
// //     </div>
// //   );

// //   // A reusable Button component for consistent link/button styling.
// //   const Button = ({ children }) => (
// //     <button className="text-white underline hover:no-underline transition-all transform active:scale-95 duration-150">
// //       {children}
// //     </button>
// //   );

// //   return (
// //     <div className="max-w-6xl mx-auto p-6">
// //       {/* Featured Badge and Title */}
// //       <div className="mb-8">
// //         <div className="inline-block bg-red-500 text-white px-4 py-2 text-sm font-medium mb-4 rounded-md">
// //           Featured
// //         </div>
// //         <h1 className="text-4xl font-bold text-gray-900">New Arrival</h1>
// //       </div>

// //       {/* Product Grid */}
// //       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
// //         {/* PlayStation 5 - Large Card */}
// //         <Card className="lg:col-span-6 bg-black text-white rounded-lg">
// //           <div className="p-8 h-80 flex flex-col justify-between">
// //             <div className="flex-1 flex items-center justify-center">
// //               <div className="text-center relative">
// //                 {/* Placeholder for PS5 image */}
// //                 <img src={ps5} alt="PlayStation 5" className="  " />

// //                 <div className="absolute top-75">
// //                   <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
// //                   <p className="text-gray-300 text-sm mb-4">
// //                     Black and White version of the PS5 <br />
// //                     coming out on sale.
// //                   </p>
// //                   <Button>Shop Now</Button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </Card>

// //         {/* Right Column */}
// //         <div className="lg:col-span-6 space-y-6">
// //           {/* Women's Collections */}
// //           <Card className="bg-black text-white rounded-lg">
// //             <div className="p-8 h-56 flex items-end relative">
// //               <div className="absolute right-4 top-4">
// //                 {/* Placeholder for woman image */}
// //                 <img
// //                   src="https://placehold.co/200x200/121212/ffffff?text=Woman+Placeholder"
// //                   alt="Women's Collection"
// //                   className="w-full h-auto object-cover rounded-md"
// //                 />
// //               </div>
// //               <div>
// //                 <h3 className="text-xl font-bold mb-2">Women's Collections</h3>
// //                 <p className="text-gray-300 text-sm mb-4">
// //                   Featured woman collections that give you another vibe.
// //                 </p>
// //                 <Button>Shop Now</Button>
// //               </div>
// //             </div>
// //           </Card>

// //           {/* Bottom Row */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //             {/* Speakers */}
// //             <Card className="bg-black text-white rounded-lg">
// //               <div className="p-6 h-56 flex flex-col justify-between">
// //                 <div className="flex-1 flex items-center justify-center">
// //                   {/* Placeholder for speaker image */}
// //                   <img
// //                     src="https://placehold.co/150x150/121212/ffffff?text=Speakers+Placeholder"
// //                     alt="Speakers"
// //                     className="w-full h-auto object-cover"
// //                   />
// //                 </div>
// //                 <div>
// //                   <h3 className="text-lg font-bold mb-1">Speakers</h3>
// //                   <p className="text-gray-300 text-xs mb-3">
// //                     Amazon wireless speakers
// //                   </p>
// //                   <Button>Shop Now</Button>
// //                 </div>
// //               </div>
// //             </Card>

// //             {/* Perfume */}
// //             <Card className="bg-black text-white rounded-lg">
// //               <div className="p-6 h-56 flex flex-col justify-between">
// //                 <div className="flex-1 flex items-center justify-center">
// //                   {/* Placeholder for perfume image */}
// //                   <img
// //                     src="https://placehold.co/150x150/121212/ffffff?text=Perfume+Placeholder"
// //                     alt="Perfume"
// //                     className="w-full h-auto object-cover"
// //                   />
// //                 </div>
// //                 <div>
// //                   <h3 className="text-lg font-bold mb-1">Perfume</h3>
// //                   <p className="text-gray-300 text-xs mb-3">
// //                     GUCCI INTENSE OUD EDP
// //                   </p>
// //                   <Button>Shop Now</Button>
// //                 </div>
// //               </div>
// //             </Card>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Service Features */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {/* Free Delivery */}
// //         <div className="text-center">
// //           <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
// //             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
// //               <FaTruck className="w-4 h-4 text-white" />
// //             </div>
// //           </div>
// //           <h3 className="font-bold text-lg mb-2">FREE AND FAST DELIVERY</h3>
// //           <p className="text-gray-600 text-sm">
// //             Free delivery for all orders over $140
// //           </p>
// //         </div>

// //         {/* Customer Service */}
// //         <div className="text-center">
// //           <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
// //             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
// //               <FaHeadset className="w-4 h-4 text-white" />
// //             </div>
// //           </div>
// //           <h3 className="font-bold text-lg mb-2">24/7 CUSTOMER SERVICE</h3>
// //           <p className="text-gray-600 text-sm">
// //             Friendly 24/7 customer support
// //           </p>
// //         </div>

// //         {/* Money Back */}
// //         <div className="text-center">
// //           <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
// //             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
// //               <FaUndo className="w-4 h-4 text-white" />
// //             </div>
// //           </div>
// //           <h3 className="font-bold text-lg mb-2">MONEY BACK GUARANTEE</h3>
// //           <p className="text-gray-600 text-sm">
// //             We return money within 30 days
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Feature;
// import React from "react";
// import { FaTruck, FaHeadset, FaUndo } from "react-icons/fa";
// import { FaPlaystation } from "react-icons/fa";
// import { FaFemale } from "react-icons/fa";
// import { FaSpeakerDeck } from "react-icons/fa";
// import { FaBottleWater } from "react-icons/fa6";
// import ps5 from "../assets/ps5.png";
// import woman from "../assets/woman.jpg";
// import speaker from "../assets/spraker.png";
// import perfum from "../assets/perfum.png";

// const Feature = () => {
//   // A reusable Card component for consistent styling and hover effects.
//   const Card = ({ children, className = "" }) => (
//     <div
//       className={`relative group cursor-pointer overflow-hidden transform transition-transform duration-300 hover:translate-y-[-4px] ${className}`}
//     >
//       {children}
//     </div>
//   );

//   // A reusable Button component for consistent link/button styling.
//   const Button = ({ children }) => (
//     <button className="text-white underline hover:no-underline transition-all transform active:scale-95 duration-150">
//       {children}
//     </button>
//   );

//   return (
//     <div className="w-5xl  m-auto mt-30 max-w-5xl">
//       {/* Featured Badge and Title */}
//       <div className="flex">
//         <div className="w-5 h-7 bg-red-600 mt-1 m-2"></div>
//         <div>
//           <h1 className="text-red-600">Feature</h1>
//           <p className="font-bold text-2xl mt-4">New Arrival</p>
//         </div>
//       </div>
//       {/* <div className="mb-8">
//         <div className="inline-block bg-red-500 text-white px-4 py-2 text-sm font-medium mb-4 rounded-md">
//           Featured
//         </div>
//         <h1 className="text-4xl font-bold text-gray-900">New Arrival</h1>
//       </div> */}

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 mt-15">
//         {/* PlayStation 5 - Large Card */}
//         <Card className="lg:col-span-6 bg-black text-white rounded-lg">
//           <div className="p-8 h-80 flex flex-col justify-between">
//             <div className="flex-1 flex items-center justify-center">
//               <div className="text-center relative">
//                 {/* Placeholder for PS5 image */}
//                 <img src={ps5} alt="PlayStation 5" className="" />

//                 <div className="absolute top-75">
//                   <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
//                   <p className="text-gray-300 text-sm mb-4">
//                     Black and White version of the PS5 <br />
//                     coming out on sale.
//                   </p>
//                   <Button>Shop Now</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Card>

//         {/* Right Column */}
//         <div className="lg:col-span-6 space-y-6">
//           {/* Women's Collections */}
//           <Card className="bg-black text-white rounded-lg">
//             <div className="p-8 h-56 flex items-end relative">
//               <div className="absolute right-4 top-2">
//                 {/* Placeholder for woman image */}
//                 <img
//                   src={woman}
//                   alt="Women's Collection"
//                   className="w-full h-auto object-cover rounded-md"
//                 />
//               </div>
//               <div className="absolute ">
//                 <h3 className="text-xl font-bold mb-2">Women's Collections</h3>
//                 <p className="text-gray-300 text-sm mb-4">
//                   Featured woman collections that give you another vibe.
//                 </p>
//                 <Button>Shop Now</Button>
//               </div>
//             </div>
//           </Card>

//           {/* Bottom Row */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {/* Speakers */}
//             <Card className="bg-black text-white rounded-lg">
//               <div className="p-6 h-56 flex flex-col justify-between">
//                 <div className="flex-1 flex items-center justify-center relative">
//                   {/* Placeholder for speaker image */}
//                   <img
//                     src={speaker}
//                     alt="Speakers"
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>
//                 <div className="absolute top-32">
//                   <h3 className="text-lg font-bold mb-1">Speakers</h3>
//                   <p className="text-gray-300 text-xs mb-3">
//                     Amazon wireless speakers
//                   </p>
//                   <Button>Shop Now</Button>
//                 </div>
//               </div>
//             </Card>

//             {/* Perfume */}
//             <Card className="bg-black text-white rounded-lg">
//               <div className="p-6 h-56 flex flex-col justify-between">
//                 <div className="flex-1 flex items-center justify-center relative">
//                   {/* Placeholder for perfume image */}
//                   <img
//                     src={perfum}
//                     alt="Perfume"
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>
//                 <div className="absolute top-30">
//                   <h3 className="text-lg font-bold mb-1">Perfume</h3>
//                   <p className="text-gray-300 text-xs mb-3">
//                     GUCCI INTENSE OUD EDP
//                   </p>
//                   <Button>Shop Now</Button>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>

//       {/* Service Features */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Free Delivery */}
//         <div className="text-center">
//           <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
//             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
//               <FaTruck className="w-4 h-4 text-white" />
//             </div>
//           </div>
//           <h3 className="font-bold text-lg mb-2">FREE AND FAST DELIVERY</h3>
//           <p className="text-gray-600 text-sm">
//             Free delivery for all orders over $140
//           </p>
//         </div>

//         {/* Customer Service */}
//         <div className="text-center">
//           <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
//             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
//               <FaHeadset className="w-4 h-4 text-white" />
//             </div>
//           </div>
//           <h3 className="font-bold text-lg mb-2">24/7 CUSTOMER SERVICE</h3>
//           <p className="text-gray-600 text-sm">
//             Friendly 24/7 customer support
//           </p>
//         </div>

//         {/* Money Back */}
//         <div className="text-center">
//           <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
//             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
//               <FaUndo className="w-4 h-4 text-white" />
//             </div>
//           </div>
//           <h3 className="font-bold text-lg mb-2">MONEY BACK GUARANTEE</h3>
//           <p className="text-gray-600 text-sm">
//             We return money within 30 days
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feature;
////////////////////////////////////////////////////////////////

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaTruck, FaHeadset, FaUndo } from "react-icons/fa";
import ps5 from "../assets/ps5.png";
import woman from "../assets/woman.jpg";
import speaker from "../assets/spraker.png";
import perfum from "../assets/perfum.png";

const Feature = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const Card = ({ children, className = "", aos, delay }) => (
    <div
      className={`relative group cursor-pointer overflow-hidden transform transition-transform duration-300 hover:translate-y-[-4px] ${className}`}
      data-aos={aos}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );

  const Button = ({ children }) => (
    <button className="text-white underline hover:no-underline transition-all transform active:scale-95 duration-150">
      {children}
    </button>
  );

  return (
    <div className="w-5xl m-auto mt-30 max-w-5xl">
      {/* Featured Badge and Title */}
      <div className="flex mb-10" data-aos="fade-up">
        <div className="w-5 h-7 bg-red-600 mt-1 m-2"></div>
        <div>
          <h1 className="text-red-600">Feature</h1>
          <p className="font-bold text-2xl mt-4">New Arrival</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 mt-15">
        {/* PlayStation 5 */}
        <Card
          className="lg:col-span-6 bg-black text-white rounded-lg"
          aos="fade-right"
        >
          <div className="p-8 h-80 flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center relative">
                <img src={ps5} alt="PlayStation 5" />
                <div className="absolute top-75">
                  <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Black and White version of the PS5 <br />
                    coming out on sale.
                  </p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Women's Collections */}
          <Card className="bg-black text-white rounded-lg" aos="fade-left">
            <div className="p-8 h-56 flex items-end relative">
              <div className="absolute right-4 top-2">
                <img
                  src={woman}
                  alt="Women's Collection"
                  className="rounded-md"
                />
              </div>
              <div className="absolute">
                <h3 className="text-xl font-bold mb-2">Women's Collections</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Featured woman collections that give you another vibe.
                </p>
                <Button>Shop Now</Button>
              </div>
            </div>
          </Card>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Speakers */}
            <Card
              className="bg-black text-white rounded-lg"
              aos="zoom-in-up"
              delay="100"
            >
              <div className="p-6 h-56 flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center relative">
                  <img
                    src={speaker}
                    alt="Speakers"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute top-32">
                  <h3 className="text-lg font-bold mb-1">Speakers</h3>
                  <p className="text-gray-300 text-xs mb-3">
                    Amazon wireless speakers
                  </p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </Card>

            {/* Perfume */}
            <Card
              className="bg-black text-white rounded-lg"
              aos="zoom-in-up"
              delay="300"
            >
              <div className="p-6 h-56 flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center relative">
                  <img
                    src={perfum}
                    alt="Perfume"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute top-30">
                  <h3 className="text-lg font-bold mb-1">Perfume</h3>
                  <p className="text-gray-300 text-xs mb-3">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="text-center" data-aos="fade-up">
          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <FaTruck className="w-4 h-4 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-600 text-sm">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <FaHeadset className="w-4 h-4 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-600 text-sm">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <FaUndo className="w-4 h-4 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-600 text-sm">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
