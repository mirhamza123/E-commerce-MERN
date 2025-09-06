// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import assets from "../assets/user.png";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";

// function Navbar() {
//   const [Token, setToken] = useState(true);
//   return (
//     <nav className="bg-white-900 text-black px-6 py-4 flex items-center justify-between shadow-md m-auto max-w-5xl border-b border-gray-300">
//       {/* Logo */}
//       <NavLink to="/">
//         <div className="text-[24px] font-bold  w-[118px] h-[240x]">
//           Exclusive
//         </div>
//       </NavLink>

//       {/* Navigation Links */}
//       <ul className="flex gap-[68px] text-sm md:text-base ml-30">
//         <NavLink to="/">
//           <li className="hover:text-blue-400 cursor-pointer">Home</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="hover:text-blue-400 cursor-pointer">About</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="hover:text-blue-400 cursor-pointer">Contact</li>
//         </NavLink>
//       </ul>
//       <div className="flex items-center ml-27 gap-6">
//         <div className="flex items-center gap-2 relative">
//           <input type="text" placeholder="search" size="20" />
//           <CiSearch className=" top-1 right-1  absolute font-medium" />
//         </div>
//         <NavLink to="/addcard">
//           <FiShoppingCart />
//         </NavLink>
//       </div>
//       {/* Right section: Search + Profile */}
//       <div>
//         {Token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={assets} alt="" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className=" flex flex-col roounded min-w-48 p-4 gap-4 bg-stone-200">
//                 <p className="hover:text-black cursor-pointer">
//                   Manage My Account
//                 </p>
//                 <p className="hover:text-black cursor-pointer">My Order</p>
//                 <p className="hover:text-black cursor-pointer">My Reviews</p>
//                 <p
//                   onClick={() => setToken()}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button className=" text-black  md:px-3 md:py-2 md:text-base  cursor-pointer hover:bg-zinc-300 transition-all duration-300 shadow-md">
//             <NavLink to="/signup">Sign up</NavLink>
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
///////////////////////////////////////////////////

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import assets from "../assets/user.png";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";

// function Navbar() {
//   const [Token, setToken] = useState(true);
//   return (
//     <nav className="sticky top-0 z-50 bg-white text-black px-6 py-4 flex items-center justify-between shadow-md m-auto max-w-5xl border-b border-gray-300">
//       {/* Logo */}
//       <NavLink to="/">
//         <div className="text-[24px] font-bold  w-[118px] h-[240x]">
//           Exclusive
//         </div>
//       </NavLink>

//       {/* Navigation Links */}
//       <ul className="flex gap-[68px] text-sm md:text-base ml-30">
//         <NavLink to="/">
//           <li className="hover:text-blue-400 cursor-pointer">Home</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="hover:text-blue-400 cursor-pointer">About</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="hover:text-blue-400 cursor-pointer">Contact</li>
//         </NavLink>
//       </ul>
//       <div className="flex items-center ml-27 gap-6">
//         <div className="flex items-center gap-2 relative">
//           <input type="text" placeholder="search" size="20" />
//           <CiSearch className=" top-1 right-1  absolute font-medium" />
//         </div>
//         <NavLink to="/addcard">
//           <FiShoppingCart />
//         </NavLink>
//       </div>
//       {/* Right section: Search + Profile */}
//       <div>
//         {Token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={assets} alt="" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className=" flex flex-col roounded min-w-48 p-4 gap-4 bg-stone-200">
//                 <p className="hover:text-black cursor-pointer">
//                   Manage My Account
//                 </p>
//                 <p className="hover:text-black cursor-pointer">My Order</p>
//                 <p className="hover:text-black cursor-pointer">My Reviews</p>
//                 <p
//                   onClick={() => setToken()}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button className=" text-black  md:px-3 md:py-2 md:text-base  cursor-pointer hover:bg-zinc-300 transition-all duration-300 shadow-md">
//             <NavLink to="/signup">Sign up</NavLink>
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

///////////////////////////////////////////////////////////////////

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import assets from "../assets/user.png";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";

// function Navbar() {
//   const [Token, setToken] = useState(true);
//   return (
//     <nav className="sticky top-0 z-50 bg-white text-black px-6 py-4 flex items-center justify-between shadow-md m-auto max-w-5xl border-b border-gray-300">
//       {/* Logo */}
//       <NavLink to="/">
//         <div className="text-[24px] font-bold  w-[118px] h-[240x]">
//           Exclusive
//         </div>
//       </NavLink>

