import "./Company.scss";
import imgtarifs from "../assets/img/Tarifs.png";

const Company = () => {
  return (
    <>
      <div className="main">
        <div className="top-main">
          <h1>Espace Entreprise</h1>
          <br />
          <br />
          <div className="list-one">
            <p>1. J'inscris ma structure sur la plateforme</p>
            <p>2. Je poste ma mission</p>
          </div>
          <div className="list-two">
            <p>
              3. L'algorithme Nomad Social trouve automatiquement les bons
              profils
            </p>
            <p>4. Je valide le profil qui m'intéresse</p>
          </div>
          <div className="list-three">
            <p>5. L'indépendant social démarre sa mission auprès de vous !</p>
          </div>
        </div>
        <div className="bottom-main">
          <h1>Pourquoi faire appel à un indépendant social ?</h1>
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

export default Company;
