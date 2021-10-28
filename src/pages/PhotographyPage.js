import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import PhotographySection from "../components/PhotographySection";
import SocialIcons from "../components/SocialIcons";

const PhotographyPage = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });
  const [hamMenu, setHamMenu] = useState(0);

  useEffect(() => {
    if (!isMobile) setHamMenu(0);
  }, [isMobile]);

  return (
    <div className="w-100">
      {/* ******************** */}
      {/* Navbar               */}
      {/* ******************** */}
      {isMobile ? (
        <NavbarMobile
          textColor="black"
          hamMenu={hamMenu}
          setHamMenu={setHamMenu}
        />
      ) : (
        <NavbarDesktop textColor="black" />
      )}
      {/* ****************************** */}
      {/* PhotographyPage Content        */}
      {/* ****************************** */}
      {!hamMenu && <PhotographySection />}
      {/* ******************** */}
      {/* Social Icon          */}
      {/* ******************** */}
      {hamMenu ? <SocialIcons /> : <></>}
    </div>
  );
};

export default PhotographyPage;
