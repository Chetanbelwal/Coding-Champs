import {
  Children,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

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

  // JWT Authentication - to get the currently logged in user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        // our main goal is to get the user data 👇
        setUser(data.userData);
      } else {
        console.error(
          `Error fetching user data: ${response.status} - ${response.statusText}`
        );
        const errorData = await response.json();
        console.error("Error details:", errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ LogoutUser, storeTokenInLS, isLoggedIn, user }}
    >
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
