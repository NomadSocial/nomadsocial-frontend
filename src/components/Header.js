import "./Header.scss";
import Dropdown from "react-bootstrap/Dropdown";

import { useNavigate } from "react-router-dom";

//Image
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
          <span
            className="nav-menu-renfort"
            onClick={() => navigate("/renfort")}
          >
            SOS Renfort
          </span>
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
                  <button
                    className="nav-menu"
                    onClick={() => navigate("/team")}
                  >
                    Nomad Social
                  </button>
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
                      <Dropdown.Item value="indépendant" href="/signupliberal">
                        Je suis un Indépendant
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
                      <Dropdown.Item value="indépendant" href="/loginliberal">
                        Je suis un Indépendant
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
                  <span className="nav-menu" onClick={() => navigate("/team")}>
                    Nomad Social
                  </span>
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
                      <Dropdown.Item value="home" href="/homeliberal">
                        Home
                      </Dropdown.Item>

                      <Dropdown.Item value="profil" href="/profil">
                        Profil
                      </Dropdown.Item>
                      <Dropdown.Item value="mission" href="/mission">
                        Missions du moment
                      </Dropdown.Item>
                      <Dropdown.Item
                        value="mission"
                        href="https://nsschool.notion.site/Accueil-NS-School-5960c1c3a5b44b24be1f3e205d1ea149"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        NS School
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
