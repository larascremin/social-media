import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Log.css";
import Forms from "../Forms";
import "../LoginScenes.css";

import Decoration from "../../../assets/decoration.png";

function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log("Token de autenticação:", token);
        setIsLoggedIn(true);
        navigate("/feed"); // Redireciona para a página "/post"
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Ocorreu um erro ao fazer login:", error);
      setError("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
    }
  };

  return (
    <>
      <div className="top-decoration"></div>
      <div className="login-container">
        <img src={Decoration} alt="Decoration"></img>
        <div className="log">
          <div className="log-container rect">
            <h2>Log In</h2>
            {!isLoggedIn && (
              <form onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                <Forms
                  nome="email"
                  label="Email:"
                  tipo="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Forms
                  nome="senha"
                  label="Senha:"
                  tipo="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">LOGAR</button>
                <p>
                  Não tem uma conta ainda? Clique em <a href="/sign">Sign In</a>
                </p>
                <p className="forgot-password">
                  Esqueceu a senha? Clique em <a href="/reset">Resetar</a>
                </p>
              </form>
            )}
            {isLoggedIn && <div>Você está logado.</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Log;
