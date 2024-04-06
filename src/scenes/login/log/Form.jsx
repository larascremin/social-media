import React from "react";
import "./Forms.css";

function LabelForm(props) {
  return (
    <>
      <form action="/" method="POST">
        <label htmlFor={props.nome}>{props.label}</label>
        <br />
        <input type={props.tipo} id={props.nome} name={props.nome}></input>
      </form>
    </>
  );
}

function Forms() {
  return (
    <>
      <LabelForm nome="user" label="Nome de Usuário:" tipo="text" />
      <LabelForm nome="email" label="E-mail:" tipo="email" />
      <LabelForm nome="senha" label="Senha:" tipo="password" />
    </>
  );
}

export default Forms;
