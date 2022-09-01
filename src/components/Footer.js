import "./Footer.scss";

import { useNavigate } from "react-router-dom";

//Import des logo
import logo from "../assets/img/Logo.png";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import social from "../assets/img/social.png";
import linkedin from "../assets/img/linkedin.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <div className="left-footer">
          <div className="logo">
            <img src={logo} onClick={() => navigate("/")} alt="" />
          </div>
        </div>
        <div className="nomadsocial">
          <h3>Nomad Social</h3>
          <span onClick={() => navigate("/loginliberal")}>Se connecter</span>
          <span onClick={() => navigate("/company")}>Entreprise</span>
          <span onClick={() => navigate("/independant")}>
            Travailleur social
          </span>
          <span onClick={() => navigate("/")}>FAQ</span>
        </div>
        <div className="discover">
          <h3>Découvrir</h3>
          <span>Le concept</span>
          <a
            href="https://nsschool.notion.site/Accueil-5960c1c3a5b44b24be1f3e205d1ea149"
            target="_blank"
          >
            NS School
          </a>
          <span>Contact</span>
        </div>
        <div className="ressource">
          <h3>Ressources</h3>
          <a
            href="https://docs.google.com/document/d/1emsgOo3nYh17c5kkSArlTsanWr1nHgXOL0vwm_H5ojM/edit#heading=h.pr3b63u52e0"
            target="_blank"
          >
            Mentions légales
          </a>
          <a
            href="https://docs.google.com/document/d/160t19dGPJfL9slesTqoHt_A6nQ5LClRaPNcLSfxsxSw/edit"
            target="_blank"
          >
            Conditions générales
          </a>
          <a
            href="https://docs.google.com/document/d/1JpOA016jqLEiL2K_F01FXBwGAVsZsL_D1X_2_67uWjo/edit#heading=h.w3ls46lgc8dy"
            target="_blank"
          >
            Confidentialité des données
          </a>
          <a
            href="https://docs.google.com/document/d/14OepOwMrYfmWmz-mogR3gWUehhK2713qRhmY89DMtNY/edit"
            target="_blank"
          >
            Mandat de facturation
          </a>
          <a
            href="https://docs.google.com/document/d/1i9fL5WPaNW4aNq4GKZPPMMN-zD0E4vRkC9ClSORGWyE/edit"
            target="_blank"
          >
            Mandat d'encaissement
          </a>
        </div>
        <div className="socialnetwork">
          <h3>Réseaux Sociaux</h3>
          <div className="logo-rs">
            <img src={facebook} onClick={() => navigate("/")} alt="" />
            <img src={instagram} onClick={() => navigate("/")} alt="" />
            <img src={social} onClick={() => navigate("/")} alt="" />
            <img src={linkedin} onClick={() => navigate("/")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
