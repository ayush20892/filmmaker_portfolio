import "../assets/css/components/PhotographySection.css";
import PhotographyPageLinkArray from "../assets/images/PhotographyPageLink";
import { useState } from "react";
import lol from "../assets/images/photographyPage/t1/1.jpg";
const PhotographySection = () => {
  const [activeTopic, setActiveTopic] = useState("t1");
  function topicClickHandler(e) {
    setActiveTopic(e.target.id);
  }

  return (
    <div className="photo-container">
      <div className="photo-topic">
        <div id="t1" className="topic" onClick={topicClickHandler}>
          Children
        </div>
        <div id="t2" className="topic" onClick={topicClickHandler}>
          Victoria
        </div>
        <div id="t3" className="topic" onClick={topicClickHandler}>
          Steppe
        </div>
        <div id="t4" className="topic" onClick={topicClickHandler}>
          The world is too dark,Mom!
        </div>
      </div>
      <div className="photos">
        <img src={lol} alt="" />
        {PhotographyPageLinkArray[activeTopic].map((picture) => {
          console.log(picture);
          return (
            <div className="picture">
              <img scr={picture} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PhotographySection;
