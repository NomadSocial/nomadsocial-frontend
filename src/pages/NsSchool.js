import "./NsSchool.scss";
import Footer from "../components/Footer";

//Images

import graduation from "../../src/assets/img/graduation.png";

const NsSchool = () => {
  return (
    <>
      <div className="main">
        <div className="top-main">
          <div className="title-nsschool">
            <img src={graduation} alt="" />
            <h1>NS School</h1>
          </div>
        </div>
        <br />
        <br />
        <div className="middle-renfort">
          <h1>Qu'est ce que la NS School ?</h1>
          <p>
            La Ns School est un espace de mini formations gratuites accessible
            dès inscription sur la plateforme.
          </p>
          <p>
            Vous y retrouverez les pas à pas et les astuces pour construire
            votre micro entreprise, ainsi que des conseils sur l'état d'esprit
            d'une entreprise et finalement des ressources plus spécifiques au
            Social.
          </p>
          <p>
            Il vous sera possible de poster vos questions directement en
            commentaire de vidéo et un membre de notre équipe vous répondra au
            plsu vite.
          </p>
          <br />
          <br />

          <div className="button-renfort">
            <button>
              <a
                href="https://nsschool.notion.site/Accueil-NS-School-5960c1c3a5b44b24be1f3e205d1ea149"
                target="_blank"
                rel="noreferrer noopener"
              >
                Je deviens un Nomad Socialer
              </a>
            </button>
          </div>

          <p className="italic">
            Démarrez dès maintenant une vie professionnelle plus libre et
            sereine financièrement.
          </p>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default NsSchool;
