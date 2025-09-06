// import React from "react";
// import { FaStar } from "react-icons/fa";
// import frame from "../assets/Frame 560.png";
// import time from "../assets/time.png";
// import remote from "../assets/remote.png";
// import Product from "../product/Product";
// import Catagorie from "../product/Catagorie";
// import ThisMonth from "../product/ThisMonth";
// import Subbar from "../product/Subbar";
// import AllProduct from "../product/AllProduct";
// import Feature from "../product/Feature";

// function Home() {
//   return (
//     <div>
//       <div className="bg-white text-black px-6 py-4 flex s m-auto max-w-5xl">
//         {/* categories */}
//         <ul className="flex flex-col gap-4 text-sm md:text-base w-[217px] h-full border-r border-r-gray-300 ">
//           <li className="hover:text-blue-400 cursor-pointer">Electronics</li>
//           <li className="hover:text-blue-400 cursor-pointer">Fashion</li>
//           <li className="hover:text-blue-400 cursor-pointer">Home & Kitchen</li>
//           <li className="hover:text-blue-400 cursor-pointer">Sports</li>
//           <li className="hover:text-blue-400 cursor-pointer">Toys</li>
//           <li className="hover:text-blue-400 cursor-pointer">Books</li>
//           <li className="hover:text-blue-400 cursor-pointer">Beauty</li>
//           <li className="hover:text-blue-400 cursor-pointer">Health</li>
//           <li className="hover:text-blue-400 cursor-pointer">Automotive</li>
//         </ul>

//         {/* banner image */}
//         <div className="flex   h-full py-4 ml-4">
//           <img src={frame} alt="Banner" className="w-[850px] h-full" />
//         </div>
//       </div>

//       <Product />
//       <Catagorie />
//       <ThisMonth />
//       <Subbar />
//       <AllProduct />
//       <Feature />
//     </div>
//   );
// }

// export default Home;
/////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import frame from "../assets/Frame 560.png";
import time from "../assets/time.png";
import remote from "../assets/remote.png";
import Product from "../product/Product";
import Catagorie from "../product/Catagorie";
import ThisMonth from "../product/ThisMonth";
import Subbar from "../product/Subbar";
import AllProduct from "../product/AllProduct";
import Feature from "../product/Feature";

// Carousel slides data
const carouselData = [
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=850&h=344&fit=crop&crop=center",
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    buttonText: "Shop Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=850&h=344&fit=crop&crop=center",
    title: "Premium Watches",
    subtitle: "Luxury Collection Available",
    buttonText: "Explore Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=850&h=344&fit=crop&crop=center",
    title: "Smart Home Devices",
    subtitle: "Control Everything Remotely",
    buttonText: "Learn More",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div>
      <div className="bg-white text-black px-6 py-4 flex m-auto max-w-5xl">
        {/* categories */}
        <ul className="flex flex-col gap-4 text-sm md:text-base w-[217px] h-full border-r border-r-gray-300">
          <li className="hover:text-blue-400 cursor-pointer">Electronics</li>
          <li className="hover:text-blue-400 cursor-pointer">Fashion</li>
          <li className="hover:text-blue-400 cursor-pointer">Home & Kitchen</li>
          <li className="hover:text-blue-400 cursor-pointer">Sports</li>
          <li className="hover:text-blue-400 cursor-pointer">Toys</li>
          <li className="hover:text-blue-400 cursor-pointer">Books</li>
          <li className="hover:text-blue-400 cursor-pointer">Beauty</li>
          <li className="hover:text-blue-400 cursor-pointer">Health</li>
          <li className="hover:text-blue-400 cursor-pointer">Automotive</li>
        </ul>

        {/* banner carousel with captions */}
        <div className="flex  h-full py-4 ml-4 relative">
          <div className="relative w-[750px] h-[344px] overflow-hidden rounded-lg shadow-lg">
            {/* Carousel Images */}
            <div
              className="flex transition-transform duration-700 ease-in-out h-full "
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselData.map((slide, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <img
                    src={slide.image}
                    alt="Banner"
                    className="w-full h-full object-cover"
                  />

                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                    <div className="text-white p-8 max-w-md">
                      <div
                        className={`text-lg font-medium mb-2 transform transition-all duration-1000 ${
                          currentSlide === index
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-8 opacity-0"
                        }`}
                        style={{
                          transitionDelay:
                            currentSlide === index ? "0.3s" : "0s",
                        }}
                      >
                        {slide.subtitle}
                      </div>

                      <h1
                        className={`text-3xl md:text-4xl font-bold mb-6 transform transition-all duration-1000 ${
                          currentSlide === index
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-8 opacity-0"
                        }`}
                        style={{
                          transitionDelay:
                            currentSlide === index ? "0.5s" : "0s",
                        }}
                      >
                        {slide.title}
                      </h1>

                      <button
                        className={`px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105 ${
                          currentSlide === index
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-8 opacity-0"
                        }`}
                        style={{
                          transitionDelay:
                            currentSlide === index ? "0.7s" : "0s",
                        }}
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {/* <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-300"
            >
              <FaChevronLeft size={14} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-300"
            >
              <FaChevronRight size={14} />
            </button> */}

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Product />
      <Catagorie />
      <ThisMonth />
      <Subbar />
      <AllProduct />
      <Feature />
    </div>
  );
}

export default Home;
