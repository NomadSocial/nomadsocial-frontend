import "./SignUpLiberal.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpLiberal = () => {
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleUserChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleUserLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      const url_server = `${api_url}/entrepreneurs/register/`;
      axios
        .post(url_server, {
          email: email,
          first_name: userName,
          last_name: userLastName,
          password: password,
          phone: phone,
        })
        .then((response) => navigate("/"))
        .catch((error) => console.log(error));
    } else {
      alert("Mot de passe non identique");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>
        <div className="user">
          <input
            type="text"
            placeholder="Prénom*"
            value={userName}
            onChange={handleUserChange}
          />
          <input
            type="text"
            placeholder="Nom*"
            value={userLastName}
            onChange={handleUserLastNameChange}
          />
        </div>
        <div className="contact">
          <input
            type="mail"
            placeholder="Email*"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="contact">
          <input
            type="phone"
            placeholder="Numéro de téléphone*"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="contact">
          <input
            type="password"
            placeholder="Mot de passe*"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="contact">
          <input
            type="password"
            placeholder="Confirmation du mot de passe*"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="sign">
          <input type="submit" value="S'inscrire" />
        </div>
      </form>
    </div>
  );
};

export default SignUpLiberal;
