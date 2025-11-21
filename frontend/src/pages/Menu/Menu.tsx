import "./Menu.css";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="main-header">
          <div className="main-header-line">
            <h1>Menu Principal</h1>
          </div>
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

            <button
              className="btn-primary"
              onClick={() => navigate("/demandas/listar")}
            >
              Listar Demandas
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/demandas/cadastrar")}
            >
              Criar Nova Demanda
            </button>
          </div>


          {/* CARD AÇÕES TÉCNICAS */}
          <div className="card">
            <h3>Ações Técnicas</h3>
              <button
                className="btn-primary"
                onClick={() => navigate(`/demandas/listar`)}
              >
                Registrar Ação Técnica
              </button>
              <button
                className="btn-secondary"
                onClick={() => navigate(`/demandas/historico`)}
              >
                Consultar Histórico
              </button>
          </div>

          {/* CARD SISTEMA */}
          <div className="card">
            <h3>Sistema</h3>
            <button className="btn btn-danger" onClick={() => navigate("/")}>
              Logout
            </button>
          </div>

        </div>

                {/* SEÇÃO SOBRE A EMPRESA */}
        <section className="about-section">
          <div className="about-header">
            <h2>Sobre a BRNX</h2>
            <img src="/brnx.png" alt="Logo BRNX" className="about-logo" />
          </div>

          <p>
            A BRNX é uma plataforma desenvolvida para otimizar o gerenciamento de provedores,
            demandas operacionais e ações técnicas em campo. Nosso objetivo é oferecer um
            ambiente simples, rápido e eficiente para que equipes possam desempenhar suas
            atividades com autonomia e clareza.
          </p>
        </section>

      </main>
    </div>
  );
}
