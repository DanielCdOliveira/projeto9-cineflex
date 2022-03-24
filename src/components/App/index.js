import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Start from "../Start";
import Movie from "../Movie";
import Session from "../Session";
import End from "../End";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/filme/:idFilme" element={<Movie />}></Route>
          <Route path="/sessao" element={<Session />}></Route>
          <Route path="/sucesso" element={<End />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
