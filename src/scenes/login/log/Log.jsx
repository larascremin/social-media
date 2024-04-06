import "./Log.css";
import Forms from "../Forms";

function Log() {
  return (
    <div className="log">
      <div className="log-container rect">
        <h2>Log In</h2>
        <p>
          Não tem uma conta ainda? Clique em <a href="/sign">Sign In</a>
        </p>
        <Forms nome="user" label="Nome de Usuário:" tipo="text" />
        <Forms nome="senha" label="Senha:" tipo="password" />
        <p className="forgot-password">
          Esqueceu a senha? Clique em <a href="/reset">Resetar</a>
        </p>
        <button>LOGAR</button>
      </div>
    </div>
  );
}

export default Log;
