import "./app.scss";

// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Profil from "./pages/Profil";
import HomeLiberal from "./pages/HomeLiberal";
import Mission from "./pages/Mission";

// Import des icones

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupliberal" element={<SignUpLiberal />} />
        <Route path="/signupcompany" element={<SignUpCompany />} />
        <Route path="/loginliberal" element={<LogInLiberal />} />
        <Route path="/logincompany" element={<LogInCompany />} />
        <Route path="/company" element={<Company />} />
        <Route path="/independant" element={<Independant />} />
        <Route path="/homeliberal" element={<HomeLiberal />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/mission" element={<Mission />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
