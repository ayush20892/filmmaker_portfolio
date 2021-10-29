import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import MoviesSection from "../components/MoviesSection";
import SocialIcons from "../components/SocialIcons";

const MoviesPage = () => {
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
      {/* MoviesPage Content        */}
      {/* ****************************** */}
      {!hamMenu && <MoviesSection />}
      {/* ******************** */}
      {/* Social Icon          */}
      {/* ******************** */}
      {hamMenu ? <SocialIcons /> : <></>}
    </div>
  );
};

export default MoviesPage;
