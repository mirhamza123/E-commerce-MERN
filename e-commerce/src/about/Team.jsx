// import React from "react";
// import { Twitter, Instagram, Linkedin } from "lucide-react";
// // import man1 from "../assets/man1.png";
// // import woman1 from "../assets/woman1.png";
// // import man2 from "../assets/man2.png";
// import man1 from "../assets/man1.png";
// import woman1 from "../assets/woman1.png";
// import man2 from "../assets/man2.png";

// export default function Team() {
//   return (
//     <div className=" bg-white">
//       <div className="w-4xl m-auto mt-36 max-w-5xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//           {/* Tom Cruise */}
//           <div className="group cursor-pointer">
//             {/* Image Container */}
//             <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 h-[430px]">
//               <img
//                 src={man1}
//                 alt="Tom Cruise - Founder & Chairman"
//                 className=" h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300"
//               />

//               {/* Overlay effect on hover */}
//               {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
//             </div>

//             {/* Text Content */}
//             <div className="text-center space-y-2">
//               {/* Name */}
//               <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
//                 Tom Cruise
//               </h3>

//               {/* Role */}
//               <p className="text-gray-600 font-medium">Founder & Chairman</p>

//               {/* Social Media Icons */}
//               <div className="flex justify-center space-x-4 pt-3">
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
//                   aria-label="Tom Cruise's Twitter"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
//                   aria-label="Tom Cruise's Instagram"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
//                   aria-label="Tom Cruise's LinkedIn"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Emma Watson */}
//           <div className="group cursor-pointer">
//             {/* Image Container */}
//             <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100">
//               <img
//                 src={woman1}
//                 alt="Emma Watson - Managing Director"
//                 className=" h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300"
//               />

//               {/* Overlay effect on hover */}
//               {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
//             </div>

//             {/* Text Content */}
//             <div className="text-center space-y-2">
//               {/* Name */}
//               <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
//                 Emma Watson
//               </h3>

//               {/* Role */}
//               <p className="text-gray-600 font-medium">Managing Director</p>

//               {/* Social Media Icons */}
//               <div className="flex justify-center space-x-4 pt-3">
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
//                   aria-label="Emma Watson's Twitter"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
//                   aria-label="Emma Watson's Instagram"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
//                   aria-label="Emma Watson's LinkedIn"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Will Smith */}
//           <div className="group cursor-pointer">
//             {/* Image Container */}
//             <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100">
//               <img
//                 src={man2}
//                 alt="Will Smith - Product Designer"
//                 className=" h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300"
//               />

//               {/* Overlay effect on hover */}
//               {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
//             </div>

//             {/* Text Content */}
//             <div className="text-center space-y-2">
//               {/* Name */}
//               <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
//                 Will Smith
//               </h3>

//               {/* Role */}
//               <p className="text-gray-600 font-medium">Product Designer</p>

//               {/* Social Media Icons */}
//               <div className="flex justify-center space-x-4 pt-3">
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
//                   aria-label="Will Smith's Twitter"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
//                   aria-label="Will Smith's Instagram"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
//                   aria-label="Will Smith's LinkedIn"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
////////////////////////////////////////////////////

import React, { useEffect } from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import man1 from "../assets/man1.png";
import woman1 from "../assets/woman1.png";
import man2 from "../assets/man2.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamMembers = [
    {
      img: man1,
      name: "Tom Cruise",
      role: "Founder & Chairman",
      delay: 0,
    },
    {
      img: woman1,
      name: "Emma Watson",
      role: "Managing Director",
      delay: 200,
    },
    {
      img: man2,
      name: "Will Smith",
      role: "Product Designer",
      delay: 400,
    },
  ];

  return (
    <div className="bg-white">
      <div className="w-4xl m-auto mt-36 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={member.delay}
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 h-[430px]">
                <img
                  src={member.img}
                  alt={`${member.name} - ${member.role}`}
                  className="h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium">{member.role}</p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 pt-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                    aria-label={`${member.name}'s Instagram`}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
