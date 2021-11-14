import "../assets/css/components/PhotographySection.css";
import photographyPageContent from "../assets/PhotographyPageContent";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";

const PhotographySectionMobile = () => {
  const [activeTopic, setActiveTopic] = useState("");
  const navigate = useNavigate();

  function topicClickHandler(e) {
    setActiveTopic(activeTopic === e.target.id ? "" : e.target.id);
  }

  useEffect(() => {
    navigate(`/photography#${activeTopic}`);
  }, [activeTopic, navigate]);

  return (
    <div className="photo-container">
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
            {activeTopic === topic.topicNo && <BsArrowRight className="ms-2" />}
            {activeTopic === topic.topicNo && (
              <div className="photos">
                {topic.imageArray.map((picture) => {
                  return (
                    <div key={picture} className="picture">
                      <img src={picture} alt="" />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default PhotographySectionMobile;
