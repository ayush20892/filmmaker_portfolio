import "../assets/css/components/PhotographySection.css";
import photographyPageContent from "../assets/PhotographyPageContent";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const PhotographySectionDesktop = () => {
  const [activeTopic, setActiveTopic] = useState("t1");

  function topicClickHandler(e) {
    setActiveTopic(e.target.id);
  }

  return (
    <div className="photo-container">
      <div className="photo-topic">
        {Object.keys(photographyPageContent).map((topic) => {
          return (
            <div
              id={topic}
              className={`topic ${activeTopic === topic && "active-topic"}`}
              onClick={topicClickHandler}
            >
              {photographyPageContent[topic].photographyTitle}
              {activeTopic === topic && <BsArrowRight className="ms-2" />}
            </div>
          );
        })}
      </div>
      <div className="photos">
        {photographyPageContent[activeTopic].imageArray.map((picture) => {
          return (
            <div key={picture} className="picture">
              <img src={picture} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PhotographySectionDesktop;
