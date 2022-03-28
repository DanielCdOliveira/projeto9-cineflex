import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Footer";
import Loading from "../Loading";

function Movie() {
  const { idFilme } = useParams();
  const { state } = useLocation();

  const [sessions, setSessions] = useState([]);
  // SEARCH DATA
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((response) => {
      setSessions(response.data);
    });
  }, []);

  if (Object.keys(sessions).length !== 0) {
    return (
      <main>
        <h2>Selecione o horário</h2>
        <ul className="sessions-list">
          {/* RENDER SESSIONS */}
          {sessions.days.map((session) => {
            return (
              <li key={session.id} className="session">
                <p>{`${session.weekday} - ${session.date}`}</p>
                {session.showtimes.map((hour) => {
                  return (
                    <Link key={hour.id} to={{ pathname: `/sessao/${hour.id}` }}>
                      <button>{hour.name}</button>
                    </Link>
                  );
                })}
              </li>
            );
          })}
        </ul>
        <Footer img={state.img} title={state.title} />
      </main>
    );
  } else {
    return <Loading />;
  }
}

export default Movie;
