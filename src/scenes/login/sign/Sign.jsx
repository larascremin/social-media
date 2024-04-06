import "./Sign.css";
import Forms from "../Forms";

function Sign() {
  return (
    <div className="sign">
      <div className="sign-container rect">
        <h2>Sign In</h2>
        <p>
          Já tem uma conta? Acesse agora clicando em <a href="#login">Log In</a>
        </p>
        <Forms nome="user" label="Nome de Usuário:" tipo="text" />
        <Forms nome="email" label="E-mail:" tipo="email" />
        <Forms nome="senha" label="Senha:" tipo="password" />
        <button>ENTRAR</button>
      </div>
    </div>
  );
}

export default Sign;
