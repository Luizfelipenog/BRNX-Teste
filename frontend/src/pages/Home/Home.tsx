import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLogin("");
    setSenha("");


    navigate("/menu");
  }
  return (
  <div className="home-container">

    {/* LADO ESQUERDO */}
    <div className="left-side">
      <img src="/logo.png" alt="Logo BRNX" className="logo" />
      <h2>Bem-vindo ao Sistema BRNX</h2>
      <p>Gerencie provedores, demandas e operações com agilidade.</p>
    </div>

    {/* LADO DIREITO (FORMULÁRIO) */}
    <div className="right-side">
      <div className="form-box">
        <h1>Acessar Sistema</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="E-mail ou Usuário"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required

          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>

  </div>
);

}
