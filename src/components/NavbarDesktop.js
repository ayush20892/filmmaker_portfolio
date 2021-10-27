import "../assets/css/components/Navbar.css";

const NavbarDesktop = ({ textColor }) => {
  return (
    <>
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
      {/* Menu Items                 */}
      {/* ************************** */}
      <div className="menu-items">
        <h6
          className={`menu-item-pill ${
            textColor === "white" ? "text-light" : "text-dark"
          }`}
        >
          Movies
        </h6>
        <h6
          className={`menu-item-pill ${
            textColor === "white" ? "text-light" : "text-dark"
          }`}
        >
          Photography
        </h6>
        <h6
          className={`menu-item-pill ${
            textColor === "white" ? "text-light" : "text-dark"
          }`}
        >
          Writing
        </h6>
        <h6
          className={`menu-item-pill ${
            textColor === "white" ? "text-light" : "text-dark"
          }`}
        >
          About
        </h6>
      </div>
    </>
  );
};

export default NavbarDesktop;
