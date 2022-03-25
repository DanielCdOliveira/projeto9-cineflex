import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Description from "./Description";

function Session() {
  const { idSessao } = useParams();
  console.log(idSessao);
  const [session, setSession] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setSession(response.data);
    });
    promise.catch(console.log("deu merda"));
  }, []);

  console.log(session);
  console.log(session.length);

  if (Object.keys(session).length !== 0) {
    return (
      <main>
        <h2>Selecione o(s) assento(s)</h2>
        <ul className="seats">
          {session.seats.map((seat) => {
            return (
              <li className="seat" key={seat.id}>
                {seat.name}
              </li>
            );
          })}
        </ul>
       <Description />
      </main>
    );
  } else {
    return <></>;
  }
}




export default Session;
