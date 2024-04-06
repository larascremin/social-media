import Log from "./log/Log";
import "./LoginScenes.css";

import Decoration from "../../assets/decoration.png";

function LoginScenes() {
  return (
    <>
      <div className="top-decoration"></div>
      <div className="login-container">
        <img src={Decoration}></img>
        <Log />
      </div>
    </>
  );
}

export default LoginScenes;
