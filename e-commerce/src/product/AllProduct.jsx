// import React from "react";
// import dog1 from "../assets/dog.jpg";
// import camera from "../assets/camera.png";
// import laptop from "../assets/laptop1.png";
// import cream from "../assets/cream.png";
// import shoe from "../assets/shop.png";
// import gamepad from "../assets/gamepad.png";
// import jacket from "../assets/jacket.png";
// import car from "../assets/car.png";

// import { FaStar } from "react-icons/fa";

// function AllProduct() {
//   return (
//     <div>
//       <div className="w-5xl  m-auto mt-30 max-w-5xl">
//         <div className="flex">
//           <div className="w-5 h-7 bg-red-600 mt-1 m-2"></div>
//           <div>
//             <h1 className="text-red-600">Our Products</h1>
//             <p className="font-bold text-2xl mt-3">Explore Our Products</p>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

//           <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-heart text-gray-600 text-sm"></i>
//               </button>
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-eye text-gray-600 text-sm"></i>
//               </button>
//             </div>
//             <div className=" p-20">
//               <img src={dog1} alt="Breed Dry Dog Food" className="rounded-md" />
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 mb-1">
//                 Breed Dry Dog Food
//               </h3>
//               <p className="text-lg font-bold text-gray-900 mb-2">$100</p>
//               <div className="flex items-center text-sm text-gray-600 star-rating">
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />

//                 {/* <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star empty"></i> */}
//                 <span className="ml-2">(35)</span>
//               </div>
//             </div>
//           </div>

//           {/* Product Card 2: CANON EOS DSLR Camera */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-heart text-gray-600 text-sm"></i>
//               </button>
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-eye text-gray-600 text-sm"></i>
//               </button>
//             </div>
//             <div className="product-image-container p-4">
//               <img
//                 src={camera}
//                 alt="CANON EOS DSLR Camera"
//                 className="w-full h-auto object-contain rounded-md"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 mb-1">
//                 CANON EOS DSLR Camera
//               </h3>
//               <p className="text-lg font-bold text-gray-900 mb-2">$360</p>
//               <div className="flex items-center text-sm text-gray-600 star-rating">
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 {/* <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i> */}
//                 <span className="ml-2">(95)</span>
//               </div>
//               <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
//                 Add to Cart
//               </button>
//             </div>
//           </div>

//           {/* Product Card 3: ASUS FHD Gaming Laptop */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-heart text-gray-600 text-sm"></i>
//               </button>
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-eye text-gray-600 text-sm"></i>
//               </button>
//             </div>
//             <div className="product-image-container p-4">
//               <img
//                 src={laptop}
//                 alt="ASUS FHD Gaming Laptop"
//                 className="w-full h-auto object-contain rounded-md"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 mb-1">
//                 ASUS FHD Gaming Laptop
//               </h3>
//               <p className="text-lg font-bold text-gray-900 mb-2">$700</p>
//               <div className="flex items-center text-sm text-gray-600 star-rating">
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 {/* <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i> */}
//                 <span className="ml-2">(325)</span>
//               </div>
//             </div>
//           </div>

//           {/* Product Card 4: Curology Product Set */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-heart text-gray-600 text-sm"></i>
//               </button>
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-eye text-gray-600 text-sm"></i>
//               </button>
//             </div>
//             <div className="product-image-container p-4">
//               <img
//                 src={cream}
//                 alt="Curology Product Set"
//                 className="w-full h-auto object-contain rounded-md"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 mb-1">
//                 Curology Product Set
//               </h3>
//               <p className="text-lg font-bold text-gray-900 mb-2">$500</p>
//               <div className="flex items-center text-sm text-gray-600 star-rating">
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 {/* <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i> */}
//                 <i className="fas fa-star empty"></i>
//                 <span className="ml-2">(145)</span>
//               </div>
//             </div>
//           </div>

//           {/* Product Card 5: Kids Electric Car */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//               NEW
//             </span>
//             <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-heart text-gray-600 text-sm"></i>
//               </button>
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-eye text-gray-600 text-sm"></i>
//               </button>
//             </div>
//             <div className="product-image-container p-4">
//               <img
//                 src={car}
//                 alt="Kids Electric Car"
//                 className="w-full h-auto object-contain rounded-md"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 mb-1">
//                 Kids Electric Car
//               </h3>
//               <p className="text-lg font-bold text-gray-900 mb-2">$960</p>
//               <div className="flex items-center text-sm text-gray-600 star-rating mb-2">
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 {/* <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i> */}
//                 <span className="ml-2">(85)</span>
//               </div>
//             </div>
//           </div>

//           {/* Product Card 6: Jr. Zoom Soccer Cleats */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-heart text-gray-600 text-sm"></i>
//               </button>
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-eye text-gray-600 text-sm"></i>
//               </button>
//             </div>
//             <div className="product-image-container p-4">
//               <img
//                 src={shoe}
//                 alt="Jr. Zoom Soccer Cleats"
//                 className="w-full h-auto object-contain rounded-md"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 mb-1">
//                 Jr. Zoom Soccer Cleats
//               </h3>
//               <p className="text-lg font-bold text-gray-900 mb-2">$1160</p>
//               <div className="flex items-center text-sm text-gray-600 star-rating mb-2">
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 {/* <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i> */}
//                 <span className="ml-2">(35)</span>
//               </div>
//             </div>
//           </div>

