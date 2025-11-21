import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./HistoricoAcoes.css";
import { ArrowLeftCircle } from "lucide-react";

export default function HistoricoAcoes() {
  const navigate = useNavigate();
  const [acoes, setAcoes] = useState([]);

  // Buscar TODAS as ações do sistema
  async function fetchAcoes() {
    try {
      const response = await api.get(`/api/actions`); // sem demandId
      setAcoes(response.data);
    } catch (error) {
      console.error("Erro ao buscar ações:", error);
      alert("Erro ao carregar histórico.");
    }
  }

  useEffect(() => {
    fetchAcoes();
  }, []);

  return (
    <div className="historico-container">
      <h1>Histórico Geral de Ações Técnicas</h1>

      <button className="btn-voltar" onClick={() => navigate("/menu")}>
        <ArrowLeftCircle size={18} /> Voltar
      </button>

      <div className="historico-card">

        {acoes.length === 0 && (
          <p className="nenhuma-acao">
            Ainda não há ações registradas no sistema.
          </p>
        )}

        {acoes.map((a: any, index) => (
          <div className="acao-item" key={a.id}>
            <div className="acao-header">
              <h3>Ação #{index + 1}</h3>

              {/* Correção aqui: usando executedAt */}
              <span className="acao-data">
                {new Date(a.executedAt).toLocaleString()}
              </span>
            </div>

            <p className="acao-descricao">{a.description}</p>

            <div className="acao-info">
              <p><strong>Técnico:</strong> {a.technician}</p>
              <p><strong>Demanda:</strong> {a.demand?.title || "—"}</p>

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
        ))}
      </div>
    </div>
  );
}
