import { useState, useEffect } from "react";
import "./DetalhesDemanda.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";

export default function DetalhesDemanda() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const demandId = params.get("id");

  const [demanda, setDemanda] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [tipo, setTipo] = useState("");

  async function fetchDemanda() {
    try {
      const response = await api.get(`/api/demands/${demandId}`);
      const d = response.data;

      setDemanda(d);
      setStatus(d.status);
      setTipo(d.type);

    } catch (error) {
      console.error("Erro ao carregar detalhes:", error);
      alert("Erro ao buscar demanda.");
    }
  }

  useEffect(() => {
    if (demandId) fetchDemanda();
  }, [demandId]);

  if (!demanda) return <p>Carregando...</p>;

  async function salvarAlteracoes() {
    try {
      await api.put(`/api/demands/${demandId}`, {
        status,
        type: tipo,
      });

      alert("Alterações salvas com sucesso!");

    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar alterações.");
    }
  }

  return (
    <div className="detalhes-container">
      <h1>Detalhes da Demanda</h1>

      <div className="detalhes-card">

        <div className="info-group">
          <label>Provedor</label>
          <p>{demanda.provider?.nomeFantasia || "—"}</p>
        </div>

        <div className="info-group">
          <label>Título</label>
          <p>{demanda.title}</p>
        </div>

        <div className="info-group">
          <label>Descrição</label>
          <p>{demanda.description}</p>
        </div>

        <div className="info-row">
          <div className="info-group">
            <label>Tipo</label>
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="DIAGNOSTICO">Diagnóstico</option>
              <option value="MANUTENCAO">Manutenção</option>
              <option value="CONFIGURACAO">Configuração</option>
              <option value="INSTALACAO">Instalação</option>
              <option value="OUTRO">Outro</option>
            </select>
          </div>

          <div className="info-group">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="PENDENTE">Pendente</option>
              <option value="EM_ANDAMENTO">Em Andamento</option>
              <option value="CONCLUIDA">Concluída</option>
              <option value="CANCELADA">Cancelada</option>
            </select>
          </div>
        </div>

        <div className="info-group">
          <label>Data de Criação</label>
          <p>{new Date(demanda.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="buttons-container">

          <button className="btn-voltar" onClick={() => navigate("/demandas/listar")}>
            Voltar
          </button>
          <button className="btn-salvar" onClick={salvarAlteracoes}>
            Salvar Alterações
          </button>

        </div>

      </div>
    </div>
  );
}
