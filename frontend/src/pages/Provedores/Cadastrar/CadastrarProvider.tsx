import { useState } from "react";
import "./CadastrarProvider.css";
import { ArrowLeftCircle, Save } from "lucide-react";
import React from "react";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

export default function ProviderForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nomeFantasia: "",
    responsavel: "",
    contatoEmail: "",
    contatoTelefone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await api.post("/api/providers", form);


      alert("Provedor cadastrado com sucesso!");

      // limpar form
      setForm({
        nomeFantasia: "",
        responsavel: "",
        contatoEmail: "",
        contatoTelefone: "",
      });

      // voltar para lista
      navigate("/provedores/listar");

    } catch (error: any) {
      console.error("Erro ao cadastrar provedor:", error);
      alert("Erro ao cadastrar provedor.");
    }
  }

  return (
    <div className="provider-form-container">
      <div className="provider-form-header">
        <h1>Cadastrar Provedor</h1>
      </div>

      <form className="provider-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome Fantasia</label>
          <input
            type="text"
            name="nomeFantasia"
            value={form.nomeFantasia}
            onChange={handleChange}
            placeholder="Digite o nome fantasia"
            required
          />
        </div>

        <div className="form-group">
          <label>Responsável</label>
          <input
            type="text"
            name="responsavel"
            value={form.responsavel}
            onChange={handleChange}
            placeholder="Digite o nome do responsável"
            required
          />
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="contatoEmail"
            value={form.contatoEmail}
            onChange={handleChange}
            placeholder="Digite o e-mail"
          />
        </div>

        <div className="form-group">
          <label>Telefone</label>
          <input
            type="text"
            name="contatoTelefone"
            value={form.contatoTelefone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="buttons">
          <button type="submit" className="btn-save">
            <Save size={18} /> Salvar
          </button>

          <button
            type="button"
            className="btn-back"
            onClick={() => navigate("/provedores")}
          >
            <ArrowLeftCircle size={18} /> Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
