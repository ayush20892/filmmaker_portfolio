import "../assets/css/components/AboutSection.css";
import AboutPageContent from "../assets/AboutPageContent";

const AboutSection = () => {
  return (
    <div className="about-section-container">
      {/* *************************** */}
      {/* About Content Writeup       */}
      {/* *************************** */}
      <div className="about-content">
        <p>{AboutPageContent.contentPara1}</p>{" "}
        <p>{AboutPageContent.contentPara2}</p> {/* Mail Button */}
        <a href={`mailto: ${AboutPageContent.emailId}`} className="mail-button">
          {AboutPageContent.emailId}
        </a>
        {/* Resume Button */}
        <div className="my-3">
          <a
            href={AboutPageContent.resumeDownloadLink}
            download
            className="resume-button"
          >
            Résumé
          </a>
        </div>
      </div>
      {/* ************************** */}
      {/* Filmmaker Image            */}
      {/* ************************** */}
      <div className="about-image">
        <img src={AboutPageContent.filmakerImage} alt="filmmaker" />
      </div>
    </div>
  );
};

export default AboutSection;
