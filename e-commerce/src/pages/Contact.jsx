import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Message sent successfully!");
  };

  return (
    <div className="w-5xl  m-auto mt-25 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Contact Information */}
        <div className="bg-white   p-6">
          {/* Call To Us Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Call To Us
              </h3>
            </div>
            <p className="text-gray-600 mb-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-800">Phone: +8801611112222</p>
          </div>

          <hr className="border-gray-300 mb-8" />

          {/* Write To Us Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Write To US
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-800 mb-2">Emails: customer@exclusive.com</p>
            <p className="text-gray-800">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className=" p-6 shadow-sm">
          <div className="space-y-8">
            {/* Top Row - Name, Email, Phone */}
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-5 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={8}
              className="w-full px-4 py-3 bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 resize-none"
            />

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
