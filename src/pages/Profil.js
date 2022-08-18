import "./Profil.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Profil = () => {
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [description, setDescription] = useState([]);
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log(value);
  };

  const handleUserLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    console.log(value);
  };
  const handleUserChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
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
        },
        {
          auth: {
            username: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
          },
        }
      )
      .then((response) => {
        alert("Profil modifié");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleSubmitTwo = async (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/me/features/",

        {
          features: [description],
        },
        {
          auth: {
            username: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
          },
        }
      )
      .then((response) => {})
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <div className="profil-container">
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
            <label>Prenom :</label>

            <input type="string" value={userName} onChange={handleUserChange} />
          </div>
          <div className="profil-button">
            <input type="submit" value="Modifier" />
          </div>
        </form>
      </div>
      <div>
        <div className="profil-container">
          <form onSubmit={handleSubmitTwo}>
            <h1>Features</h1>
            <div className="profil">
              <input
                type="string"
                value={description}
                onChange={handleDescription}
              />
            </div>

            <div className="profil-button">
              <input type="submit" value="Modifier" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profil;
