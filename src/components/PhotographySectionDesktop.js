import "../assets/css/components/PhotographySection.css";
import photographyPageContent from "../assets/PhotographyPageContent";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const PhotographySectionDesktop = () => {
  const [activeTopic, setActiveTopic] = useState("t1");
  const navigate = useNavigate();

  function topicClickHandler(e) {
    setActiveTopic(e.target.id);
  }

  return (
    <div className="photo-container">
      <div className="photo-topic">
        {photographyPageContent.map((topic) => {
          return (
            <div
              key={topic.topicNo}
              id={topic.topicNo}
              className={`topic ${
                activeTopic === topic.topicNo && "active-topic"
              }`}
              onClick={topicClickHandler}
            >
              {topic.photographyTitle}
              {activeTopic === topic.topicNo && (
                <BsArrowRight className="ms-2" />
              )}
            </div>
          );
        })}
      </div>
      <div className="photos">
        {photographyPageContent
          .filter((topic) => topic.topicNo === activeTopic)[0]
          .imageArray.map((picture) => {
            console.log(picture);
            return (
              <div key={picture} className="picture">
                <img
                  src={picture}
                  onClick={() =>
                    navigate(`/photography/${picture.substring(14, 17)}`)
                  }
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default PhotographySectionDesktop;
