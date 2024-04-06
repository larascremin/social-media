import Log from "./log/Log";
import Sign from "./sign/Sign";
import Reset from "./reset/Reset";
import Decoration from "../../assets/decoration.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./LoginScenes.css";
import { BrowserRouter } from "react-router-dom";

function LoginScenes() {
  return (
    <BrowserRouter>
      <div className="top-decoration"></div>
      <div className="login-container">
        <img src={Decoration}></img>
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="sign" element={<Sign />} />
          <Route path="reset" element={<Reset />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default LoginScenes;
