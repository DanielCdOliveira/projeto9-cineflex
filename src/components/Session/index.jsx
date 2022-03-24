import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Session() {
  const { idSessao } = useParams();
  console.log(idSessao);

  const [session, setSession] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setSession(response);
    });
  }, []);
  
  console.log(session)

  
  return <Link to="/sucesso">Ir para fim</Link>;
}

export default Session;
