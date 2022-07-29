import "./Company.scss";

const Company = ({ handleToken }) => {
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
    </>
  );
};

export default Company;
