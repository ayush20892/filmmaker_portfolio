import "../assets/css/components/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import NavbarContent from "../assets/NavbarContent";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

import { useThemeContext } from "../context/theme-context";

const NavbarMobile = ({ textColor, hamMenu, setHamMenu }) => {
  const { state, dispatch } = useThemeContext();

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
            <Link
              to="/"
              onClick={() => setHamMenu(0)}
              className="portfolio-name"
              style={{ color: state.theme === "dark" ? "white" : "black" }}
            >
              {NavbarContent.filmmakerName}
            </Link>
            {/* ************************** */}
            {/* Close cross Icon           */}
            {/* ************************** */}
            <AiOutlineClose
              className="ham-icon"
              style={{ color: state.theme === "dark" ? "white" : "black" }}
              onClick={() => setHamMenu(!hamMenu)}
            />
          </div>
          {/* ************************** */}
          {/* Menu Items                 */}
          {/* ************************** */}
          <div className="menu-items">
            {NavbarContent.menuItems.map((menuItem) => {
              return (
                <Link
                  key={menuItem}
                  to={`/${menuItem.toLowerCase()}`}
                  className={`menu-item-pill ${
                    pathname === `/${menuItem.toLowerCase()}` && "fw-bold"
                  }`}
                  style={{ color: state.theme === "dark" ? "white" : "black" }}
                >
                  {menuItem}
                </Link>
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
          <Link
            to="/"
            className="portfolio-name"
            style={{ color: state.theme === "dark" ? "white" : "black" }}
          >
            {NavbarContent.filmmakerName}
          </Link>
          {/* ************************** */}
          {/* Hamburger Icon             */}
          {/* ************************** */}
          <GiHamburgerMenu
            className="ham-icon"
            style={{ color: state.theme === "dark" ? "white" : "black" }}
            onClick={() => setHamMenu(!hamMenu)}
          />
          {/* ************************** */}
          {/* Theme Icon             */}
          {/* ************************** */}
          {state.theme === "dark" ? (
            <BsFillSunFill
              className="ham-icon"
              onClick={() => dispatch({ type: "theme" })}
            />
          ) : (
            <MdDarkMode
              className="ham-icon"
              onClick={() => dispatch({ type: "theme" })}
            />
          )}
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
