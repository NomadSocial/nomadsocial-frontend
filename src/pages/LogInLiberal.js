import "./LogInLiberal.scss";
import { api_url } from "./constants";

//Import package
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogInLiberal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .get(`${api_url}/me/`, {
        auth: {
          username: email,
          password: password,
        },
      })
      .then((response) => {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data["detail"]);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
        <div className="login">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="login">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="login-button">
          <input type="submit" value="Connexion" />
        </div>
      </form>
    </div>
  );
};

export default LogInLiberal;