//           {/* Product Card 7: GP11 Shooter USB Gamepad */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//               NEW
//             </span>
//             <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-heart text-gray-600 text-sm"></i>
//               </button>
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-eye text-gray-600 text-sm"></i>
//               </button>
//             </div>
//             <div className="product-image-container p-4">
//               <img
//                 src={gamepad}
//                 alt="GP11 Shooter USB Gamepad"
//                 className="w-full h-auto object-contain rounded-md"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 mb-1">
//                 GP11 Shooter USB Gamepad
//               </h3>
//               <p className="text-lg font-bold text-gray-900 mb-2">$660</p>
//               <div className="flex items-center text-sm text-gray-600 star-rating mb-2">
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 {/* <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star empty"></i> */}
//                 <span className="ml-2">(55)</span>
//               </div>
//             </div>
//           </div>

//           {/* Product Card 8: Quilted Satin Jacket */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-heart text-gray-600 text-sm"></i>
//               </button>
//               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
//                 <i className="far fa-eye text-gray-600 text-sm"></i>
//               </button>
//             </div>
//             <div className="product-image-container p-4">
//               <img
//                 src={jacket}
//                 alt="Quilted Satin Jacket"
//                 className="w-full h-auto object-contain rounded-md"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 mb-1">
//                 Quilted Satin Jacket
//               </h3>
//               <p className="text-lg font-bold text-gray-900 mb-2">$660</p>
//               <div className="flex items-center text-sm text-gray-600 star-rating mb-2">
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 <FaStar size={14} />
//                 {/* <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star empty"></i> */}
//                 <span className="ml-2">(55)</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* View All Products Button */}
//         <div className="flex justify-center mt-10">
//           <button className="px-8 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition shadow-lg">
//             View All Products
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllProduct;
//////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import { FaStar, FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";

// Using your original image imports - replace these with actual imports in your project
import dog1 from "../assets/dog.jpg";
import camera from "../assets/camera.png";
import laptop from "../assets/laptop1.png";
import cream from "../assets/cream.png";
import shoe from "../assets/shop.png";
import gamepad from "../assets/gamepad.png";
import jacket from "../assets/jacket.png";
import car from "../assets/car.png";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    rating: 4,
    reviews: 35,
    image: dog1,
    isNew: false,
    hasAddToCart: false,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: 4,
    reviews: 95,
    image: camera,
    isNew: false,
    hasAddToCart: true,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 4,
    reviews: 325,
    image: laptop,
    isNew: false,
    hasAddToCart: false,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    rating: 4,
    reviews: 145,
    image: cream,
    isNew: false,
    hasAddToCart: false,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    rating: 4,
    reviews: 85,
    image: car,
    isNew: true,
    hasAddToCart: false,
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 4,
    reviews: 35,
    image: shoe,
    isNew: false,
    hasAddToCart: false,
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4,
    reviews: 55,
    image: gamepad,
    isNew: true,
    hasAddToCart: false,
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    rating: 4,
    reviews: 55,
    image: jacket,
    isNew: false,
    hasAddToCart: false,
  },
];

function AllProduct() {
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (productId) => {
    const newCart = new Set(cart);
    newCart.add(productId);
    setCart(newCart);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        size={14}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 w-5xl  m-auto mt-25 max-w-5xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Animation */}
        <div className="flex items-start mb-12 transform transition-all duration-700 hover:scale-105">
          <div className="w-5 h-7 bg-red-600 mt-1 mr-4 rounded-sm shadow-lg animate-pulse"></div>
          <div>
            <h1 className="text-red-600 font-medium text-lg tracking-wide uppercase">
              Our Products
            </h1>
            <p className="font-bold text-3xl mt-2 text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Explore Our Products
            </p>
          </div>
        </div>

        {/* Products Grid with Staggered Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* New Badge */}
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-lg animate-bounce">
                  NEW
                </span>
              )}

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-10">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 ${
                    favorites.has(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-600 hover:bg-red-50"
                  }`}
                >
                  <FaHeart size={16} />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 text-gray-600">
                  <FaEye size={16} />
                </button>
              </div>

              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg group-hover:text-red-600 transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  ${product.price}
                </p>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1 mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="font-medium">({product.reviews})</span>
                </div>

                {/* Add to Cart Button */}
                {product.hasAddToCart && (
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={cart.has(product.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                      cart.has(product.id)
                        ? "bg-green-500 text-white cursor-not-allowed"
                        : "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg"
                    }`}
                  >
                    <FaShoppingCart size={16} />
                    <span>
                      {cart.has(product.id) ? "Added to Cart" : "Add to Cart"}
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center mt-16">
          <button className="px-12 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
            View All Products
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default AllProduct;
