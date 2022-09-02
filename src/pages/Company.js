import "./Company.scss";
import Footer from "../components/Footer";
//Images
import imgtarifs from "../assets/img/Tarifs.png";
import logoentreprise from "../assets/img/entreprise.png";
import star from "../assets/img/star.png";
import enregistrement from "../assets/img/enregistrement.png";
import laptop from "../assets/img/laptop.png";
import match from "../assets/img/match.png";
import missiondeux from "../assets/img/mission2.png";
import missionfinal from "../assets/img/missionfinal.png";

const Company = () => {
  return (
    <>
      <div className="main">
        <div className="top-main">
          <div className="title-entreprise">
            <img src={logoentreprise} alt="" />
            <h1>Espace Entreprise</h1>
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
              <p> Ma mission est postée</p>
            </div>
            <p> {">"} </p>
            <div>
              <img src={match} alt="" />
              <p>
                L'algorithme Nomad Social trouve automatiquement les bons
                profils
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
              <p> L'indépendant social démarre sa mission auprès de vous !</p>
            </div>
          </div>
        </div>
        <div className="checklist-entreprise">
          <h1>Pourquoi faire appel à un indépendant social ?</h1>
          <div className="checklist">
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Pas de paiement de charges patronales, d'indemnités de fin de
                contrat ou de congés payés
              </span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Recrutement simplifié avec un contrat de mission proposé
              </span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>Plus de candidat possible avec la nomadité</span>
            </div>
            <div className="list">
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Sans coût supplémentaire : une économie de 10% sans la prime de
                fin de mission en CDD et une rémunération de 22% en plus pour
                l'indépendant social
              </span>
            </div>
          </div>
        </div>
        <br />

        <div className="contact">
          <button>Je souhaite être contacté.e</button>
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
            La TVA de 20% ne s'applique que sur nos frais de service auprès de
            la structure accueillant l'indépendant. <br />
            <span className="italic">
              Exemple: En se basant sur le taux horaire brut de 20e, la TVA
              s'applique uniquement sur 2e. Le montant de la TVA est donc de 2e
              * 0,2 = 0,40e. Ainsi, pour un taux de 20e HT, on obtient un taux
              de 20,40e TTC.
            </span>
          </p>

          <div className="checklist-tarifs">
            <h1> Les avantages ?</h1>
            <div className="checklist-t">
              <div className="list">
                <label>-</label>
                <span>
                  Pas de paiement de charges patronales, d'indemnités de fin de
                  contrat ou de congés payés
                </span>
              </div>
              <div className="list">
                <label>-</label>
                <span>
                  Recrutement simplifié avec un contrat de mission proposé
                </span>
              </div>
              <div className="list">
                <label>-</label>
                <span>Plus de candidat possible grâce à la nomadité</span>
              </div>
              <div className="list">
                <label>-</label>
                <span>
                  Sans coût supplémentaire, une rémunération supplémentaire pour
                  l'indépendant social
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Company;
