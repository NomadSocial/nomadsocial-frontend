import "./Independant.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Independant = () => {
  const [resultat, setResultat] = useState([]);
  useEffect(() => {
    console.log(localStorage.getItem("password"));
    axios
      .get("http://localhost:8000/api/me/", {
        auth: {
          username: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
      })
      .then((response) => {
        console.log(response);
        setResultat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="home">
        <div className="left-home">
          <h1>TEST</h1>
          <br />
          <br />
          <p>test</p>
          <p>prenom :{resultat["first_name"]}</p>
          {Object.entries(resultat).map(([key, value]) => (
            <p key={key}>{value}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Independant;
