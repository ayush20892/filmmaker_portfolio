import "../assets/css/components/Navbar.css";
import NavbarContent from "../assets/NavbarContent";
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
        {NavbarContent.filmmakerName}
      </NavLink>
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
  );
};

export default NavbarDesktop;
