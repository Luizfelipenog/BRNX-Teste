import { useState, useEffect } from "react";
import "./CadastrarDemandas.css";
import { ArrowLeftCircle, Save } from "lucide-react";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

export default function CadastrarDemandas() {
  const navigate = useNavigate();

  const [providers, setProviders] = useState([]);

  const [form, setForm] = useState({
    providerId: "",
    title: "",
    description: "",
    type: "",
    status: "",
  });

  // Buscar provedores reais
  async function fetchProviders() {
    try {
      const response = await api.get("/api/providers");
      setProviders(response.data);
    } catch (error) {
      console.error("Erro ao carregar provedores:", error);
    }
  }

  useEffect(() => {
    fetchProviders();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      // Converter campos do formulário para o formato que o backend espera
      const payload = {
        providerId: form.providerId,
        title: form.title,
        description: form.description,
        type: form.type as
          | "DIAGNOSTICO"
          | "MANUTENCAO"
          | "CONFIGURACAO"
          | "INSTALACAO"
          | "OUTRO",
        status: form.status as
          | "PENDENTE"
          | "EM_ANDAMENTO"
          | "CONCLUIDA"
          | "CANCELADA",
      };

      await api.post("/api/demands", payload);

      alert("Demanda cadastrada com sucesso!");

      // reset
      setForm({
        providerId: "",
        title: "",
        description: "",
        type: "",
        status: "",
      });

      navigate("/demandas/listar");
    } catch (error) {
      console.error("Erro ao cadastrar demanda:", error);
      alert("Erro ao cadastrar demanda.");
    }
  }

  return (
    <div className="demandas-form-container">
      <h1>Cadastrar Nova Demanda Técnica</h1>

      <div className="demandas-form-card">
        <h3>Detalhes da Demanda</h3>

        <form onSubmit={handleSubmit}>
          {/* SELECT DE PROVEDORES */}
          <div className="form-group">
            <label>Provedor</label>
            <select
              name="providerId"
              value={form.providerId}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o provedor</option>
              {providers.map((p: any) => (
                <option key={p.id} value={p.id}>
                  {p.nomeFantasia}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Título</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Título breve da demanda"
              required
            />
          </div>

          <div className="form-group">
            <label>Descrição Detalhada</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Descreva o problema ou necessidade"
              required
            />
          </div>

          <div className="form-row">
            {/* TIPO */}
            <div className="form-group">
              <label>Tipo da Demanda</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="DIAGNOSTICO">Diagnóstico</option>
                <option value="MANUTENCAO">Manutenção</option>
                <option value="CONFIGURACAO">Configuração</option>
                <option value="INSTALACAO">Instalação</option>
                <option value="OUTRO">Outro</option>
              </select>
            </div>

            {/* STATUS */}
            <div className="form-group">
              <label>Status Inicial</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="PENDENTE">Pendente</option>
                <option value="EM_ANDAMENTO">Em Andamento</option>
                <option value="CONCLUIDA">Concluída</option>
                <option value="CANCELADA">Cancelada</option>
              </select>
            </div>
          </div>

          <div className="buttons">
            <button
              type="button"
              className="btn-back"
              onClick={() => navigate("/demandas/listar")}
            >
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
