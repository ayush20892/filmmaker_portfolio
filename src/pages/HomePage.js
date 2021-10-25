import "../assets/css/pages/HomePage.css";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";

const HomePage = () => {
  return (
    <div className="home-background-image">
      <Navbar />
      <SocialIcons />
    </div>
  );
};

export default HomePage;
