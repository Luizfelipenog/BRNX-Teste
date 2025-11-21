import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  // Função para limpar campos
  function resetFields() {
    setLogin("");
    setSenha("");
  }

  // Limpa os campos ao entrar na página ou atualizar
  useEffect(() => {
    resetFields();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Se os campos estiverem vazios
    if (!login.trim() || !senha.trim()) {
      alert("Preencha login e senha.");
      resetFields();
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email: login,
        password: senha,
      });

      const { token, user } = response.data;

      // Salva token e usuário
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Limpa campos
      resetFields();

      // Redireciona
      navigate("/Menu");
    } catch (error) {
      alert("Login inválido!");
      console.error("Erro no login:", error);

      resetFields();
    }
  }

  return (
    <div className="home-container">

      <div className="left-side">
        <img src="/brnx.png" alt="Logo BRNX" className="logo" />
        <h2>Bem-vindo ao Sistema BRNX</h2>
        <p>Organize operações, demandas e provedores de forma simples, rápida e inteligente.</p>
      </div>

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
