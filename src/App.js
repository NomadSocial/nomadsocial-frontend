import "./app.scss";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// components
import Header from "./components/Header";
// pages

import SignUpLiberal from "./pages/SignUpLiberal";
import SignUpCompany from "./pages/SignUpCompany";
import LogInLiberal from "./pages/LogInLiberal";
import LogInCompany from "./pages/LogInCompany";
import Home from "./pages/Home";

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signupliberal"
          element={<SignUpLiberal handleToken={handleToken} />}
        />
        <Route
          path="/signupcompany"
          element={<SignUpCompany handleToken={handleToken} />}
        />
        <Route
          path="/loginliberal"
          element={<LogInLiberal handleToken={handleToken} />}
        />
        <Route
          path="/logincompany"
          element={<LogInCompany handleToken={handleToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
