import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Movie() {
  const { idFilme } = useParams();
  console.log(idFilme);

  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((response) => {
      setSessions(response.data.days);
    });
  }, []);

  console.log(sessions);
  return (
    <>
      {sessions.map((session) => (
          <Link key={session.id} to={`/sessao/${session.showtimes.id}`}>
            Ir para filme
          </Link>
        ))}
    
    </>
  )
}

export default Movie;
