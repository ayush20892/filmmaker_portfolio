import "../assets/css/components/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import NavbarContent from "../assets/NavbarContent";

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
              {NavbarContent.filmmakerName}
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
            {NavbarContent.menuItems.map((menuItem) => {
              return (
                <NavLink
                  to={`/${menuItem.toLowerCase()}`}
                  className={`menu-item-pill ${
                    textColor === "white" ? "text-light" : "text-dark"
                  } ${pathname === `/${menuItem.toLowerCase()}` && "fw-bold"}`}
                >
                  {menuItem}
                </NavLink>
              );
            })}
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
            {NavbarContent.filmmakerName}
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
