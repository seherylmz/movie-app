import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjQ0YjZjY2I3OWNiMWQ2MDY4NDIzNDA1ZTVhODU2MSIsIm5iZiI6MTcyNjY0MDM2OC42NTU4MjgsInN1YiI6IjY2ZTk4YjRjODJmZjg3M2Y3ZDFlYzFlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N_1a6GrPcOtipEn5qWLB5XXw3c7pMRdclIY2VwUx6r4",
    },
  };

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/12/lists?language=en-US&page=1",
      options
    ).then((res) => setMovieData(res.data.results));
  }, []);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div>
      <h1>Filmler</h1>
      <div className="mainMovie">
        <div className="mainBoxs">
          {movieData.map((movie, index) => (
            <div className="boxs" key={index}>
              <img
                src="https://content1.jdmagicbox.com/comp/jd_social/news/2018jul09/image-18563-83p8vbb1lm.jpg?fit=around|210:308&crop=210:308;*,*"
                alt="Movie Poster"
              />

              <div className="movieInfo">
                <a href={`/movie/${movie.id}/${movie.name}`}>{movie.name}</a>
              </div>
              <div className="movieType">{movie.list_type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
