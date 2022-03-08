import "../assets/css/pages/HomePage.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import SocialIcons from "../components/SocialIcons";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });
  const [hamMenu, setHamMenu] = useState(0);

  useEffect(() => {
    if (!isMobile) setHamMenu(0);
  }, [isMobile]);

  return (
    <div className={` ${hamMenu ? "" : "home-background-image"} w-100`}>
      {isMobile ? (
        <NavbarMobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
      ) : (
        <NavbarDesktop textColor="white" />
      )}
      {!hamMenu && <div className="home-content"></div>}
      <SocialIcons />
    </div>
  );
};

export default HomePage;
