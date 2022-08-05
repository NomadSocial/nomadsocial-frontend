import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Publish() {
  const navigate = useNavigate();

  const [publishment, setPublishment] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [remuneration, setRemuneration] = useState(0);
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [hour, setHour] = useState("");
  const [rythm, setRythm] = useState("");

  const [data, setData] = useState(null);

  const handleSendOffer = async (event) => {
    event.preventDefault();
    setPublishment(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("remuneration", remuneration);
    formData.append("time", time);
    formData.append("city", city);
    formData.append("hour", hour);
    formData.append("rythm", rythm);

    // try {
    //   const response = await axios.post(
    //     // "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
    //     "https://vinted-bcknd.herokuapp.com/offer/publish",
    //     formData,
    //     {
    //       headers: {
    //         Authorization: "Bearer " + Cookies.get("TokenCookie"),
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   setData(response.data);
    //   setPublishment(false);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    //   console.log(error.message);
    // }
  };

  return (
    <div className="publish_main">
      <div className="publish_container">
        <h2>Publier sa mission</h2>
        <form className="publish_form" onSubmit={handleSendOffer}>
          <div className="text_input_selection">
            <div className="text_input">
              <h4>Titre</h4>
              <input
                type="text"
                placeholder="ex: Mission Accompagnant éducatifnet social (H/F)"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="text_input">
              <h4> Description de la mission</h4>
              <textarea
                name="description"
                id="description"
                rows="5"
                placeholder="Votre mission"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="text_input_selection">
            <div className="text_input">
              <h4>Localisation</h4>
              <input
                type="text"
                placeholder="ex: Paris 15e"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
            <div className="text_input">
              <h4>Rémunération</h4>
              <input
                type="text"
                placeholder="ex: XXe/h Brut"
                onChange={(event) => {
                  setRemuneration(event.target.value);
                }}
              />
            </div>
            <div className="text_input">
              <h4>Durée</h4>
              <input
                type="text"
                placeholder="ex: X temps"
                onChange={(event) => {
                  setTime(event.target.value);
                }}
              />
            </div>
            <div className="text_input">
              <h4>Nombre d'heures/semaine</h4>
              <input
                type="text"
                placeholder="ex: X heures/jour ou semaine"
                onChange={(event) => {
                  setHour(event.target.value);
                }}
              />
            </div>
            <div className="text_input">
              <h4>Rythme</h4>
              <input
                type="text"
                placeholder="ex: 9h00 - 18h00"
                onChange={(event) => {
                  setRythm(event.target.value);
                }}
              />
            </div>
          </div>

          {publishment === false && <div className="publishment"></div>}
          {publishment === true ? (
            <div className="publishment">En cours de publication</div>
          ) : (
            data && navigate(`/offer/${data._id}`)
          )}
          <div className="submit_form_btn">
            <button type="submit"> Ajouter la mission</button>
          </div>
        </form>
      </div>
    </div>
  );
}
