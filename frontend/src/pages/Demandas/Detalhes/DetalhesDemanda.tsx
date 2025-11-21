import { useState } from "react";
import "./DetalhesDemanda.css";

export default function DetalhesDemanda() {
  const demanda = {
    provedor: "Provedor Alpha",
    titulo: "Problema de conexão na Unidade Central",
    descricao: "Detalhamento completo do problema, incluindo histórico, testes realizados e requisitos para solução.",
    tipo: "Diagnóstico",
    status: "Em Andamento",
    data: "2023-10-26",
  };

  const [status, setStatus] = useState(demanda.status);

function handleStatusChange(
  e: React.ChangeEvent<HTMLSelectElement>
) {
  setStatus(e.target.value);
}

  return (
    <div className="detalhes-container">
      <h1>Detalhes da Demanda</h1>

      <div className="detalhes-card">
        <div className="info-group">
          <label>Provedor</label>
          <p>{demanda.provedor}</p>
        </div>

        <div className="info-group">
          <label>Título</label>
          <p>{demanda.titulo}</p>
        </div>

        <div className="info-group">
          <label>Descrição</label>
          <p>{demanda.descricao}</p>
        </div>

        <div className="info-row">
          <div className="info-group">
            <label>Tipo</label>
            <p>{demanda.tipo}</p>
          </div>

          <div className="info-group">
            <label>Status</label>
            <select value={status} onChange={handleStatusChange}>
              <option value="Em Aberto">Em Aberto</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluído">Concluído</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
        </div>

        <div className="info-group">
          <label>Data de Criação</label>
          <p>{demanda.data}</p>
        </div>
      </div>
    </div>
  );
}
