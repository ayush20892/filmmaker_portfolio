import "../assets/css/components/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import NavbarContent from "../assets/NavbarContent";

const NavbarMobile = ({ textColor, hamMenu, setHamMenu }) => {
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
              className={`portfolio-name ${
                textColor === "white" ? "text-light" : "text-dark"
              }`}
            >
              {NavbarContent.filmmakerName}
            </Link>
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
                <Link
                  key={menuItem}
                  to={`/${menuItem.toLowerCase()}`}
                  className={`menu-item-pill ${
                    textColor === "white" ? "text-light" : "text-dark"
                  } ${pathname === `/${menuItem.toLowerCase()}` && "fw-bold"}`}
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
            className={`portfolio-name ${
              textColor === "white" ? "text-light" : "text-dark"
            }`}
          >
            {NavbarContent.filmmakerName}
          </Link>
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
