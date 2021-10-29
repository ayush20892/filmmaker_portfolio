import "../assets/css/components/PhotographySection.css";
import PhotographyPageLinkArray from "../assets/images/PhotographyPageLinkArray";
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
      <div
        id="t1"
        className={`topic ${activeTopic === "t1" && "active-topic"}`}
        onClick={topicClickHandler}
      >
        Children
        {activeTopic === "t1" && <BsArrowRight className="ms-2" />}
        {activeTopic === "t1" && (
          <div className="photos">
            {PhotographyPageLinkArray[activeTopic].map((picture) => {
              return (
                <div key={picture} className="picture">
                  <img src={picture} alt="" />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div
        id="t2"
        className={`topic ${activeTopic === "t2" && "active-topic"}`}
        onClick={topicClickHandler}
      >
        Victoria
        {activeTopic === "t2" && <BsArrowRight className="ms-2" />}
        {activeTopic === "t2" && (
          <div className="photos">
            {PhotographyPageLinkArray[activeTopic].map((picture) => {
              return (
                <div key={picture} className="picture">
                  <img src={picture} alt="" />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div
        id="t3"
        className={`topic ${activeTopic === "t3" && "active-topic"}`}
        onClick={topicClickHandler}
      >
        Steppe
        {activeTopic === "t3" && <BsArrowRight className="ms-2" />}
        {activeTopic === "t3" && (
          <div className="photos">
            {PhotographyPageLinkArray[activeTopic].map((picture) => {
              return (
                <div key={picture} className="picture">
                  <img src={picture} alt="" />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div
        id="t4"
        className={`topic ${activeTopic === "t4" && "active-topic"}`}
        onClick={topicClickHandler}
      >
        The world is too dark,Mom!
        {activeTopic === "t4" && <BsArrowRight className="ms-2" />}
        {activeTopic === "t4" && (
          <div className="photos">
            {PhotographyPageLinkArray[activeTopic].map((picture) => {
              return (
                <div key={picture} className="picture">
                  <img src={picture} alt="" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default PhotographySectionMobile;
