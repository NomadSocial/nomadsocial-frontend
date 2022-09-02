import "./Team.scss";
import Footer from "../components/Footer";

//Images
import star from "../assets/img/star.png";
import team from "../assets/img/team.jpeg";
const Team = () => {
  return (
    <>
      <div className="container-team">
        <div className="top-team">
          <h1>Qu'est ce que Nomad Social ?</h1>
          <p>
            Nomad Social, c'est une plateforme d'accompagnement et de mise en
            relation, dont l'objectif est de redynamiser le secteur du Social
          </p>
          <div className="list-top-team">
            <div>
              <label>
                <img src={star} alt="" />
              </label>
              <span> Un meilleur revenu pour les travailleurs sociaux</span>
            </div>
            <div>
              <label>
                <img src={star} alt="" />
              </label>
              <span>
                Un équilibre financier pour les structures
                {"(entreprises publiques, privées, hôpitaux et associations)"}
              </span>
            </div>
          </div>
          <br />
          <div className="test">
            <p className="italic-team">
              Enfin une situation gagnante-gagnante pour tout le monde !
            </p>
          </div>
          <br />
        </div>

        <div className="middle-team">
          <h1>Une plateforme à impact et responsable</h1>
          <p>
            Une plateforme entièrement dédiée à redynamiser et équilibrer le
            secteur du Social. Ainsi les publics en état de faiblesse, ayant
            besoin de l'attention des travailleurs sociaux, auront les soins, le
            soutient dont ils ont besoin sans sacrifice et situation dramatique.
          </p>
        </div>
        <br />
        <div className="bottom-team">
          <h1>Une équipe à l'écoute et bienveillante</h1>
          <br />

          <div className="team">
            <div>
              <p>
                Rita Verissimo <br />
                Fondatrice
              </p>
            </div>
            <div>
              <p>
                Maurine Cornillon <br /> Ingénieure FE
              </p>
            </div>
            <div>
              <p>
                Selim Djeghdir <br /> Ingénieur FS
              </p>
            </div>
            <div>
              <p>
                Ahmed Chaudhry <br /> Ingénieur FE
              </p>
            </div>
          </div>
          <br />
          <div className="container-photo">
            <img className="photo" src={team} alt="" />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Team;
