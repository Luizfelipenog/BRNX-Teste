import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Provedor from "./pages/Provedores/Listar/ProvidersList";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Provedores/Listar" element={<Provedor />} />

    </Routes>
  );
}


//Ele controla quais páginas existem e como navegar entre elas.