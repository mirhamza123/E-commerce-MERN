// //////////////////////////////////////////////////////////////////////////

// import React, { useState, useContext, useEffect } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import phone from "../assets/signup.jpg";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext.jsx";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     emailOrPhone: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   // 👇 Ensure form reset on mount
//   useEffect(() => {
//     setFormData({ emailOrPhone: "", password: "" });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.emailOrPhone.trim()) {
//       newErrors.emailOrPhone = "Email or Phone Number is required";
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);
//     setErrors({});

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         login(data.data.user, data.data.token);
//         alert(`Welcome back, ${data.data.user.name}!`);

//         setFormData({ emailOrPhone: "", password: "" });
//         navigate("/");
//       } else {
//         if (response.status === 401) {
//           setErrors({
//             emailOrPhone: "Invalid credentials",
//             password: "Invalid credentials",
//           });
//         } else {
//           alert(data.message || "Login failed");
//         }
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Network error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="flex max-w-5xl w-full bg-white overflow-hidden">
//         {/* Left Image */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src={phone}
//             alt="Illustration"
//             className="w-[500px] h-full object-cover"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="flex-1 p-12 flex flex-col justify-center max-w-md">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             Log in to Exclusive
//           </h2>
//           <p className="text-gray-600 mb-8">Enter your details below</p>

//           <div className="space-y-6">
//             {/* Email or Phone */}
//             <input
//               type="text"
//               name="emailOrPhone"
//               placeholder="Email or Phone Number"
//               value={formData.emailOrPhone}
//               onChange={handleInputChange}
//               className={`w-full border-b-2 pb-3 ${
//                 errors.emailOrPhone ? "border-red-500" : "border-gray-200"
//               }`}
//             />
//             {errors.emailOrPhone && (
//               <p className="text-red-500 text-sm">{errors.emailOrPhone}</p>
//             )}

//             {/* Password */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className={`w-full border-b-2 pb-3 pr-10 ${
//                   errors.password ? "border-red-500" : "border-gray-200"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-0 bottom-3"
//               >
//                 {showPassword ? <EyeOff /> : <Eye />}
//               </button>
//               {errors.password && (
//                 <p className="text-red-500 text-sm">{errors.password}</p>
//               )}
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={handleLogin}
//               disabled={isLoading}
//               className="bg-red-500 text-white py-3 w-full rounded"
//             >
//               {isLoading ? "Logging in..." : "Log In"}
//             </button>

//             <div className="text-center">
//               <span className="text-gray-600">Don't have an account? </span>
//               <NavLink to="/signup" className="text-gray-900 font-medium">
//                 Sign up
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

// import React, { useState, useContext, useEffect } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import phone from "../assets/signup.jpg";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext.jsx";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     emailOrPhone: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   // 👇 Ensure form reset on mount
//   useEffect(() => {
//     setFormData({ emailOrPhone: "", password: "" });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.emailOrPhone.trim()) {
//       newErrors.emailOrPhone = "Email or Phone Number is required";
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);
//     setErrors({});

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         login(data.data.user, data.data.token);
//         alert(`Welcome back, ${data.data.user.name}!`);

//         // ✅ Reset form data
//         setFormData({ emailOrPhone: "", password: "" });

//         // ✅ Small delay before navigation so inputs visibly clear
//         setTimeout(() => {
//           navigate("/");
//         }, 200);
//       } else {
//         if (response.status === 401) {
//           setErrors({
//             emailOrPhone: "Invalid credentials",
//             password: "Invalid credentials",
//           });
//         } else {
//           alert(data.message || "Login failed");
//         }
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Network error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="flex max-w-5xl w-full bg-white overflow-hidden">
//         {/* Left Image */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src={phone}
//             alt="Illustration"
//             className="w-[500px] h-full object-cover"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="flex-1 p-12 flex flex-col justify-center max-w-md">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             Log in to Exclusive
//           </h2>
//           <p className="text-gray-600 mb-8">Enter your details below</p>

//           {/* ✅ Wrap inputs inside <form> */}
//           <form onSubmit={handleLogin} className="space-y-6">
//             {/* Email or Phone */}
//             <input
//               type="text"
//               name="emailOrPhone"
//               placeholder="Email or Phone Number"
//               value={formData.emailOrPhone}
//               onChange={handleInputChange}
//               className={`w-full border-b-2 pb-3 ${
//                 errors.emailOrPhone ? "border-red-500" : "border-gray-200"
//               }`}
//             />
//             {errors.emailOrPhone && (
//               <p className="text-red-500 text-sm">{errors.emailOrPhone}</p>
//             )}

//             {/* Password */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className={`w-full border-b-2 pb-3 pr-10 ${
//                   errors.password ? "border-red-500" : "border-gray-200"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-0 bottom-3"
//               >
//                 {showPassword ? <EyeOff /> : <Eye />}
//               </button>
//               {errors.password && (
//                 <p className="text-red-500 text-sm">{errors.password}</p>
//               )}
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="bg-red-500 text-white py-3 w-full rounded"
//             >
//               {isLoading ? "Logging in..." : "Log In"}
//             </button>

//             <div className="text-center">
//               <span className="text-gray-600">Don't have an account? </span>
//               <NavLink to="/signup" className="text-gray-900 font-medium">
//                 Sign up
//               </NavLink>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

///////////////////////////////////////////////////////////////////////////////////

import React, { useState, useContext, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import phone from "../assets/signup.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = "Email or Phone Number is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        login(data.data.user, data.data.token);
        // alert(`Welcome back, ${data.data.user.name}!`);

        // ✅ Reset form
        setFormData({ emailOrPhone: "", password: "" });

        navigate("/");
      } else {
        if (response.status === 401) {
          setErrors({
            emailOrPhone: "Invalid credentials",
            password: "Invalid credentials",
          });
        } else {
          alert(data.message || "Login failed");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
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
            Log in to Exclusive
          </h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email or Phone */}
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone Number"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
              className={`w-full border-b-2 pb-3 ${
                errors.emailOrPhone ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.emailOrPhone && (
              <p className="text-red-500 text-sm">{errors.emailOrPhone}</p>
            )}

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full border-b-2 pb-3 pr-10 ${
                  errors.password ? "border-red-500" : "border-gray-200"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-3"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-500 text-white py-3 w-full rounded"
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>

            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <NavLink to="/signup" className="text-gray-900 font-medium">
                Sign up
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
