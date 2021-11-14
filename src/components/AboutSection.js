import "../assets/css/components/AboutSection.css";
import AboutPageContent from "../assets/AboutPageContent";
import { gql, useQuery } from "@apollo/client";

const About = gql`
  query GetAbout {
    about {
      filmmakerImage {
        url
      }
      contentPara1
      contentPara2
      emailId
      resumeDownloadLink
    }
  }
`;

const AboutSection = () => {
  const { loading, error, data } = useQuery(About);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  console.log(data.about.filmmakerImage);
  return (
    <div className="about-section-container">
      {/* *************************** */}
      {/* About Content Writeup       */}
      {/* *************************** */}
      <div className="about-content">
        <p>{data.about.contentPara1}</p> <p>{data.about.contentPara2}</p>{" "}
        {/* Mail Button */}
        <a href={`mailto: ${data.about.emailId}`} className="mail-button">
          {data.about.emailId}
        </a>
        {/* Resume Button */}
        <div className="my-3">
          <a
            href={data.about.resumeDownloadLink}
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
        <img
          src={`http://localhost:1337${data.about.filmmakerImage.url}`}
          alt="filmmaker"
        />
      </div>
    </div>
  );
};

export default AboutSection;
