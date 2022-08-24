import "./Team.scss";
import imgtarifs from "../assets/img/Tarifs.png";
import logoentreprise from "../assets/img/entreprise.png";
import star from "../assets/img/star.png";

import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="top-main">
          <div className="title-entreprise">
            <img src={logoentreprise} alt="" />
            <h1>Espace Indépendant</h1>
            <br />
            <br />
          </div>
          <div className="list-one">
            <p>1. Je m'inscris sur la platerforme</p>
            <p>2. Je définis bien mes critères d'exigences</p>
          </div>
          <div className="list-two">
            <p>
              3. L'algorithme Nomad Social trouve automatiquement les bonnes
              missions
            </p>
            <p>4. Je me propose sur les missions qui m'intéressent</p>
          </div>
          <div className="list-three">
            <p>
              5. L'entreprise valide votre profil et votre mission peut démarrer
              !
            </p>
          </div>
        </div>
        <div className="checklist-entreprise">
          <h1>Pourquoi s'inscrire sur Nomad Social ?</h1>
          <div className="checklist">
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Vous êtes accompagné.es pas à pas pour créer votre statut
                d'indépendant grâce à la NS School, espace en ligne gratuit
              </span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Facturation automatique auprès de vos clients, gratuitement
              </span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Un taux horaire brut très attractif avec 22% de gain
                supplémentaire
              </span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>La liberté de choisir vos périodes de travail</span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                La possibilité de travailler en nomade et découvrir notre belle
                France
              </span>
            </div>
          </div>
        </div>
        <br />

        <div className="contact-independant">
          <div>
            <button onClick={() => navigate("/signupliberal")}>
              Je crée mon profil maintenant
            </button>
          </div>
          <div>
            <button>Je souhaite être contacté.e</button>
          </div>
        </div>
      </div>
      <div className="tarif">
        <h1> Comment fonctionne la rémunération ?</h1>
        <p>
          Nous avons à coeur d'assurer un taux horaire brut plancher pour nos
          indépendants, pour ce faire vous trouverez ci-dessous nos
          recommandations :
        </p>
        <img src={imgtarifs} alt="" />
        <p>
          Nos frais de service s'élève à 10% du taux horaire brut. <br />
          <span className="italic">
            Exemple: Pour un taux horaire brut de 14e/h, nous prenons 1,40e/h
          </span>
        </p>

        <br />

        <p>
          La TVA de 20% ne s'applique que sur nos frais de service auprès de la
          structure accueillant l'indépendant. <br />
          <span className="italic">
            Exemple: En se basant sur le taux horaire brut de 20e, la TVA
            s'applique uniquement sur 2e. Le montant de la TVA est donc de 2e *
            0,2 = 0,40e. Ainsi, pour un taux de 20e HT, on obtient un taux de
            20,40e TTC.
          </span>
        </p>

        <h1> Les avantages ?</h1>
        <span>
          <p>
            Pas de paiement de charges patronales, d'indemnités de fin de
            contrat ou de congés payés
          </p>
        </span>
        <span>
          <p>Recrutement simplifié avec un contrat de mission proposé</p>
        </span>
        <span>
          <p>Plus de candidat possible grâce à la nomadité</p>
        </span>
        <span>
          <p>
            Sans coût supplémentaire, une rémunération supplémentaire pour
            l'indépendant social
          </p>
        </span>
      </div>
    </>
  );
};

export default Team;
