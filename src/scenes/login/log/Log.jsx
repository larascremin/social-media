import "./Log.css";
import Forms from "./Form";

function Log() {
  return (
    <div className="log">
      <div className="log-container">
        <h2>Log In</h2>
        <p>
          Não tem uma conta ainda? Clique em <a href="#sign">Sign In</a>
        </p>
        <Forms />
        <button>LOGAR</button>
      </div>
    </div>
  );
}

export default Log;
