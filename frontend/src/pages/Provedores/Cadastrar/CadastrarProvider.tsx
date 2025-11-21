import { useState } from "react";
import "./CadastrarProvider.css";
import { ArrowLeftCircle, Save } from "lucide-react";
import React from "react";

export default function ProviderForm() {
  const [form, setForm] = useState({
    nome: "",
    responsavel: "",
    email: "",
    telefone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Dados enviados:", form);
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
            name="nome"
            value={form.nome}
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
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Digite o e-mail"
            required
          />
        </div>

        <div className="form-group">
          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
          />
        </div>

        <div className="buttons">
          <button type="submit" className="btn-save">
            <Save size={18} /> Salvar
          </button>

          <button
            type="button"
            className="btn-back"
            onClick={() => window.history.back()}
          >
            <ArrowLeftCircle size={18} /> Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
