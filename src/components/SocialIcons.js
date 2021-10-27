import "../assets/css/components/SocialIcon.css";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const SocialIcons = ({ iconColor }) => {
  return (
    <div className="social-icons">
      <a href="mailto: trueimkaveri.sharma@gmail.com">
        <HiOutlineMail
          className={`social-icon-pill ${
            iconColor === "white" ? "text-light" : "text-dark"
          }`}
        />
      </a>
      <a href="https://www.instagram.com">
        <AiOutlineInstagram
          className={`social-icon-pill ${
            iconColor === "white" ? "text-light" : "text-dark"
          }`}
        />
      </a>
      <a href="https://www.linkedin.com/">
        <AiOutlineLinkedin
          className={`social-icon-pill ${
            iconColor === "white" ? "text-light" : "text-dark"
          }`}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
