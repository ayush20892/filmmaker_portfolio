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
    navigate(`/photography`);
  }, [activeTopic, navigate]);

  return (
    <div className="photo-container">
      {Object.keys(photographyPageContent).map((topic) => {
        return (
          <div
            id={topic}
            className={`topic ${activeTopic === topic && "active-topic"}`}
            onClick={topicClickHandler}
          >
            {photographyPageContent[topic].photographyTitle}
            {activeTopic === topic && <BsArrowRight className="ms-2" />}
            {activeTopic === topic && (
              <div className="photos">
                {photographyPageContent[activeTopic].imageArray.map(
                  (picture) => {
                    return (
                      <div key={picture} className="picture">
                        <img
                          src={picture}
                          onClick={() =>
                            navigate(
                              `/photography/${picture.substring(14, 17)}`
                            )
                          }
                          alt=""
                        />
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default PhotographySectionMobile;
