import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import ProvidersList from "./pages/Provedores/Listar/ProvidersList";

import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  return (
    <Routes>

      {/* Tela de login — sem sidebar */}
      <Route path="/" element={<Home />} />

      {/* Todas as telas abaixo possuem Sidebar */}
      <Route element={<DashboardLayout />}>

        <Route path="/menu" element={<Menu />} />
        <Route path="/provedores/listar" element={<ProvidersList />} />

      </Route>

    </Routes>
  );
}
