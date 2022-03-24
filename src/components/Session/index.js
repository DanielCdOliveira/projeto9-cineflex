import { Link , useParams} from "react-router-dom";

function Session() {
  const idMovie = useParams()
  console.log(idMovie)
  
  return <Link to="/sucesso">Ir para fim</Link>;
}

export default Session;
