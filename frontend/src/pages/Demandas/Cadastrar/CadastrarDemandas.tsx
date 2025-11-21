import { useState } from "react";
import "./CadastrarDemandas.css";
import { ArrowLeftCircle, Save } from "lucide-react";

export default function CadastrarDemandas() {
  const [form, setForm] = useState({
    provedor: "",
    titulo: "",
    descricao: "",
    tipo: "",
    status: "",
  });

function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  setForm({ ...form, [e.target.name]: e.target.value });
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log("Demanda cadastrada:", form);
}


  return (
    <div className="demandas-form-container">
      <h1>Cadastrar Nova Demanda Técnica</h1>

      <div className="demandas-form-card">
        <h3>Detalhes da Demanda</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Provedor</label>
            <select name="provedor" value={form.provedor} onChange={handleChange} required>
              <option value="">Selecione o provedor</option>
              <option value="Provedor Alpha">Provedor Alpha</option>
              <option value="Provedor Beta">Provedor Beta</option>
              <option value="Provedor Gama">Provedor Gama</option>
            </select>
          </div>

          <div className="form-group">
            <label>Título</label>
            <input
              type="text"
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              placeholder="Título breve da demanda"
              required
            />
          </div>

          <div className="form-group">
            <label>Descrição Detalhada</label>
            <textarea
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
              placeholder="Descreva detalhadamente o problema ou a necessidade"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tipo da Demanda</label>
              <select name="tipo" value={form.tipo} onChange={handleChange} required>
                <option value="">Selecione o tipo</option>
                <option value="Diagnóstico">Diagnóstico</option>
                <option value="Manutenção">Manutenção</option>
                <option value="Configuração">Configuração</option>
                <option value="Instalação">Instalação</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status Inicial</label>
              <select name="status" value={form.status} onChange={handleChange} required>
                <option value="">Selecione o status</option>
                <option value="Em Aberto">Em Aberto</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Concluído">Concluído</option>
              </select>
            </div>
          </div>

          <div className="buttons">
            <button type="button" className="btn-back" onClick={() => window.history.back()}>
              <ArrowLeftCircle size={18} /> Voltar
            </button>

            <button type="submit" className="btn-save">
              <Save size={18} /> Salvar Demanda
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
