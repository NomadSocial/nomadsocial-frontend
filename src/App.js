import "./app.scss";

import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "js-cookie";

// components
import Header from "./components/Header";
// pages

// Import des icones

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const handleToken = (token, user) => {
    if (token) {
      console.log("Création d'un cookie");
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      console.log("Suppression d'un cookie");
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  return (
    <Router>
      <Header handleToken={handleToken} userToken={userToken} />
    </Router>
  );
}

export default App;
