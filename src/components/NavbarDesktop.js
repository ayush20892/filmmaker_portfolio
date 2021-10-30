import "../assets/css/components/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const NavbarDesktop = ({ textColor }) => {
  const { pathname } = useLocation();
  return (
    <>
      {/* ************************** */}
      {/* Portfolio Client Name      */}
      {/* ************************** */}
      <NavLink
        to="/"
        className={`portfolio-name ${
          textColor === "white" ? "text-light" : "text-dark"
        }`}
      >
        Kaveri Sharma
      </NavLink>
      {/* ************************** */}
      {/* Menu Items                 */}
      {/* ************************** */}
      <div className="menu-items">
        <NavLink
          to="/movies"
          className={`menu-item-pill ${
            textColor === "white" ? "text-light" : "text-dark"
          } ${pathname === "/movies" && "fw-bold"}`}
        >
          Movies
        </NavLink>
        <NavLink
          to="/photography"
          className={`menu-item-pill ${
            textColor === "white" ? "text-light" : "text-dark"
          } ${pathname === "/photography" && "fw-bold"}`}
        >
          Photography
        </NavLink>
        <NavLink
          to="/writing"
          className={`menu-item-pill ${
            textColor === "white" ? "text-light" : "text-dark"
          } ${pathname === "/writing" && "fw-bold"}`}
        >
          Writing
        </NavLink>
        <NavLink
          to="/about"
          className={`menu-item-pill ${
            textColor === "white" ? "text-light" : "text-dark"
          } ${pathname === "/about" && "fw-bold"}`}
        >
          About
        </NavLink>
      </div>
    </>
  );
};

export default NavbarDesktop;
