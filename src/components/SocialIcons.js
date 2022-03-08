import "../assets/css/components/SocialIcon.css";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useThemeContext } from "../context/theme-context";
const SocialIcons = ({ iconColor }) => {
  const { state } = useThemeContext();
  return (
    <div className="social-icons">
      <a href="mailto: trueimkaveri.sharma@gmail.com">
        <HiOutlineMail
          className="social-icon-pill "
          style={{ color: state.theme === "dark" ? "white" : "black" }}
        />
      </a>
      <a href="https://www.instagram.com">
        <AiOutlineInstagram
          className="social-icon-pill "
          style={{ color: state.theme === "dark" ? "white" : "black" }}
        />
      </a>
      <a href="https://www.linkedin.com/">
        <AiOutlineLinkedin
          className="social-icon-pill "
          style={{ color: state.theme === "dark" ? "white" : "black" }}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
