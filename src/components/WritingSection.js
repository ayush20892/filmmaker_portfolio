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
            <a href="https://ayush-sharma20.netlify.app/projects.html">
              <BiLinkExternal className="mx-4" />
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default WritingSection;
