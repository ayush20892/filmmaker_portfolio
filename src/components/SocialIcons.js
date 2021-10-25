import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const SocialIcons = () => {
  return (
    <div className="position-absolute bottom-0 w-100 py-3">
      <HiOutlineMail className="social-icons-pill mx-2" />
      <AiOutlineInstagram className="social-icons-pill mx-2" />
      <AiOutlineLinkedin className="social-icons-pill mx-2" />
    </div>
  );
};

export default SocialIcons;
