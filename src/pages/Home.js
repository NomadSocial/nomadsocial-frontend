import "./Home.scss";
import { useNavigate } from "react-router-dom";

import imghome from "../assets/img/Homeimg.jpg";
import imgtarifs from "../assets/img/Tarifs.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="left-home">
          <h1>
            Nomad Social, la <span className="bleu">collaboration</span> entre
            les <span className="bleu">professionnels</span> du Social
          </h1>
          <br />

          <p>
            Nomad Social est la 1ère plateforme qui rassemble les travailleurs
            sociaux et les entreprises publiques et privées.
          </p>
        </div>
        <div className="right-home">
          <div>
            <img src={imghome} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="test">
            <div className="encart">
              <div className="left-encart">
                <h2 className="bleu">Entreprise</h2>
                <p>Trouvez rapidement l'aide dont vous avez besoin</p>
                <button onClick={() => navigate("/company")}>
                  Je cherche de l'aide
                </button>
              </div>

              <dv className="right-encart">
                <h2 className="bleu">Independant</h2>
                <p>Une nouvelle liberté de travailler, mieux rémunéré</p>
                <button onClick={() => navigate("/independant")}>
                  Je cherche une mission
                </button>
              </dv>
            </div>
          </div>
        </div>
      </div>

      <br />
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

export default Home;
