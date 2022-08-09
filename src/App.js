import "./app.scss";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages

import SignUpLiberal from "./pages/SignUpLiberal";
import SignUpCompany from "./pages/SignUpCompany";
import LogInLiberal from "./pages/LogInLiberal";
import LogInCompany from "./pages/LogInCompany";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Independant from "./pages/Independant";
import Publish from "./pages/Publish";
import Offers from "./pages/Offers";

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
        <Route
          path="/company"
          element={<Company handleToken={handleToken} />}
        />
        <Route
          path="/independant"
          element={<Independant handleToken={handleToken} />}
        />
        <Route path="/publier" element={<Publish />} />
        <Route path="/offres" element={<Offers handleToken={handleToken} />} />
      </Routes>
      <Footer handleToken={handleToken} userToken={userToken} />
    </Router>
  );
}

export default App;
