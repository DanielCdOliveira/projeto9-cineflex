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
    <main>
      <h2>Selecione o horário</h2>
      <ul className="sessions-list">
        {sessions.map((session) => {
          return (
            <li key={session.id} className="session">
              <p>{`${session.weekday} - ${session.date}`}</p>
              {session.showtimes.map((hour) => {
                return (
                  <Link key={hour.id} to={`/sessao/${hour.id}`}>
                    <button>{hour.name}</button>
                  </Link>
                );
              })}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Movie;
