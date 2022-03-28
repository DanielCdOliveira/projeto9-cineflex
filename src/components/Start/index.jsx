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
    return <h1>Carregando</h1>;
  }
}

export default Start;
