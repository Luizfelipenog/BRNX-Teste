import "./Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Server,
  FolderKanban,
  Wrench,
  Settings,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/brnx.png" alt="Logo BRNX" className="sidebar-logo" />
        <h2 className="sidebar-title"></h2>
      </div>

      <nav className="sidebar-nav">
        <button
          className={isActive("/menu") ? "active" : ""}
          onClick={() => navigate("/menu")}
        >
          <LayoutDashboard size={18} />
          Menu Principal
        </button>

        <button
          className={isActive("/provedores/listar") ? "active" : ""}
          onClick={() => navigate("/provedores/listar")}
        >
          <Server size={18} />
          Provedores
        </button>

        <button
          className={isActive("/demandas/listar") ? "active" : ""}
          onClick={() => navigate("/demandas/listar")}
        >
          <FolderKanban size={18} />
          Demandas
        </button>

        <button
          className={isActive("/acoes") ? "active" : ""}
          onClick={() => navigate("/acoes")}
        >
          <Wrench size={18} />
          Ações Técnicas
        </button>
      </nav>

    </aside>
  );
}
