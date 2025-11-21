import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}


//Ele controla quais páginas existem e como navegar entre elas.