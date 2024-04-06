import Log from "./log/Log";
import Sign from "./sign/Sign";
import Reset from "./reset/Reset";

import "./LoginScenes.css";

import Decoration from "../../assets/decoration.png";

function LoginScenes() {
  return (
    <>
      <div className="top-decoration"></div>
      <div className="login-container">
        <img src={Decoration}></img>
        <Reset />
      </div>
    </>
  );
}

export default LoginScenes;
