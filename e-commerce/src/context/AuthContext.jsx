// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     // Refresh pe localStorage check karo
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   const login = (newToken) => {
//     localStorage.setItem("token", newToken);
//     setToken(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
////////////////////////////////////////////////////////////////////////

import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Refresh pe localStorage check karo
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData, newToken) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
