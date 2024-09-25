import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id, name } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjQ0YjZjY2I3OWNiMWQ2MDY4NDIzNDA1ZTVhODU2MSIsIm5iZiI6MTcyNjY0MDM2OC42NTU4MjgsInN1YiI6IjY2ZTk4YjRjODJmZjg3M2Y3ZDFlYzFlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N_1a6GrPcOtipEn5qWLB5XXw3c7pMRdclIY2VwUx6r4",
      },
    };
    axios(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,

      options
    ).then((res) => setMovieDetails(res.data));
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <div>{movieDetails.status}</div>
      <div>{name}</div>
    </div>
  );
}

export default MovieDetails;
