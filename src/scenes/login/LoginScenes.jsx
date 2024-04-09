import React from "react";
/* import { useState } from "react"; */
import "./LoginScenes.css";
/* import Forms from "./Forms"; */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./log/Log";
import Sign from "./sign/Sign";
import Reset from "./reset/Reset";
import Decoration from "../../assets/decoration.png";

function LoginScenes() {
  return (
    <Router>
      <div className="top-decoration"></div>
      <div className="login-container">
        <img src={Decoration} alt="Decoration"></img>
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="sign" element={<Sign />} />
          <Route path="reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default LoginScenes;
