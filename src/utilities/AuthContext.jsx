import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedData = sessionStorage.getItem("dataUser");
    return storedData ? JSON.parse(storedData) : null;
  });

  const login = (token, username) => {
    const updatedUserData = { ...userData, accessToken: token, username };
    setUserData(updatedUserData);
    sessionStorage.setItem("dataUser", JSON.stringify(updatedUserData)); 
  };

  const logout = () => {
    setUserData(null);
    sessionStorage.removeItem("dataUser");
  };

  const isAuthenticated = !!(userData && userData.accessToken);

  return (
    <AuthContext.Provider value={{ userData, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;