import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import URL from "../settings";

const FactHistory = (props) => {
  const [factHistory, setFactHistory] = useState([]);

  useEffect(() => {
    if (props.loggedIn) {
      facade.fetchData().then((data) =>
        fetch(
          URL + "/api/animalfact/facthistory/" + data.msg,
          facade.makeOptions("GET", true)
        )
          .then((response) => response.json())
          .then((data) => {
            setFactHistory(data);
          })
      );
    }
  }, []);

  return (
    <div>
      {factHistory &&
        factHistory.map((animalFact) => (
          <div>
            <ul>
              <li>
                Id {animalFact.id}, type: {animalFact.type.type}, fact:{" "}
                {animalFact.fact}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default FactHistory;
