import "../assets/css/components/WritingSection.css";
import { BiLinkExternal } from "react-icons/bi";
import WritingPageArray from "../assets/WritingPageArray";

const WritingSection = () => {
  return (
    <div className="writing-container">
      {/*************************/}
      {/* writing topic Category*/}
      {/*************************/}
      {WritingPageArray.map((topic) => {
        return (
          <div className="writing-topic">
            {/* ****************************** */}
            {/* Writing Topic Name&desc          */}
            {/* ****************************** */}
            <div className="writing-topic-name">{topic.topic}</div>
            <div className="writing-topic-desc">{topic.topicDesc}</div>
            {/*redirect button */}
            <a target="_blank" rel="noreferrer" href={topic.topicLink}>
              <BiLinkExternal className="link-icon" />
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default WritingSection;
