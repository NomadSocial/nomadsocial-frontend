import "./app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import SignUpLiberal from "./pages/SignUpLiberal";
import LogInLiberal from "./pages/LogInLiberal";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Independant from "./pages/Independant";
import Profil from "./pages/Profil";
import HomeLiberal from "./pages/HomeLiberal";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import Renfort from "./pages/Renfort";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/independant" element={<Independant />} />
        <Route path="/homeliberal" element={<HomeLiberal />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/renfort" element={<Renfort />} />
        <Route path="/signupliberal" element={<SignUpLiberal />} />
        <Route path="/loginliberal" element={<LogInLiberal />} />
      </Routes>
    </Router>
  );
}

export default App;
