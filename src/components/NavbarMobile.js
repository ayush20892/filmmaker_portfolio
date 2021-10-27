import "../assets/css/components/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarMobile = ({ textColor, hamMenu, setHamMenu }) => {
  return (
    <>
      {hamMenu ? (
        // Page on Ham Button Click.
        <>
          <div className="header-items">
            {/* ************************** */}
            {/* Portfolio Client Name      */}
            {/* ************************** */}
            <h1
              className={`portfolio-name ${
                textColor === "white" ? "text-light" : "text-dark"
              }`}
            >
              Kaveri Sharma
            </h1>
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
            <h5
              className={`menu-item-pill ${
                textColor === "white" ? "text-light" : "text-dark"
              } cursor-pointer`}
            >
              Movies
            </h5>
            <h5
              className={`menu-item-pill ${
                textColor === "white" ? "text-light" : "text-dark"
              } cursor-pointer`}
            >
              Photography
            </h5>
            <h5
              className={`menu-item-pill ${
                textColor === "white" ? "text-light" : "text-dark"
              } cursor-pointer`}
            >
              Writing
            </h5>
            <h5
              className={`menu-item-pill ${
                textColor === "white" ? "text-light" : "text-dark"
              } cursor-pointer`}
            >
              About
            </h5>
          </div>
        </>
      ) : (
        // Page before ham button click.
        <div className="header-items">
          {/* ************************** */}
          {/* Portfolio Client Name      */}
          {/* ************************** */}
          <h1
            className={`portfolio-name ${
              textColor === "white" ? "text-light" : "text-dark"
            }`}
          >
            Kaveri Sharma
          </h1>
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
