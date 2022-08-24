import "./Footer.scss";
import { Link } from "react-router-dom";
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
          <span onClick={() => navigate("/independent")}>
            Travailleur social
          </span>
          <span onClick={() => navigate("/")}>FAQ</span>
        </div>
        <div className="discover">
          <h3>Découvrir</h3>
          <span>Le concept</span>
          <span>La NS School</span>
          <span>Contact</span>
        </div>
        <div className="ressource">
          <h3>Ressources</h3>
          <a href="https://fr.indeed.com/">Mentions légales</a>
          <span>Conditions générales</span>
          <span>Données personnelles</span>
          <span>Mandat de facturation</span>
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
