import "./SignUpCompany.scss";

import { useState } from "react";
// import axios from "axios";

const SignUpCompany = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userName, setName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log(value);
  };

  const handleUserChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleCompanyNameChange = (event) => {
    const value = event.target.value;
    setCompanyName(value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  // const signUp = async () => {
  //   setErrorMessage("");
  //   setIsLoading(true);
  //   try {
  //     if (password === confirmPassword) {

  //       const url_server = "https://jdr-app.herokuapp.com/user/signup";

  //       const response = await axios.post(url_server, {
  //         email: email,
  //         username: username,
  //         password: password,
  //       });

  //       console.log(response.data);
  //       //       handleToken(response.data.token);
  //       //       navigate("/");
  //     } else {
  //       setErrorMessage("Les mots de passes ne sont pas identiques");
  //     }
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   }
  //   setIsLoading(false);
  // };

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
        </div>
        <div className="user">
          <input
            type="text"
            placeholder="Nom*"
            value={userLastName}
            onChange={handleUserLastNameChange}
          />
        </div>
        <div className="contact">
          <input
            type="text"
            placeholder="Nom de l'entreprise*"
            value={companyName}
            onChange={handleCompanyNameChange}
          />
        </div>
        <div className="contact">
          <input
            type="text"
            placeholder="Email*"
            value={email}
            onChange={handleEmailChange}
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

export default SignUpCompany;
