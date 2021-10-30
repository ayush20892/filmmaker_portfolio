import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import SocialIcons from "../components/SocialIcons";
import WritingSection from "../components/WritingSection";

const WritingPage = () => {
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
      {/* WritingPage Content        */}
      {/* ****************************** */}
      {!hamMenu && <WritingSection />}
      {/* ******************** */}
      {/* Social Icon          */}
      {/* ******************** */}
      {hamMenu || !isMobile ? <SocialIcons /> : <></>}
    </div>
  );
};

export default WritingPage;
