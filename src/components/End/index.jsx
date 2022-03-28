import { useLocation, Link } from "react-router-dom";

function Start() {
  const { state } = useLocation();
  function maskCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }
  return (
    <main className="end">
      <h2>Pedido feito com sucesso!</h2>
      <div className="info">
        <h4>Filme e sessão</h4>
        <p>{state.session.movie.title}</p>
        <p>
          {state.session.day.date} {state.session.name}
        </p>
      </div>
      <div className="info">
        <h4>Ingressos</h4>
        {state.seats.ids.map((id, index) => {
          return <p key={index}>Assento {id}</p>;
        })}
      </div>
      <div className="info">
        <h4>Comprador</h4>
        <p>Nome: {state.seats.name}</p>
        <p>CPF: {maskCpf(state.seats.cpf)}</p>
      </div>
      <Link to="/">
        <button className="button-home">Voltar pra Home</button>
      </Link>
    </main>
  );
}

export default Start;
