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
            <h1>Redefinir Senha</h1>
            <p>
              Preencha o campo abaixo e enviaremos uma código de verificação.
              Depois faça <a href="/">Login</a> aqui.
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
