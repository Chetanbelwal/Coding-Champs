import { Children, createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  return (
    <AuthContext.Provider value={{ storeTokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};
// this is a custom hook which will be a consumer consist of entire context so whenever we wanna use this context we will call this hook

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext)
    if(!authContextValue){
        throw new console.error("useAuth used outside of the Provider");     //this error will only be thrown agar hum apne app ko provider se wrap nhi krte main.jsx ma
        
    }
    return authContextValue
}
