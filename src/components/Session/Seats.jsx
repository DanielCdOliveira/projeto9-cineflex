import { useState } from "react";

function Seats(props) {

  return (
    <ul className="seats">
      {props.session.seats.map((seat, index) => (
        <CreatSeat key={index} seat={seat} selectSeat={props.selectSeat} />
      ))}
    </ul>
  );
}

function CreatSeat(props) {
  const { seat, selectSeat } = props;
  const [selected, setSelected] = useState("");

  function changeColor() {
    if (selected === "") {
      setSelected("selected");
    } else {
      setSelected("");
    }
  }
  return (
    <li
      onClick={() => {
        props.selectSeat(seat);
        changeColor();
      }}
      className={seat.isAvailable ? `seat ${selected}` : "seat occupied"}
      key={seat.id}
    >
      {seat.name}
    </li>
  );
}

export default Seats;
