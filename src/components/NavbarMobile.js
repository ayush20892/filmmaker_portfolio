import "../assets/css/components/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

const NavbarMobile = ({ textColor, hamMenu, setHamMenu }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      {hamMenu ? (
        // Page on Ham Button Click.
        <>
          <div className="header-items">
            {/* ************************** */}
            {/* Portfolio Client Name      */}
            {/* ************************** */}
            <NavLink
              to="/"
              onClick={() => navigate("/")}
              className={`portfolio-name ${
                textColor === "white" ? "text-light" : "text-dark"
              }`}
            >
              Kaveri Sharma
            </NavLink>
            {/* ************************** */}
            {/* Close cross Icon           */}
            {/* ************************** */}
            <AiOutlineClose
              className={`ham-icon ${
                textColor === "white" ? "text-light" : "text-dark"
              }`}
              onClick={() => setHamMenu(!hamMenu)}
            />
          </div>
          {/* ************************** */}
          {/* Menu Items                 */}
          {/* ************************** */}
          <div className="menu-items">
            <NavLink
              to="/movies"
              onClick={() => navigate("/movies")}
              className={`menu-item-pill ${
                textColor === "white" ? "text-light" : "text-dark"
              } ${pathname === "/movies" && "fw-bold"}`}
            >
              Movies
            </NavLink>
            <NavLink
              to="/photography"
              onClick={() => navigate("/photography")}
              className={`menu-item-pill ${
                textColor === "white" ? "text-light" : "text-dark"
              } ${pathname === "/photography" && "fw-bold"}`}
            >
              Photography
            </NavLink>
            <NavLink
              to="/writing"
              onClick={() => navigate("/writing")}
              className={`menu-item-pill ${
                textColor === "white" ? "text-light" : "text-dark"
              } ${pathname === "/writing" && "fw-bold"}`}
            >
              Writing
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => navigate("/about")}
              className={`menu-item-pill ${
                textColor === "white" ? "text-light" : "text-dark"
              }  ${pathname === "/about" && "fw-bold"}`}
            >
              About
            </NavLink>
          </div>
        </>
      ) : (
        // Page before ham button click.
        <div className="header-items">
          {/* ************************** */}
          {/* Portfolio Client Name      */}
          {/* ************************** */}
          <NavLink
            to="/"
            onClick={() => navigate("/")}
            className={`portfolio-name ${
              textColor === "white" ? "text-light" : "text-dark"
            }`}
          >
            Kaveri Sharma
          </NavLink>
          {/* ************************** */}
          {/* Hamburger Icon             */}
          {/* ************************** */}
          <GiHamburgerMenu
            className={`ham-icon ${
              textColor === "white" ? "text-light" : "text-dark"
            }`}
            onClick={() => setHamMenu(!hamMenu)}
          />
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
