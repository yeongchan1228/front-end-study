import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  async function movieDetail() {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  }
  useEffect(() => {
    movieDetail();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <img src={movie.large_cover_image} alt="profile"></img>
      <h1>{movie.title}</h1>
    </div>
  );
}

export default Detail;
