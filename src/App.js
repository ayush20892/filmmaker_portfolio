import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import PhotographyPage from "./pages/PhotographyPage";
import MoviesPage from "./pages/MoviesPage";
import WritingPage from "./pages/WritingPage";
import PhotographyCarousel from "./pages/PhotographyCarousel";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/photography/:topicNo" element={<PhotographyCarousel />} />
      </Routes>
    </div>
  );
};

export default App;
