import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />

    </Routes>
  );
}


//Ele controla quais páginas existem e como navegar entre elas.