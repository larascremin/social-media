import "./Reset.css";
import Forms from "../Forms";
import Decoration from "../../../assets/decoration.png";

function Reset() {
  return (
    <>
      <div className="top-decoration"></div>
      <div className="login-container">
        <img src={Decoration} alt="Decoration"></img>
        <div className="reset">
          <div className="reset-container rect">
            <h2>Redefinir</h2>
            <p>
              Esqueceu sua senha? Enviaremos uma código de verificação. Depois
              faça <a href="/">Login</a>.
            </p>
            <Forms nome="email" label="Insira seu e-mail:" tipo="email" />

            <button>ENVIAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reset;
