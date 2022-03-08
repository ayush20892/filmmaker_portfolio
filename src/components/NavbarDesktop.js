import "../assets/css/components/Navbar.css";
import NavbarContent from "../assets/NavbarContent";
import { NavLink, useLocation } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { useThemeContext } from "../context/theme-context";
const NavbarDesktop = ({ textColor }) => {
  const { state, dispatch } = useThemeContext();
  const { pathname } = useLocation();

  return (
    <>
      {/* ************************** */}
      {/* Portfolio Client Name      */}
      {/* ************************** */}
      <NavLink
        to="/"
        className="portfolio-name"
        style={{ color: state.theme === "dark" ? "white" : "black" }}
      >
        {NavbarContent.filmmakerName}
      </NavLink>
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

      {/* ************************** */}
      {/* Menu Items                 */}
      {/* ************************** */}
      <div className="menu-items">
        {NavbarContent.menuItems.map((menuItem) => {
          return (
            <NavLink
              key={menuItem}
              to={`/${menuItem.toLowerCase()}`}
              className={`menu-item-pill ${
                pathname === `/${menuItem.toLowerCase()}` && "fw-bold"
              }`}
              style={{ color: state.theme === "dark" ? "white" : "black" }}
            >
              {menuItem}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default NavbarDesktop;