//       {/* Navigation Links */}
//       <ul className="flex gap-[68px] text-sm md:text-base ml-30">
//         <NavLink to="/">
//           <li className="hover:text-blue-400 cursor-pointer">Home</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="hover:text-blue-400 cursor-pointer">About</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="hover:text-blue-400 cursor-pointer">Contact</li>
//         </NavLink>
//       </ul>
//       <div className="flex items-center ml-27 gap-6">
//         <div className="flex items-center gap-2 relative">
//           <input type="text" placeholder="search" size="20" />
//           <CiSearch className=" top-1 right-1  absolute font-medium" />
//         </div>
//         <NavLink to="/addcard">
//           <FiShoppingCart />
//         </NavLink>
//       </div>
//       {/* Right section: Search + Profile */}
//       <div>
//         {Token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={assets} alt="" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className=" flex flex-col roounded min-w-48 p-4 gap-4 bg-stone-200">
//                 <p className="hover:text-black cursor-pointer">
//                   Manage My Account
//                 </p>
//                 <p className="hover:text-black cursor-pointer">My Order</p>
//                 <p className="hover:text-black cursor-pointer">My Reviews</p>
//                 <p
//                   onClick={() => setToken()}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button className="text-black md:px-3 md:py-2 md:text-base cursor-pointer hover:bg-zinc-300 active:bg-zinc-400 transition-all duration-300 shadow-md">
//             <NavLink
//               to="/signup"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-500 font-semibold" : ""
//               }
//             >
//               Sign up
//             </NavLink>
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

//////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import assets from "../assets/user.png";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";

// function Navbar() {
//   const navigate = useNavigate();
//   const [Token, setToken] = useState(null);

//   // Check localStorage token on page load + when token changes
//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     setToken(storedToken); // agar token mila to set ho jayega
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white text-black px-6 py-4 flex items-center justify-between shadow-md m-auto max-w-5xl border-b border-gray-300">
//       {/* Logo */}
//       <NavLink to="/">
//         <div className="text-[24px] font-bold">Exclusive</div>
//       </NavLink>

//       {/* Links */}
//       <ul className="flex gap-[68px] text-sm md:text-base ml-30">
//         <NavLink to="/">
//           <li className="hover:text-blue-400 cursor-pointer">Home</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="hover:text-blue-400 cursor-pointer">About</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="hover:text-blue-400 cursor-pointer">Contact</li>
//         </NavLink>
//       </ul>

//       {/* Search + Cart */}
//       <div className="flex items-center ml-27 gap-6">
//         <div className="flex items-center gap-2 relative">
//           <input type="text" placeholder="search" size="20" />
//           <CiSearch className="top-1 right-1 absolute font-medium" />
//         </div>
//         <NavLink to="/addcard">
//           <FiShoppingCart />
//         </NavLink>
//       </div>

//       {/* Right Section */}
//       <div>
//         {Token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 h-8 rounded-full" src={assets} alt="profile" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className="flex flex-col rounded min-w-48 p-4 gap-4 bg-stone-200">
//                 <p className="hover:text-black cursor-pointer">
//                   Manage My Account
//                 </p>
//                 <p className="hover:text-black cursor-pointer">My Order</p>
//                 <p className="hover:text-black cursor-pointer">My Reviews</p>
//                 <p
//                   onClick={handleLogout}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button className="text-black md:px-3 md:py-2 md:text-base cursor-pointer hover:bg-zinc-300 active:bg-zinc-400 transition-all duration-300 shadow-md">
//             <NavLink
//               to="/signup"
//               className={({ isActive }) =>
//                 isActive ? "text-blue-500 font-semibold" : ""
//               }
//             >
//               Sign up
//             </NavLink>
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

/////////////////////////////////////////////////

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import assets from "../assets/user.png";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="sticky top-0 z-50 bg-white text-black px-6 py-4 flex items-center justify-between shadow-md m-auto max-w-5xl border-b border-gray-300">
      {/* Logo */}
      <NavLink to="/">
        <div className="text-[24px] font-bold">Exclusive</div>
      </NavLink>

      {/* Links */}
      <ul className="flex gap-[68px] text-sm md:text-base ml-30">
        <NavLink to="/">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
        </NavLink>
        <NavLink to="/about">
          <li className="hover:text-blue-400 cursor-pointer">About</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </NavLink>
      </ul>

      {/* Search + Cart */}
      <div className="flex items-center ml-27 gap-6">
        <div className="flex items-center gap-2 relative">
          <input type="text" placeholder="search" size="20" />
          <CiSearch className="top-1 right-1 absolute font-medium" />
        </div>
        <NavLink to="/addcard">
          <FiShoppingCart />
        </NavLink>
      </div>

      {/* Right Section */}
      <div>
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 h-8 rounded-full" src={assets} alt="profile" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="flex flex-col rounded min-w-48 p-4 gap-4 bg-stone-200">
                <p className="hover:text-black cursor-pointer">
                  Manage My Account
                </p>
                <p className="hover:text-black cursor-pointer">My Order</p>
                <p className="hover:text-black cursor-pointer">My Reviews</p>
                <p
                  onClick={() => {
                    logout();
                    localStorage.clear();
                    navigate("/login");
                  }}
                  className=" pl-0 hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button className="text-black md:px-3 md:py-2 md:text-base cursor-pointer hover:bg-zinc-300 active:bg-zinc-400 transition-all duration-300 shadow-md">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : ""
              }
            >
              Sign up
            </NavLink>
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
