import { useState, useEffect } from "react";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ListarDemandas.css";
import api from "../../../services/api";

export default function ListarDemandas() {
  const navigate = useNavigate();

  const [demandas, setDemandas] = useState([]);
  const [provedores, setProvedores] = useState([]);

  const [filtroProvedor, setFiltroProvedor] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

async function fetchDemandas() {
  try {
    const response = await api.get("/api/demands");
    setDemandas(response.data);
  } catch (error: any) {
    console.error("Erro ao buscar demandas:", error);
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    console.error("Headers:", error.response?.headers);
  }
}

  async function fetchProvedores() {
    try {
      const response = await api.get("/api/providers");
      setProvedores(response.data);
    } catch (error) {
      console.error("Erro ao buscar provedores:", error);
    }
  }

  useEffect(() => {
    fetchDemandas();
    fetchProvedores();
  }, []);

  const listaFiltrada = demandas.filter((d: any) => {
    return (
      (filtroProvedor === "" || d.providerId === filtroProvedor) &&
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
        {/* FILTRO PROVEDOR */}
        <select
          value={filtroProvedor}
          onChange={(e) => setFiltroProvedor(e.target.value)}
        >
          <option value="">Todos os Provedores</option>
          {provedores.map((p: any) => (
            <option key={p.id} value={p.id}>
              {p.nomeFantasia}
            </option>
          ))}
        </select>

        {/* FILTRO STATUS */}
        <select
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value="">Todos os Status</option>
          <option value="PENDENTE">Pendente</option>
          <option value="EM_ANDAMENTO">Em Andamento</option>
          <option value="CONCLUIDA">Concluída</option>
          <option value="CANCELADA">Cancelada</option>
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
            {listaFiltrada.map((d: any) => (
              <tr key={d.id}>
                <td>{d.title}</td>

                <td>{d.provider?.nomeFantasia || "—"}</td>

                <td>
                  <span className={`tag tag-${d.type.toLowerCase()}`}>
                    {d.type}
                  </span>
                </td>

                <td>
                  <span
                    className={`status status-${d.status
                      .toLowerCase()
                      .replace(/_/g, "-")}`}
                  >
                    {d.status}
                  </span>
                </td>

                <td>{new Date(d.createdAt).toLocaleDateString()}</td>

                <td>
                  <button
                    className="btn-detalhes"
                    onClick={() => navigate(`/demandas/detalhes?id=${d.id}`)}
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
