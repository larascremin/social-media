import React from "react";
import "./Forms.css";

function Forms(props) {
  return (
    <>
      <form action="/" method="POST">
        <label htmlFor={props.nome}>{props.label}</label>
        <br />
        <input
          type={props.tipo}
          id={props.nome}
          name={props.nome}
          required
        ></input>
      </form>
    </>
  );
}

export default Forms;
