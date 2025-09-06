/////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import phone from "../assets/signup.jpg";
// import { NavLink, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     emailOrPhone: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   // ✅ form reset on mount (jab bhi Signup page khulega, fields blank ho jayengi)
//   useEffect(() => {
//     setFormData({
//       name: "",
//       emailOrPhone: "",
//       password: "",
//     });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     if (!formData.emailOrPhone.trim()) {
//       newErrors.emailOrPhone = "Email or Phone Number is required";
//     } else {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       const phoneRegex = /^\+?[\d\s-()]{10,}$/;
//       if (
//         !emailRegex.test(formData.emailOrPhone) &&
//         !phoneRegex.test(formData.emailOrPhone)
//       ) {
//         newErrors.emailOrPhone = "Please enter a valid email or phone number";
//       }
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
//       newErrors.password =
//         "Password must contain uppercase, lowercase, and number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleCreateAccount = async () => {
//     if (!validateForm()) return;

//     setIsLoading(true);
//     setErrors({});

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         localStorage.setItem("token", data.data.token);
//         localStorage.setItem("user", JSON.stringify(data.data.user));

//         alert(
//           `Account created successfully!\nWelcome, ${data.data.user.name}!`
//         );

//         // ✅ Reset after success
//         setFormData({
//           name: "",
//           emailOrPhone: "",
//           password: "",
//         });

//         navigate("/");
//       } else {
//         if (response.status === 409) {
//           setErrors({ emailOrPhone: data.message });
//         } else {
//           alert(data.message || "Failed to create account");
//         }
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       alert("Network error. Please check your connection and try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleSignUp = () => {
//     alert("Google Sign Up functionality would be implemented here");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex w-5xl  m-auto mt-10 max-w-5xl">
//       {/* Left Side */}
//       <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
//         <img
//           src={phone}
//           alt="signup"
//           className="w-[500px] h-full object-cover object-center"
//         />
//       </div>

//       {/* Right Side */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//               Create an account
//             </h1>
//             <p className="text-gray-600">Enter your details below</p>
//           </div>

//           <div className="space-y-6">
//             {/* Name */}
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Name"
//                 className={`w-full pb-3 border-0 border-b-2 bg-transparent focus:outline-none focus:border-red-500 ${
//                   errors.name ? "border-red-500" : "border-gray-200"
//                 }`}
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//               )}
//             </div>

//             {/* Email / Phone */}
//             <div>
//               <input
//                 type="text"
//                 name="emailOrPhone"
//                 value={formData.emailOrPhone}
//                 onChange={handleInputChange}
//                 placeholder="Email or Phone Number"
//                 className={`w-full pb-3 border-0 border-b-2 bg-transparent focus:outline-none focus:border-red-500 ${
//                   errors.emailOrPhone ? "border-red-500" : "border-gray-200"
//                 }`}
//               />
//               {errors.emailOrPhone && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.emailOrPhone}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 placeholder="Password"
//                 className={`w-full pb-3 pr-10 border-0 border-b-2 bg-transparent focus:outline-none focus:border-red-500 ${
//                   errors.password ? "border-red-500" : "border-gray-200"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-0 bottom-3 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? (
//                   <EyeOff className="w-5 h-5" />
//                 ) : (
//                   <Eye className="w-5 h-5" />
//                 )}
//               </button>
//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//               )}
//             </div>

//             {/* Create Account */}
//             <button
//               onClick={handleCreateAccount}
//               disabled={isLoading}
//               className={`w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white py-3 rounded-md font-medium transition-colors`}
//             >
//               {isLoading ? "Creating Account..." : "Create Account"}
//             </button>

//             {/* Google Signup */}
//             <button
//               onClick={handleGoogleSignUp}
//               disabled={isLoading}
//               className="w-full border border-gray-300 text-gray-700 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center disabled:opacity-50"
//             >
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                 <path
//                   fill="#4285F4"
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 />
//                 <path
//                   fill="#34A853"
//                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                 />
//                 <path
//                   fill="#FBBC05"
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                 />
//                 <path
//                   fill="#EA4335"
//                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                 />
//               </svg>
//               Sign up with Google
//             </button>

//             {/* Login link */}
//             <div className="text-center">
//               <span className="text-gray-600">Already have account? </span>
//               <NavLink
//                 to="/login"
//                 className="text-gray-900 font-medium hover:underline"
//               >
//                 Log in
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
/////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import phone from "../assets/signup.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Account created successfully ✅");

        // ✅ Clear form
        setFormData({ name: "", emailOrPhone: "", password: "" });

        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex max-w-5xl w-full bg-white overflow-hidden">
        {/* Left Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={phone}
            alt="Illustration"
            className="w-[500px] h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex-1 p-12 flex flex-col justify-center max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create an account
          </h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 pb-3 border-gray-200"
            />

            {/* Email or Phone */}
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone Number"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="w-full border-b-2 pb-3 border-gray-200"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b-2 pb-3 pr-10 border-gray-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-3"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-500 text-white py-3 w-full rounded"
            >
              {isLoading ? "Creating..." : "Create Account"}
            </button>

            <div className="text-center">
              <span className="text-gray-600">Already have account? </span>
              <NavLink to="/login" className="text-gray-900 font-medium">
                Log in
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
