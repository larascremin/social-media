import React, { useState } from "react";
import "./Sign.css";
import Forms from "../Forms";
import { useNavigate } from "react-router-dom";
import Decoration from "../../../assets/decoration.png";

function Sign() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");

    fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Dados enviados com sucesso!");
        } else {
          console.error("Erro ao enviar os dados.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
      });
  };

  return (
    <>
      <div className="top-decoration"></div>
      <div className="login-container">
        <img src={Decoration} alt="Decoration"></img>
        <div className="sign">
          <div className="sign-container rect">
            <h1>Sign In</h1>
            <p>
              Já tem uma conta? Acesse agora clicando em <a href="/">Log In</a>
            </p>
            <form onSubmit={handleSubmit}>
              <Forms
                nome="username"
                label="Nome de Usuário:"
                tipo="text"
                value={formData.username}
                onChange={handleChange}
              />
              <Forms
                nome="email"
                label="E-mail:"
                tipo="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Forms
                nome="password"
                label="Senha:"
                tipo="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit">ENTRAR</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;
