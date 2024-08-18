import { Children, createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // isLogged in will have true if we have token value and false if we don't have token value
  let isLoggedIn = !!token;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };
  // Logic to logout user is simple just set the token empty and remove the existing token
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ LogoutUser, storeTokenInLS, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
// this is a custom hook which will be a consumer consist of entire context so whenever we wanna use this context we will call this hook

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new console.error("useAuth used outside of the Provider"); //this error will only be thrown agar hum apne app ko provider se wrap nhi krte main.jsx ma
  }
  return authContextValue;
};
