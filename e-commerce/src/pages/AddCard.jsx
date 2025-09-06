import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&h=200&fit=crop",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 0) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value) || 0;
    updateQuantity(id, quantity);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const applyCoupon = () => {
    console.log("Applying coupon:", couponCode);
    // Handle coupon application logic here
    alert(`Coupon "${couponCode}" applied!`);
  };

  const processCheckout = () => {
    console.log("Processing checkout with items:", cartItems);
    alert("Proceeding to checkout!");
  };

  return (
    <div className="w-5xl  m-auto mt-25 max-w-5xl">
      {/* Cart Table */}
      <div className="mb-8">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 pb-4 border-b border-gray-200 text-gray-700 font-medium">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mt-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 gap-4 items-center py-4 border-b border-gray-100"
            >
              {/* Product */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <button className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    ×
                  </button>
                </div>
                <span className="text-gray-800">{item.name}</span>
              </div>

              {/* Price */}
              <div className="text-gray-800">${item.price}</div>

              {/* Quantity */}
              <div className="flex items-center">
                <div className="flex items-center border border-gray-300 rounded">
                  <input
                    type="number"
                    value={item.quantity.toString().padStart(2, "0")}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    className="w-12 px-2 py-1 text-center border-none focus:outline-none"
                    min="0"
                  />
                  <div className="flex flex-col border-l border-gray-300">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 hover:bg-gray-100 border-b border-gray-300"
                    >
                      <ChevronUp className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 hover:bg-gray-100"
                    >
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtotal */}
              <div className="text-gray-800">${item.price * item.quantity}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-8">
        <button className="font-bold px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
          Return To Shop
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
          Update Cart
        </button>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Coupon Section */}
        <div className=" gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            onClick={applyCoupon}
            className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border border-gray-400 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-gray-800">${subtotal}</span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-700">Shipping:</span>
              <span className="text-gray-800">Free</span>
            </div>

            <div className="flex justify-between items-center pt-3">
              <span className="text-gray-700 font-semibold">Total:</span>
              <span className="text-gray-800 font-semibold">${total}</span>
            </div>
          </div>

          <button
            onClick={processCheckout}
            className="w-full mt-6 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Process to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
