import "./Menu.css";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-logo">BRNX</span>
        </div>

        <nav className="sidebar-nav">
          <button className="active">Menu Principal</button>
          <button>Provedores</button>
          <button>Demandas</button>
          <button>Ações Técnicas</button>
          <button>Configurações</button>
          <button onClick={() => navigate("/")}>Logout</button>
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
            <button className="btn-primary">Listar Provedores</button>
            <button className="btn-secondary">Cadastrar Provedor</button>
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
