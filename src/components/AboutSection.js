import "../assets/css/components/AboutSection.css";
import filmmaker from "../assets/images/aboutPage/filmmaker-picture.jpg";

const AboutSection = () => {
  return (
    <div className="about-section-container">
      {/* *************************** */}
      {/* About Content Writeup       */}
      {/* *************************** */}
      <div className="about-content">
        <p>
          Cheryl Mukherji (b. 1995, India) is a visual artist and writer
          currently based in Brooklyn, New York. She graduated with an MFA in
          Advanced Photographic Studies from the International Center of
          Photography-Bard College, New York in 2020. In her current work,
          Cheryl explores the idea of origin and inheritance, which is embedded
          in the figure of her mother and her presence in the family album,
          using photography, text, and video.
        </p>{" "}
        <p>
          Cheryl is a finalist for the Outwin Boochever Portrait Competition
          2022 at the National Portrait Gallery, Smithsonian, and a current
          Workspace Resident at Baxter Street at CCNY, New York where she will
          also host her debut solo show in January 2022. Previously, Cheryl has
          been the recipient of Capture Photography Festival’s Writing Prize
          2020, Brooklyn Museum’s #Your2020Portrait Award, South Asian Arts
          Resiliency Fund (SAARF), Firecracker Photography Grant 2020, and was a
          finalist for the Dorthea Lange-Paul Taylor Prize 2020. Her work has
          been exhibited at the Minnesota Museum of American Art (US),
          Huxley-Parlour Gallery (UK), Format Photo Festival (UK), Brooklyn
          Museum (US), Museum of Moving Image (US), International Center of
          Photography (US), Serendipity Arts Festival (IN), among others.
        </p>{" "}
        {/* Mail Button */}
        <a href="mailto: trueimkaveri.sharma@gmail.com" className="mail-button">
          cherylmukherji@gmail.com
        </a>
        {/* Resume Button */}
        <div className="resume-button">Résumé</div>
      </div>
      {/* ************************** */}
      {/* Filmmaker Image            */}
      {/* ************************** */}
      <div className="about-image">
        <img src={filmmaker} alt="filmmaker" />
      </div>
    </div>
  );
};

export default AboutSection;
