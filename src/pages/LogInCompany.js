// import "./LogInCompany.scss";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// const LogInCompany = ({ handleToken }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleEmailChange = (event) => {
//     const value = event.target.value;
//     setEmail(value);
//   };
//   const handlePasswordChange = (event) => {
//     const value = event.target.value;
//     setPassword(value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
//   // const login = async () => {
//   //   setIsLoading(true);
//   //   setErrorMessage("");
//   //   try {
//   //     if (email && password) {
//   //       // const url_server = "http://localhost:3000/user/login";
//   //       const url_server = "https://jdr-app.herokuapp.com/user/login";

//   //       const response = await axios.post(url_server, {
//   //         email: email,
//   //         password: password,
//   //       });
//   //       setUser(response.data.token);
//   //     } else {
//   //       setErrorMessage("Un des champs est vide");
//   //     }
//   //   } catch (error) {
//   //     setErrorMessage(error.message);
//   //   }
//   //   setIsLoading(false);
//   // };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit}>
//         <h1>Se connecter</h1>
//         <div className="login">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="login">
//           <input
//             type="password"
//             placeholder="Mot de passe"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <div className="login-button">
//           <input type="submit" value="Connexion" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LogInCompany;
