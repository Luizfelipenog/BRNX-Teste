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


    navigate("/Menu");
  }
  return (
  <div className="home-container">

    {/* LADO ESQUERDO */}
    <div className="left-side">
      <img src="/brnx.png" alt="Logo BRNX" className="logo" />
      <h2>Bem-vindo ao Sistema BRNX</h2>
      <p>Organize operações, demandas e provedores de forma simples, rápida e inteligente.</p>
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
