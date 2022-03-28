import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../Loading";

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



  if (movies.length > 0) {
    return (
      <>
        <main>
          <h2>Selecione o filme</h2>
          <ul className="movies-list">
            {movies.map((movie) => {
              return (
                <Link
                  key={movie.id}
                  to={`/filme/${movie.id}`}
                  state={{img:movie.posterURL,
                  title:movie.title,
                }}
                >
                  <li className="movie-poster">
                    <img src={movie.posterURL} alt="" />
                  </li>
                </Link>
              );
            })}
          </ul>
        </main>
      </>
    );
  } else {
    return <Loading/> ;
  }
}

export default Start;
