import "./Header.scss";
import Dropdown from "react-bootstrap/Dropdown";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../assets/img/Logo.png";

const Header = ({ userToken, handleToken }) => {
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
            {!userToken ? (
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
                        <Link to="/signupcompany">Je suis une entreprise</Link>
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
                        <Link to="/logincompany">Je suis une entreprise</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <br />
              </>
            ) : (
              <button
                onClick={() => {
                  handleToken();
                }}
              >
                Déconnexion
              </button>
            )}
            <br />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
