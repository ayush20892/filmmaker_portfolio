import "../assets/css/components/PhotographySection.css";
import PhotographyPageLinkArray from "../assets/images/PhotographyPageLinkArray";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const PhotographySection = () => {
  const [activeTopic, setActiveTopic] = useState("t1");

  function topicClickHandler(e) {
    setActiveTopic(e.target.id);
  }

  return (
    <div className="photo-container">
      <div className="photo-topic">
        <div
          id="t1"
          className={`topic ${activeTopic === "t1" && "active-topic"}`}
          onClick={topicClickHandler}
        >
          Children
          {activeTopic === "t1" && <BsArrowRight className="ms-2" />}
        </div>
        <div
          id="t2"
          className={`topic ${activeTopic === "t2" && "active-topic"}`}
          onClick={topicClickHandler}
        >
          Victoria
          {activeTopic === "t2" && <BsArrowRight className="ms-2" />}
        </div>
        <div
          id="t3"
          className={`topic ${activeTopic === "t3" && "active-topic"}`}
          onClick={topicClickHandler}
        >
          Steppe
          {activeTopic === "t3" && <BsArrowRight className="ms-2" />}
        </div>
        <div
          id="t4"
          className={`topic ${activeTopic === "t4" && "active-topic"}`}
          onClick={topicClickHandler}
        >
          The world is too dark,Mom!
          {activeTopic === "t4" && <BsArrowRight className="ms-2" />}
        </div>
      </div>
      <div className="photos">
        {PhotographyPageLinkArray[activeTopic].map((picture) => {
          return (
            <div className="picture">
              <img src={picture} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PhotographySection;
