import "./Menu.css";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">

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
              onClick={() => navigate("/provedores/listar")}
            >
              Listar Provedores
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/provedores/cadastrar")}
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
            <button className="btn-primary">Registrar Ação Técnica</button>
            <button className="btn-secondary">Consultar Histórico</button>
          </div>

          {/* CARD SISTEMA */}
          <div className="card">
            <h3>Sistema</h3>
            <button className="btn-primary" onClick={() => navigate("/")}>
              Logout
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
