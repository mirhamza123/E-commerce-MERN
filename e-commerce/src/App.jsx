// import React from "react";
// import "./App.css";
// import Navbar from "./Component/Navbar.jsx";

// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home.jsx";
// import About from "./Pages/About.jsx";
// import Contact from "./Pages/Contact.jsx";
// import Footer from "./pages/Footer.jsx";
// import Signup from "./pages/Signup.jsx";
// import Login from "./pages/Login.jsx";
// import AddCard from "./pages/AddCard.jsx";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/addcard" element={<AddCard />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

//////////////////////////////////////////////////////////////
// import React from "react";
// import "./App.css";
// import Navbar from "./Component/Navbar.jsx";

// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home.jsx";
// import About from "./Pages/About.jsx";
// import Contact from "./Pages/Contact.jsx";
// import Footer from "./Pages/Footer.jsx";
// import Signup from "./Pages/Signup.jsx";
// import Login from "./Pages/Login.jsx";
// import AddCard from "./Pages/AddCard.jsx";
// import ProtectedRoute from "./Component/ProtectedRoute.jsx";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected routes */}
//         <Route
//           path="/about"
//           element={
//             <ProtectedRoute>
//               <About />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <ProtectedRoute>
//               <Contact />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/addcard"
//           element={
//             <ProtectedRoute>
//               <AddCard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

/////////////////////////////////////////////////

import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "./Pages/Footer.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import AddCard from "./Pages/AddCard.jsx";
import ProtectedRoute from "./Component/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx"; // 👈 new import

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addcard"
          element={
            <ProtectedRoute>
              <AddCard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
