import "../assets/css/components/MoviesSection.css";
import MoviePageArray from "../assets/MoviesPageArray";

const MoviesSection = () => {
  return (
    <div className="movie-container">
      {/* *********************************** */}
      {/* Movie Topic Category                */}
      {/* *********************************** */}
      {MoviePageArray.map((movie) => {
        return (
          <div className="movie-topic-container">
            {/* ****************************** */}
            {/* Movie Topic Name               */}
            {/* ****************************** */}
            <div className="movie-topic-name">{movie.movieTopic}</div>
            {/* ****************************** */}
            {/* Movie Topic Thumbnail Array    */}
            {/* ****************************** */}
            <div className="movie-topic-images">
              {movie.images.map((movieImage) => {
                return (
                  <div className="topic-image">
                    {/* Thumbnail Image */}
                    <img src={movieImage.imageURL} alt="" />
                    {/* Thumbnail Title */}
                    <div className="movie-image-name">
                      {movieImage.imageName}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MoviesSection;
