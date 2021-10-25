import "../assets/css/components/Navbar.css";

const Navbar = () => {
  return (
    <>
      <h1 className="portfolio-name">Kaveri Sharma</h1>
      <div className="d-flex flex-sm-row flex-column justify-content-center">
        <h6 className="px-sm-4 py-sm-0 py-3 text-light">Movies</h6>
        <h6 className="px-sm-4 py-sm-0 py-3 text-light">Photography</h6>
        <h6 className="px-sm-4 py-sm-0 py-3 text-light">Writing</h6>
        <h6 className="px-sm-4 py-sm-0 py-3 text-light">About</h6>
      </div>
    </>
  );
};

export default Navbar;
