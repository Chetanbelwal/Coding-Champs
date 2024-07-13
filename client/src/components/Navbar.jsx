import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="brand-logo">
            <NavLink to="/">Chetan</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              
              <li>
                <NavLink to="/contact"> Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service"> Service</NavLink>
              </li>
              <li>
                <NavLink to="/register"> Register</NavLink>
              </li>
              <li>
                <NavLink to="/login"> Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
