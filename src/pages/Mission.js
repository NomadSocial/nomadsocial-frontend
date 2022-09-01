import "./Mission.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const Mission = () => {
  const [mission, setMission] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [detail, setDetail] = useState([]);
  const [show, setShow] = useState(false);
  const [features, setFeatures] = useState([]);
  const [choix, setChoix] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/features/all", {
        params: {
          context: "mission",
        },
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then((response) => {
        setFeatures(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:8000/api/missions/", {
        params: {
          page_size: 5,
        },
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then((response) => {
        setMission(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    axios
      .get("http://localhost:8000/api/missions/" + id + "/", {
        params: {
          page_size: 5,
        },
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then((response) => {
        setDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setShow(true);
  };

  const handleClick = (url) => {
    window.scrollTo(0, 0);
    axios
      .get(url, {
        params: {
          page_size: 5,
        },
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then((response) => {
        setMission(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          "http://localhost:8000/api/missions/",

          {
            params: {
              page_size: 5,
              location: recherche,
              page: 1,
            },

            auth: {
              username: localStorage.getItem("email"),
              password: localStorage.getItem("password"),
            },
          }
        )
        .then((response) => {
          setMission(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSubmit = (event) => {
    var check = document.getElementById("recherche");
    if (check.checkValidity()) {
      if (choix["Diplômes"] === undefined || choix["Diplômes"].length === 0) {
        axios
          .get(
            "http://localhost:8000/api/missions/",

            {
              params: {
                page_size: 5,
                location: recherche,
                page: 1,
              },

              auth: {
                username: localStorage.getItem("email"),
                password: localStorage.getItem("password"),
              },
            }
          )
          .then((response) => {
            setMission(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios

          .get(
            "http://localhost:8000/api/missions/",

            {
              params: {
                feature: choix["Diplômes"].join(","),
                page_size: 5,
                location: recherche,
                page: 1,
              },

              auth: {
                username: localStorage.getItem("email"),
                password: localStorage.getItem("password"),
              },
            }
          )
          .then((response) => {
            setMission(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  const handleChange = (event) => {
    setRecherche(event.target.value);
  };

  const handleChange2 = (event) => {
    event.preventDefault();
    let value = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    setChoix((prevChoix) => ({ ...prevChoix, [event.target.name]: value }));
  };
  function format(date) {
    date = date.split("T")[0];
    return new Date(date).toLocaleDateString("fr");
  }

  function findname(list) {
    var nom = [];
    features.map((feature) => {
      feature.features.map((value, key) => {
        for (let i in list) {
          if (list[i] === value.id) {
            nom.push({ key: feature.name, value: value.description });
          }
        }
      });
    });
    return nom;
  }

  if (features[1] === undefined || mission === undefined) {
    return <p>Chargement...</p>;
  }
  return (
    <>
      <div className="home">
        <div className="left-home">
          <h2>Missions du moment</h2>
          {mission.count === 0 ? (
            <div>
              <div className="recherche">
                <label htmlFor="recherche">Rechercher par code postal :</label>
                <input
                  type="text"
                  pattern="^((^00(|000))|(\d{2}(|\d{3})))$"
                  title="Code postal à 5 chiffres"
                  value={recherche}
                  placeholder="ex:75005"
                  onChange={handleChange}
                  onKeyDown={handleKey}
                  id="recherche"
                />
                <select
                  multiple={true}
                  name={features[1].name}
                  value={choix[features[1].name]}
                  onChange={handleChange2}
                >
                  {features[1].features
                    ? features[1].features.map((value, key) => (
                        <option value={value.id} key={key}>
                          {value.description}
                        </option>
                      ))
                    : null}
                </select>
                <button onClick={handleSubmit}>Rechercher</button>
              </div>
              <p>Aucune mission trouvée...</p>
            </div>
          ) : (
            <div>
              <div className="recherche">
                <label htmlFor="recherche">Rechercher par code postal :</label>
                <input
                  type="text"
                  pattern="^((^00(|000))|(\d{2}(|\d{3})))$"
                  title="Code postal à 5 chiffres"
                  value={recherche}
                  placeholder="ex:75005"
                  onChange={handleChange}
                  onKeyDown={handleKey}
                  id="recherche"
                />
                <div className="diplome">
                  <p>{features[1].name}</p>
                  <p className="ps">
                    (ctrl+clic pour en selectionner plusieurs)
                  </p>
                </div>

                <select
                  multiple={true}
                  name={features[1].name}
                  value={choix[features[1].name]}
                  onChange={handleChange2}
                >
                  {features[1].features
                    ? features[1].features.map((value, key) => (
                        <option value={value.id} key={key}>
                          {value.description}
                        </option>
                      ))
                    : null}
                </select>
                <button onClick={handleSubmit}>Rechercher</button>
              </div>
              {mission.results ? (
                <>
                  <h5>
                    Il y a {mission.count} missions correspondants à votre
                    recherche :
                  </h5>
                  {mission.results.map((missions, key) => (
                    <div key={key} className="mission">
                      <div className="missions">
                        <p>
                          <strong>{missions.title}</strong>
                        </p>
                        <p>
                          {" "}
                          <strong>Société : </strong>
                          {missions.company}
                        </p>
                        <p>
                          <strong>Date de début : </strong>
                          {format(missions.start)}
                        </p>
                        <p>
                          <strong>Date de fin : </strong>
                          {format(missions.end)}
                        </p>
                        <p>
                          <strong>Lieux : </strong>
                          {missions.zipcode} {missions.city}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          handleShow(missions.id);
                        }}
                      >
                        Détail
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <p>chargement...</p>
              )}
              {mission.previous ? (
                mission.next ? (
                  <div className="page">
                    <button
                      onClick={() => {
                        handleClick(mission.previous);
                      }}
                    >
                      Précédant
                    </button>
                    <button
                      onClick={() => {
                        handleClick(mission.next);
                      }}
                    >
                      Suivant
                    </button>
                  </div>
                ) : (
                  <div className="page">
                    <button
                      onClick={() => {
                        handleClick(mission.previous);
                      }}
                    >
                      Précédant
                    </button>
                  </div>
                )
              ) : mission.next ? (
                <div className="page">
                  <button
                    onClick={() => {
                      handleClick(mission.next);
                    }}
                  >
                    Suivant
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{detail.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {detail ? (
              <div>
                <div
                  dangerouslySetInnerHTML={{ __html: detail.description }}
                ></div>
                <p>
                  <strong>Compagnie :</strong> {detail.company}
                </p>
                <div>
                  <strong>Compétences :</strong>{" "}
                  {findname(detail.features).map((value, key) => (
                    <p key={key}>
                      {value.key} : {value.value}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <p>Aucun résultat</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="footermodal">
            <button onClick={handleClose}>Fermer</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Mission;
