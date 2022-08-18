import "./HomeLiberal.scss";
import homeliberal from "../assets/img/homeliberal.png";
import star from "../assets/img/star.png";

const HomeLiberal = () => {
  return (
    <>
      <div className="main-home-liberal">
        <div className="title-home-liberal">
          <img src={homeliberal} alt="" />
          <h1>Mon compte</h1>
          <br />
        </div>
        <div className="top-home-liberal">
          <h1>Bienvenue !</h1>
          <p>
            Voici votre espace privé où vous retrouverez toutes les informations
            sur votre profil d'indépendant, ainsi que l'espace NS School et tout
            ce dont vous aurez besoin pour exercer votre activité
          </p>
        </div>
        <div className="checklist-home-liberal">
          <h3>Votre checklist pour faire vos premiers pas :</h3>
          <div className="checklist">
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Une vidéo de démo sur le fonctionnement de Nomad Social
              </span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Dans la section Profil, nous vous invitons à remplir les
                informations requises
              </span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Il vous faudra fournir une copie de votre pièce d'identité, de
                votre diplômes et un extrait de casier judiciaire vierge
              </span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Dans l'onglet NS School, vous retrouverez les pas à pas pour
                déclarer votre statut d'indépendant auprès de l'Urssaf et enfin
                des conseils pour grandir dans votre rôle d'indépendant
              </span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Lorsque que vous aurez finalisé votre inscription, nous vous
                invitons à prendre un rendez-vous en visio sur ce lien avec
                notre équipe afin d'échanger sur votre lancement en tant que
                Nomad Socialer
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLiberal;
