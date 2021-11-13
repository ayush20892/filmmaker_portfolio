import "../assets/css/pages/PhotographyCarousel.css";
import { useParams, useNavigate } from "react-router-dom";
import photographyPageContent from "../assets/PhotographyPageContent";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const PhotographyCarousel = () => {
  const { topicNo } = useParams();
  const [imgNo, setImgNo] = useState(topicNo[2]);
  const navigate = useNavigate();
  const imgSrcArray = photographyPageContent.filter(
    (topic) => topic.topicNo === topicNo.substring(0, 2)
  )[0].imageArray;

  function leftNavigation() {
    if (JSON.parse(imgNo) - 1 < 0) {
      setImgNo(JSON.stringify(imgSrcArray.length - 1));
    } else {
      setImgNo(JSON.stringify(JSON.parse(imgNo) - 1));
    }
  }
  function rightNavigation() {
    if (JSON.parse(imgNo) + 1 > imgSrcArray.length - 1) {
      setImgNo(JSON.stringify(0));
    } else {
      setImgNo(JSON.stringify(JSON.parse(imgNo) + 1));
    }
  }

  return (
    <div className="carousel-container">
      <AiOutlineClose
        onClick={() => navigate("/photography")}
        className="close-btn"
      />
      <BsFillCaretLeftFill
        onClick={leftNavigation}
        className="nav-arrow nav-arrow-left"
      />
      <img src={imgSrcArray[imgNo]} alt="" />
      <BsFillCaretRightFill
        onClick={rightNavigation}
        className="nav-arrow nav-arrow-right"
      />
    </div>
  );
};

export default PhotographyCarousel;
