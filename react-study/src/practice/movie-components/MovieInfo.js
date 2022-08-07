import styles from "./Component.module.css";
import styles2 from "./Movie.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieInfo({ movie }) {
  return (
    <div className={styles2.movie} key={movie.id}>
      <img src={movie.medium_cover_image} alt="profile"></img>
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
      <p>
        {movie.summary.length > 235
          ? `${movie.summary.slice(0, 235)}...`
          : movie.summary}
      </p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.object,
};
export default MovieInfo;
