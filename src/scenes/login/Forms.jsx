import React from "react";
import "./Forms.css";

function Forms({ nome, label, tipo, value, onChange }) {
  return (
    <div>
      <label htmlFor={nome}>{label}</label>
      <br />
      <input
        type={tipo}
        id={nome}
        name={nome}
        value={value}
        onChange={onChange}
        className="login-forms"
        required
      />
    </div>
  );
}

export default Forms;
