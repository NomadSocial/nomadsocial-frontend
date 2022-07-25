import { useState } from "react";
// import axios from "axios";

const SignUpCompany = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleUserChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleNewsletterChange = () => {
    setNewsletter(!newsletter);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  //     try {
  //       const response = await axios.post(
  //         "https://vinted-backend-app.herokuapp.com/user/signup",
  //         {
  //           email: email,
  //           username: username,
  //           password: password,
  //           newsletter: newsletter,
  //         }
  //       );
  //       console.log(response.data);
  //       handleToken(response.data.token);
  //       navigate("/");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signup-container">
        <h1>S'inscrire</h1>

        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="pseudo"
          value={username}
          onChange={handleUserChange}
        />
        <input
          type="password"
          placeholder="mot de passe"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="checkbox"
          checked={newsletter}
          onChange={handleNewsletterChange}
        />
        <span>S'inscrire à la newsletter pro</span>
        <input className="sign" type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default SignUpCompany;
