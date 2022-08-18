import "./Header.scss";
import Dropdown from "react-bootstrap/Dropdown";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../assets/img/Logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="left-header">
          <div className="logo">
            <img src={logo} onClick={() => navigate("/")} alt="" />
          </div>
        </div>
        <div>
          <span className="nav-menu-renfort">SOS Renfort</span>
        </div>
        <div className="right-header">
          <div className="contact">
            {!localStorage.getItem("email") ? (
              <>
                <div>
                  <button
                    className="nav-menu"
                    onClick={() => navigate("/company")}
                  >
                    Entreprise
                  </button>
                </div>
                <div>
                  <button
                    className="nav-menu"
                    onClick={() => navigate("/independant")}
                  >
                    Indépendant
                  </button>
                </div>
                <div>
                  <span className="nav-menu">Nomad Social</span>
                </div>
                <div className="button">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdown"
                      danger="info"
                      id="dropdown-basic"
                    >
                      S'inscrire
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item value="indépendant">
                        <Link to="/signupliberal">Je suis un Indépendant </Link>
                      </Dropdown.Item>

                      <Dropdown.Item value="company">
                        <Link to="/signupcompany">Je suis une Entreprise</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdown"
                      danger="info"
                      id="dropdown-basic"
                    >
                      Se connecter
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item value="indépendant">
                        <Link to="/loginliberal">Je suis un Indépendant</Link>
                      </Dropdown.Item>
                      <Dropdown.Item value="company">
                        <Link to="/logincompany">Je suis une Entreprise</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <br />
              </>
            ) : (
              <>
                <div>
                  <button
                    className="nav-menu"
                    onClick={() => navigate("/company")}
                  >
                    Entreprise
                  </button>
                </div>
                <div>
                  <button
                    className="nav-menu"
                    onClick={() => navigate("/independant")}
                  >
                    Indépendant
                  </button>
                </div>
                <div>
                  <span className="nav-menu">Nomad Social</span>
                </div>
                <button
                  className="nav-menu"
                  onClick={() => {
                    localStorage.clear();
                    alert("vous êtes déconnectés");
                    navigate("/");
                  }}
                >
                  Déconnexion
                </button>
                <div className="button">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdown"
                      danger="info"
                      id="dropdown-basic"
                    >
                      Mon compte
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item value="home">
                        <Link to="/homeliberal"> Home </Link>
                      </Dropdown.Item>

                      <Dropdown.Item value="profil">
                        <Link to="/profil">Profil</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown></Dropdown>
                </div>
              </>
            )}

            <br />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
