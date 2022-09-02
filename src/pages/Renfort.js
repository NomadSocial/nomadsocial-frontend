import "./Renfort.scss";
import Footer from "../components/Footer";

//Images
import enregistrement from "../assets/img/enregistrement.png";
import laptop from "../assets/img/laptop.png";
import match from "../assets/img/match.png";
import missiondeux from "../assets/img/mission2.png";
import missionfinal from "../assets/img/missionfinal.png";
import sos from "../assets/img/sos.png";

const Renfort = () => {
  return (
    <>
      <div className="main">
        <div className="top-main">
          <div className="title-entreprise">
            <img src={sos} alt="" />
            <h1>SOS Renfort</h1>
            <br />
            <br />
          </div>
          <div className="list-one">
            <div>
              <img src={enregistrement} alt="" />
              <p> Je contacte Nomad Social</p>
            </div>
            <p> {">"} </p>
            <div>
              <img src={missiondeux} alt="" />
              <p> Ma mission est postée en SOS Renfort</p>
            </div>
            <p> {">"} </p>
            <div>
              <img src={match} alt="" />
              <p>
                L'algorithme Nomad Social propose la mission aux bons profils
                pour démarrer dans les 48H
              </p>
            </div>
            <p> {">"} </p>
            <div>
              <img src={laptop} alt="" />
              <p> Je valide le profil qui m'intéresse</p>
            </div>
            <p> {">"} </p>
            <div>
              <img src={missionfinal} alt="" />
              <p> L'indépendant social démarre sa mission en urgence !</p>
            </div>
          </div>
        </div>
        <div className="middle-renfort">
          <h1>Quelle est l'utilité de SOS Renfort</h1>
          <p>
            SOS Renfort vous sera utile dans le cas d'un arrêt maladie, un cas
            contact covid positif, un pic d'activité ou pour tout autre
            événements imprévu dans votre service.
          </p>
          <p className="text-blue">
            L'objectif : avoir toujours votre effectif complet afin d'apporter
            l'aide, à la population fragilisée dont vous vous occupez, sans
            noyer sous des dossiers supplémentaires le reste de votre équipe.
          </p>
          <p>Un pilotage de votre équipe 0 stress, 0 sacrifice !</p>
          <div className="button-renfort">
            <button>
              <a href="mailto:hello@nomad-social.com">
                Je poste un SOS Renfort
              </a>
            </button>
          </div>

          <p className="italic">
            Trouvez en urgence le renfort dont vous avez besoin
          </p>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Renfort;
