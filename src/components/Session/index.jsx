import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Description from "./Description";
import Footer from "../Footer";

function Session() {
  const { idSessao } = useParams();
  const [session, setSession] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [seatsArray, setSeatsArray] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      console.log("foiii");
      setSession(response.data);
    });
    promise.catch(console.log("deu merda"));
  }, []);

  function selectSeat(seat) {
    let seatId = parseInt(seat.name);

    let index = seatsArray.indexOf(seatId);
    if(seat.isAvailable === true){if (index > -1) {
      setSeatsArray(
        seatsArray.filter((item) => {
          return item != seatId;
        })
      );
    } else {
      setSeatsArray([...seatsArray, seatId]);
    }}else{
      alert("Esse assento não está disponível")
    }
    
  }

  console.log(seatsArray);
  function reserveSeats(e) {
    e.preventDefault();

    const seats = {
      ids: seatsArray,
      name: name,
      cpf: cpf,
    };
    console.log(seats);
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      seats
    );

    let info = {
      seats: seats,
      session: session,
    };
    promise.then(() => {
      navigate("/sucesso", { state: info });
    });
    promise.catch((response) => {
      console.log(response);
    });
  }
  console.log(session);
  if (Object.keys(session).length !== 0) {
    return (
      <main>
        <h2>Selecione o(s) assento(s)</h2>
        <ul className="seats">
          {session.seats.map((seat) => {
            return (
              <li
                onClick={() => {
                  selectSeat(seat);
                }}
                className={seat.isAvailable ? `seat` : "seat occupied"}
                key={seat.id}
              >
                {seat.name}
              </li>
            );
          })}
        </ul>
        <Description />
        <form onSubmit={reserveSeats} className="inputs">
          <label>Nome do comprador:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Digite seu nome..."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>CPF do comprador:</label>
          <input
            type="number"
            maxLength={11}
            placeholder="Digite seu CPF..."
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <button type="submit">Reservar assento(s)</button>
        </form>    
        <Footer img={session.movie.posterURL} title={session.movie.title} day={session.day.weekday} hour={session.name}/>
      </main>

    );
  } else {
    return <></>;
  }
}

export default Session;
