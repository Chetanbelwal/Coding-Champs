import { NavLink } from "react-router-dom";
import "./Navbar.css";

// importing our customised hook to call isLogged In functionality
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { user, isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="brand-logo">
            <NavLink to="/">Coding Champs 🚀</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/about"> About</NavLink>
              </li>

              <li>
                <NavLink to="/contact"> Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service"> Service</NavLink>
              </li>
              {isLoggedIn ? (
                <>
                {user.isAdmin && (
                    <li>
                      <NavLink to="/admin">Admin</NavLink>
                    </li>
                  )}
                  <li>
                    <NavLink to="/logout">Logout</NavLink>
                  </li>
                  
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/registration">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
