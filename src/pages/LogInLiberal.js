import "./LogInLiberal.scss";

import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogInLiberal = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    console.log(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const response = await axios.post("http://localhost:3100/loginliberal", {
    //     email: email,
    //     password: password,
    //   });
    //   console.log(response.data);
    //   console.log(response.data.token);
    //   handleToken(response.data.token);
    //   navigate("/");
    // } catch (error) {
    //   console.log(error.response);
    // }
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
