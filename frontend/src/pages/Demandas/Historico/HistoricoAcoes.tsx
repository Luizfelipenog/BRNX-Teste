import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./HistoricoAcoes.css";
import { ArrowLeftCircle } from "lucide-react";

export default function HistoricoAcoes() {
  const navigate = useNavigate();
  const [acoes, setAcoes] = useState([]);
  const [provedores, setProvedores] = useState<any[]>([]);
  const [filtroProvedor, setFiltroProvedor] = useState(""); // <<< NOVO

  // Buscar TODAS as ações do sistema
  async function fetchAcoes() {
    try {
      const response = await api.get(`/api/actions`);
      setAcoes(response.data);
    } catch (error) {
      console.error("Erro ao buscar ações:", error);
      alert("Erro ao carregar histórico.");
    }
  }

  // Buscar provedores 
  async function fetchProvedores() {
    try {
      const response = await api.get("/api/providers");
      setProvedores(response.data);
    } catch (error) {
      console.error("Erro ao buscar provedores:", error);
    }
  }

  useEffect(() => {
    fetchAcoes();
    fetchProvedores();
  }, []);

  // <<< FILTRAR AÇÕES PELO PROVEDOR SELECIONADO
  const acoesFiltradas = acoes.filter((a: any) => {
    if (!filtroProvedor) return true; // se não tem filtro, mostra todas
    return a.demand?.providerId === filtroProvedor;
  });

  return (
    <div className="historico-container">
      <h1>Histórico Geral de Ações Técnicas</h1>

      <button className="btn-voltar" onClick={() => navigate("/menu")}>
        <ArrowLeftCircle size={18} /> Voltar
      </button>

      {/* 🔍 FILTRO POR PROVEDOR */}
      <div className="filtro-container">
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
      </div>

      <div className="historico-card">
        {acoesFiltradas.length === 0 && (
          <p className="nenhuma-acao">Nenhuma ação encontrada.</p>
        )}

        {acoesFiltradas.map((a: any, index) => {
          const provedor = provedores.find(
            (p: any) => p.id === a.demand?.providerId
          );

          return (
            <div className="acao-item" key={a.id}>
              <div className="acao-header">
                <h3>Ação #{index + 1}</h3>

                <span className="acao-data">
                  {new Date(a.executedAt).toLocaleString()}
                </span>
              </div>

              <p className="acao-descricao">{a.description}</p>

              <div className="acao-info">
                <p>
                  <strong>Demanda:</strong> {a.demand?.title || "—"}
                </p>

                <p>
                  <strong>Provedor:</strong> {provedor?.nomeFantasia || "—"}
                </p>

                <p>
                  <strong>Responsável:</strong> {provedor?.responsavel || "—"}
                </p>

                <p>
                  <strong>Telefone:</strong> {provedor?.contatoTelefone || "—"}
                </p>

                <p>
                  <strong>Email:</strong> {provedor?.contatoEmail || "—"}
                </p>

                {a.statusBefore && a.statusAfter && (
                  <p className="acao-status-change">
                    <strong>Status alterado:</strong>{" "}
                    <span className="status-before">{a.statusBefore}</span>
                    {" → "}
                    <span className="status-after">{a.statusAfter}</span>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
