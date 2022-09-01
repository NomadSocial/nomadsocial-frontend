import "./Profil.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import Swal from "sweetalert2";
registerLocale("fr", fr);

const Profil = () => {
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [features, setFeatures] = useState([]);
  const [choix, setChoix] = useState({});
  const [zipcode, setZipcode] = useState("");
  const [showwarning, setShowwarning] = useState(false);
  const [location, setLocation] = useState([]);
  const [availabilities, setAvailabilities] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [permis, setPermis] = useState(false);
  const [diplome, setDiplome] = useState(0);
  const [siret, setSiret] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/me/", {
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then((response) => {
        setLastName(response.data["last_name"]);
        setEmail(response.data["email"]);
        setName(response.data["first_name"]);
        setPermis(response.data["driving_license"]);
        setDiplome(response.data["year_experience"]);
        setSiret(response.data["siret"]);
        setDescription(response.date["description"]);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:8000/api/features/all", {
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
        params: {
          context: "profile",
        },
      })
      .then((response) => {
        setFeatures(response.data);
        response.data.map((feature) => {
          if (feature.multiple_choices === true) {
            setChoix((prevChoix) => ({
              ...prevChoix,
              [feature.name]: [feature.features[0].id],
            }));
          } else {
            setChoix((prevChoix) => ({
              ...prevChoix,
              [feature.name]: feature.features[0].id,
            }));
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8000/api/me/features/", {
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then((response) => {
        if (response.data[0] === undefined) {
          setShowwarning(true);
        } else {
          setShowwarning(false);
        }
      })

      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8000/api/me/worklocations/", {
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then((response) => {
        setLocation(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:8000/api/me/availabilities/", {
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then((response) => {
        setAvailabilities(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleUserLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };
  const handleUserChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleZipcode = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setZipcode(value);
  };
  const handleDiplome = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setDiplome(value);
  };
  const handleSiret = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setSiret(value);
  };

  const handlePermis = () => {
    setPermis(!permis);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .patch(
        "http://localhost:8000/api/me/",

        {
          email: email,
          first_name: userName,
          last_name: userLastName,
          driving_license: permis,
          year_experience: diplome,
          siret: siret,
          description: description,
        },
        {
          auth: {
            username: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
          },
        }
      )
      .then((response) => {
        Swal.fire({
          title: "Succès!",
          text: "Profil modifié",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ffde59",
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleChange2 = (event) => {
    event.preventDefault();
    if (event.target.multiple === false) {
      setChoix((prevChoix) => ({
        ...prevChoix,
        [event.target.name]: parseInt(event.target.value),
      }));
    } else {
      let value = Array.from(event.target.selectedOptions, (option) =>
        parseInt(option.value)
      );
      setChoix((prevChoix) => ({ ...prevChoix, [event.target.name]: value }));
    }
  };
  const handleSubmit3 = (event) => {
    event.preventDefault();
    var L = [];
    var R = [];
    for (let i in choix) {
      L.push(choix[i]);
    }
    for (let i in L) {
      if (L[i].length !== undefined) {
        for (let k in L[i]) {
          L.push(L[i][k]);
        }
        delete L[i];
      }
    }

    for (let w in L) {
      if (L[w] !== undefined) {
        R.push(L[w]);
      }
    }
    axios
      .post(
        "http://localhost:8000/api/me/features/",

        {
          features: R,
        },
        {
          auth: {
            username: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
          },
        }
      )
      .then((response) => {
        Swal.fire({
          title: "Succès!",
          text: "Données validées",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ffde59",
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleClick = (event) => {
    var but = document.getElementById("zipcode");
    if (but.checkValidity()) {
      event.preventDefault();
      axios
        .post(
          "http://localhost:8000/api/me/worklocations/",
          {
            zipcode: parseInt(zipcode),
          },
          {
            auth: {
              username: localStorage.getItem("email"),
              password: localStorage.getItem("password"),
            },
          }
        )
        .then((response) => {
          setLocation((prevLocation) => [...prevLocation, response.data]);
          Swal.fire({
            title: "Succès!",
            text: "Code postal ajouté",
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#ffde59",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleClickDate = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/me/availabilities/",
        {
          start: startDate,
          end: endDate,
        },
        {
          auth: {
            username: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
          },
        }
      )
      .then((response) => {
        setAvailabilities((prevAvailabilities) => [
          ...prevAvailabilities,
          response.data,
        ]);
        Swal.fire({
          title: "Succès!",
          text: "Disponibilité ajoutée",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ffde59",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickZip = (id) => {
    axios
      .delete("http://localhost:8000/api/me/worklocations/" + id + "/", {
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then(() => {
        axios
          .get("http://localhost:8000/api/me/worklocations/", {
            auth: {
              username: localStorage.getItem("email"),
              password: localStorage.getItem("password"),
            },
          })
          .then((response) => {
            setLocation(response.data);
          })

          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickZipMod = (id) => {
    axios
      .patch(
        "http://localhost:8000/api/me/worklocations/" + id + "/",
        {
          zipcode: 75001,
        },
        {
          auth: {
            username: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
          },
        }
      )
      .then(() => {
        axios
          .get("http://localhost:8000/api/me/worklocations/", {
            auth: {
              username: localStorage.getItem("email"),
              password: localStorage.getItem("password"),
            },
          })
          .then((response) => {
            setLocation(response.data);
          })

          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickAvailabilities = (id) => {
    axios
      .delete("http://localhost:8000/api/me/availabilities/" + id + "/", {
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then(() => {
        axios
          .get("http://localhost:8000/api/me/availabilities/", {
            auth: {
              username: localStorage.getItem("email"),
              password: localStorage.getItem("password"),
            },
          })
          .then((response) => {
            setAvailabilities(response.data);
          })

          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickAvailabilitiesMod = (id) => {
    axios
      .patch(
        "http://localhost:8000/api/me/availabilities/" + id + "/",
        {
          start: new Date(),
          end: new Date(),
        },
        {
          auth: {
            username: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
          },
        }
      )
      .then(() => {
        axios
          .get("http://localhost:8000/api/me/availabilities/", {
            auth: {
              username: localStorage.getItem("email"),
              password: localStorage.getItem("password"),
            },
          })
          .then((response) => {
            setAvailabilities(response.data);
          })

          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function WarningBanner(props) {
    if (location.length === 0 && props.warn && availabilities.length === 0) {
      return (
        <div className="warning">
          <span>
            <strong>Attention ! </strong>Vous devez remplir vos informations
            personnelles, votre localisation ainsi que vos disponibilités !
          </span>
        </div>
      );
    } else if (location.length === 0 && availabilities.length === 0) {
      return (
        <div className="warning">
          <span>
            <strong>Attention ! </strong>Vous devez remplir vos informations de
            localisation et vos disponibilités !
          </span>
        </div>
      );
    } else if (location.length === 0 && props.warn) {
      return (
        <div className="warning">
          <span>
            <strong>Attention ! </strong>Vous devez remplir vos informations de
            localisation et vos informations personnelles !
          </span>
        </div>
      );
    } else if (availabilities.length === 0 && props.warn) {
      return (
        <div className="warning">
          <span>
            <strong>Attention ! </strong>Vous devez remplir vos disponibilités
            et vos informations personnelles !
          </span>
        </div>
      );
    } else if (location.length === 0) {
      return (
        <div className="warning">
          <span>
            <strong>Attention ! </strong>Vous devez remplir vos informations de
            localisation !
          </span>
        </div>
      );
    } else if (props.warn) {
      return (
        <div className="warning">
          <span>
            <strong>Attention ! </strong>Vous devez remplir vos informations
            personnelles !
          </span>
        </div>
      );
    } else if (availabilities.length === 0) {
      return (
        <div className="warning">
          <span>
            <strong>Attention ! </strong>Vous devez remplir vos disponibilités !
          </span>
        </div>
      );
    } else if (!props.warn) {
      return null;
    }
  }

  function format(date) {
    date = date.split("T")[0];
    return new Date(date).toLocaleDateString("fr");
  }

  return (
    <>
      <WarningBanner warn={showwarning} />
      <div className="profil-container">
        <div className="center">
          <form onSubmit={handleSubmit}>
            <h1>Modifier mon profil</h1>
            <div className="profil">
              <label>Email :</label>

              <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="profil">
              <label>Nom :</label>

              <input
                type="string"
                value={userLastName}
                onChange={handleUserLastNameChange}
              />
            </div>
            <div className="profil">
              <label>Prénom :</label>

              <input
                type="string"
                value={userName}
                onChange={handleUserChange}
              />
            </div>
            <div className="profil">
              <label>Numéro SIRET :</label>

              <input type="text" value={siret} onChange={handleSiret} />
            </div>
            <div className="profil">
              <label>Description :</label>
              <textarea
                className="description"
                type="text"
                value={description}
                onChange={handleDescription}
              />
            </div>
            <div className="profil">
              <label>Années d'expériences :</label>
              <select
                className="select"
                value={diplome}
                onChange={handleDiplome}
              >
                <option value="0">Jeune diplômé</option>
                <option value="1">0 à 3 ans d'expériences</option>
                <option value="2">4 à 8 ans d'expériences</option>
                <option value="3">+8 ans d'expériences</option>
              </select>
            </div>

            <div className="profil">
              <label>Permis B :</label>

              <input type="checkbox" checked={permis} onChange={handlePermis} />
            </div>
            <div className="profil-button">
              <input type="submit" value="Valider" />
            </div>
          </form>
        </div>
        <div className="center">
          <form onSubmit={handleSubmit3}>
            <h1>Informations personnelles</h1>
            <div>
              {features.map((feature, key1) => (
                <div className="profil" key={key1}>
                  <p>{feature.name}</p>
                  {feature.multiple_choices ? (
                    <>
                      {/* <p>(ctrl+clic pour en selectionner plusieurs)</p> */}
                      <select
                        className="select-informations"
                        multiple={true}
                        name={feature.name}
                        value={choix[feature.name]}
                        onChange={handleChange2}
                      >
                        {feature.features.map((value, key2) => (
                          <option value={value.id} key={key2}>
                            {value.description}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <select
                      multiple={false}
                      name={feature.name}
                      value={choix[feature.name]}
                      onChange={handleChange2}
                    >
                      {feature.features.map((value, key2) => (
                        <option value={value.id} key={key2}>
                          {value.description}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
              <br />
            </div>
            <div className="profil-button">
              <input type="submit" value="Valider" />
            </div>
          </form>
        </div>

        <div className="center">
          <form>
            <h1>Localisation</h1>
            <div className="profil">
              <label>Code postal :</label>

              <input
                type="text"
                pattern="^((^00000(|-0000))|(\d{5}(|-\d{4})))$"
                title="Code postal à 5 chiffres"
                value={zipcode}
                placeholder="ex: 75005"
                onChange={handleZipcode}
                id="zipcode"
              />
            </div>
            <div className="profil-button">
              <input type="submit" value="Ajouter" onClick={handleClick} />
            </div>
            {location.length === 0 ? (
              <p>aucun code postal renseigné</p>
            ) : (
              location.map((locations, key) => (
                <div className="zipcodes" key={key}>
                  <p>
                    Code postal : {locations.zipcode}&nbsp;&nbsp;&nbsp;
                    {locations.city}
                  </p>
                  <button
                    type="submit"
                    className="zipbutton"
                    onClick={() => {
                      handleClickZipMod(locations.id);
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    type="submit"
                    className="zipbutton-yellow"
                    onClick={() => {
                      handleClickZip(locations.id);
                    }}
                  >
                    Supprimer
                  </button>
                </div>
              ))
            )}
          </form>
        </div>
        <div className="center">
          <form>
            <h1>Disponibilités</h1>
            <div className="profil-date">
              <label>date de début :</label>
              <DatePicker
                selected={startDate}
                locale="fr"
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="profil-date">
              <label>date de fin :</label>
              <DatePicker
                selected={endDate}
                locale="fr"
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setEndDate(date)}
              />
            </div>
            <div className="profil-button">
              <input type="submit" value="Ajouter" onClick={handleClickDate} />
            </div>
            {availabilities.length === 0 ? (
              <p>aucune disponibilités renseignées</p>
            ) : (
              availabilities.map((availability, key) => (
                <div className="zipcodes" key={key}>
                  <p>Date de début : {format(availability.start)}</p>
                  <p>Date de fin : {format(availability.end)}</p>
                  <button
                    type="submit"
                    className="zipbutton"
                    onClick={() => {
                      handleClickAvailabilitiesMod(availability.id);
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    type="submit"
                    className="zipbutton-yellow"
                    onClick={() => {
                      handleClickAvailabilities(availability.id);
                    }}
                  >
                    Supprimer
                  </button>
                </div>
              ))
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Profil;
