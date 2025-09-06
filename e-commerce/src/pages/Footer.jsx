import React, { useState } from "react";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-6 mt-20">
      <div className="w-5xl  m-auto mt-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Exclusive Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Exclusive</h3>
            <h4 className="text-lg font-semibold mb-3">Subscribe</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get 10% off your first order
            </p>

            <div className="flex">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-gray-500 rounded-l px-3 py-2 text-sm focus:outline-none focus:border-white transition-colors"
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-0 top-0 h-full px-3 hover:bg-gray-800 transition-colors rounded-r"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p className="mt-3">exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Download App</h3>
            <p className="text-gray-400 text-xs mb-3">
              Save $3 with App New User Only
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
