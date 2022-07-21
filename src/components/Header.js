import "./Header.scss";

import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/img/Logo.png";

const Header = ({ userToken, handleToken }) => {
  // const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="left-header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="right-header">
          <div className="contact">
            {!userToken ? (
              <>
                <Link to="/signup">
                  <button>S'inscrire</button>
                </Link>
                <br />
                <span className="space">{"|"}</span>
                <Link to="/login">
                  <button>Connexion</button>
                </Link>
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
