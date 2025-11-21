import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ListarDemandas.css";

export default function ListarDemandas() {
  const navigate = useNavigate();

  const demandas = [
    {
      titulo: "Problema de conexão na Unidade Central",
      provedor: "Provedor Alpha",
      tipo: "Diagnóstico",
      status: "Em Andamento",
      data: "2023-10-26",
    },
    {
      titulo: "Instalação de novo ponto de acesso B",
      provedor: "Provedor Beta",
      tipo: "Instalação",
      status: "Em Aberto",
      data: "2023-10-25",
    },
    {
      titulo: "Manutenção preventiva de servidores de borda",
      provedor: "Provedor Alpha",
      tipo: "Manutenção",
      status: "Concluído",
      data: "2023-10-20",
    },
  ];

  const [filtroProvedor, setFiltroProvedor] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

  const listaFiltrada = demandas.filter((d) => {
    return (
      (filtroProvedor === "" || d.provedor === filtroProvedor) &&
      (filtroStatus === "" || d.status === filtroStatus)
    );
  });

  return (
    <div className="demandas-container">
      <div className="demandas-header">
        <h1>Listagem de Demandas</h1>

        <button
          className="btn-nova-demanda"
          onClick={() => navigate("/demandas/cadastrar")}
        >
          <PlusCircle size={18} /> Nova Demanda
        </button>
      </div>

      {/* FILTROS */}
      <div className="filtros-container">
        <select
          value={filtroProvedor}
          onChange={(e) => setFiltroProvedor(e.target.value)}
        >
          <option value="">Todos os Provedores</option>
          <option value="Provedor Alpha">Provedor Alpha</option>
          <option value="Provedor Beta">Provedor Beta</option>
        </select>

        <select
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value="">Todos os Status</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Em Aberto">Em Aberto</option>
          <option value="Concluído">Concluído</option>
        </select>
      </div>

      {/* TABELA */}
      <div className="demandas-card">
        <table className="demandas-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Provedor</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Data de criação</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {listaFiltrada.map((d, index) => (
              <tr key={index}>
                <td>{d.titulo}</td>
                <td>{d.provedor}</td>
                <td>
                  <span className={`tag tag-${d.tipo.toLowerCase()}`}>
                    {d.tipo}
                  </span>
                </td>
                <td>
                  <span
                    className={`status status-${d.status
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    {d.status}
                  </span>
                </td>
                <td>{d.data}</td>
                <td>
                  <button
                    className="btn-detalhes"
                    onClick={() => navigate("/demandas/detalhes")}
                  >
                    Detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
