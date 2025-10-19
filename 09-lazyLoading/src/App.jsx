//O lazy cria componentes sob demanda;
// Eu posso não importar certos componentes para que quando o App inicie não trave
//Isso chama-se code Splitting.
// <Suspense> Ele mostra um conteúdo temporário (fallback) enquanto o componente está sendo baixado.

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">Sobre</Link>
      </nav>

      <Suspense fallback={<div>Carregando página...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

