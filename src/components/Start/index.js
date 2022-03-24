import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Start() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((response) => {
      setMovies(response.data);
    });
  }, []);

  console.log(movies);

  return (
    <>
      {movies.map((movie) =>(
        <Link to={`/filme/${movie.id}`}>Ir para filme</Link>
      ))}

     
    </>
  );
}

export default Start;
