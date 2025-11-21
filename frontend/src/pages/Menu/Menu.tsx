import "./Menu.css";
import { useNavigate } from "react-router-dom";






import {
  LayoutDashboard,
  Server,
  FolderKanban,
  Wrench
} from "lucide-react";
export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="/brnx.png" alt="Logo BRNX" className="sidebar-logo" />
        </div>

        <nav className="sidebar-nav">
          <button className="active">
            <LayoutDashboard size={20} className="icon" />
            <span>Menu Principal</span>
          </button>

          <button>
            <Server size={20} className="icon" />
            <span>Provedores</span>
          </button>

          <button>
            <FolderKanban size={20} className="icon" />
            <span>Demandas</span>
          </button>

          <button>
            <Wrench size={20} className="icon" />
            <span>Ações Técnicas</span>
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="main-header">
          <h1>Menu Principal</h1>
          <p>Selecione uma opção abaixo para gerenciar o sistema BRNX.</p>
        </header>

        <div className="cards-grid">

          {/* CARD PROVEDORES */}
          <div className="card">
            <h3>Provedores</h3>

            <button
              className="btn-primary"
              onClick={() => navigate("/Provedores/Listar")}
            >
              Listar Provedores
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/Provedores/Cadastrar")}
            >
              Cadastrar Provedor
            </button>
          </div>

          {/* CARD DEMANDAS */}
          <div className="card">
            <h3>Demandas</h3>
            <button className="btn-primary">Listar Demandas</button>
            <button className="btn-secondary">Criar Nova Demanda</button>
          </div>

          {/* CARD AÇÕES TÉCNICAS */}
          <div className="card">
            <h3>Ações Técnicas</h3>
            <button className="btn-secondary">Registrar Ação Técnica</button>
            <button className="btn-secondary">Consultar Histórico</button>
          </div>

          {/* CARD SISTEMA */}
          <div className="card">
            <h3>Sistema</h3>
            <button className="btn-secondary" onClick={() => navigate("/")}>
              Logout
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
