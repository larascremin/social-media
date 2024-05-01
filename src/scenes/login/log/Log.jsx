import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Log.css";
import Forms from "../Forms";
import "../LoginScenes.css";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../state";
import Decoration from "../../../assets/decoration.png";
import { useCookies } from "react-cookie";

const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = cookies.userToken;
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, [cookies.userToken]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });
      setError(null);
      await login({ email, password });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setError(error.errors.join(" "));
      } else {
        setError(
          "Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde."
        );
      }
    }
  };

  const login = async (values) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      setIsLoggedIn(true);
      setCookie("userToken", loggedIn.token, { path: "/" });
      navigate("/home");
    } else {
      setError(
        "Credenciais inválidas. Por favor, verifique seu e-mail e senha."
      );
    }
  };

  const handleLogout = () => {
    removeCookie("userToken", { path: "/" });
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="top-decoration"></div>
      <div className="login-container">
        <img src={Decoration} alt="Decoration"></img>
        <div className="log">
          <div className="log-container rect">
            <h1>Log In</h1>
            <p>
              Não tem uma conta ainda? Clique em <a href="/sign">Sign In</a>
            </p>
            {!isLoggedIn && (
              <form onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                <Forms
                  nome="email"
                  label="Email:"
                  tipo="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Forms
                  nome="senha"
                  label="Senha:"
                  tipo="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="forgot-password">
                  Esqueceu a senha? Clique em <a href="/reset">Resetar</a>
                </p>
                <button type="submit">LOGAR</button>
              </form>
            )}
            {isLoggedIn && (
              <div>
                <p>Você está logado.</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Log;
