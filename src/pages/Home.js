import "./Home.scss";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

//Images
import imghome from "../assets/img/Homeimg.jpg";
import liberalhome from "../assets/img/liberalhome.png";
import entreprisehome from "../assets/img/entreprisehome.png";

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
        <div className="body">
          <div className="encart">
            <div className="left-encart">
              <img src={entreprisehome} alt="" />
              <h2 className="bleu">Entreprise</h2>
              <p>Trouvez rapidement l'aide dont vous avez besoin</p>
              <button onClick={() => navigate("/company")}>
                Je cherche de l'aide
              </button>
            </div>

            <div className="right-encart">
              <img src={liberalhome} alt="" />
              <h2 className="bleu">Independant</h2>
              <p>Une nouvelle liberté de travailler, mieux rémunéré</p>
              <button onClick={() => navigate("/independant")}>
                Je cherche une mission
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
