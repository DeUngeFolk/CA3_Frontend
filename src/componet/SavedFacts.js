import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import URL from "../settings";


const SavedFacts = (props) => {
    const [savedfacts, setSavedFacts] = useState([]);
  
    useEffect(() => {
      if (props.loggedIn) {
        facade.fetchData().then((data) =>
          fetch(
            URL + "/api/animalfact/savefact/" + data.msg,
            facade.makeOptions("GET", true)
          )
            .then((response) => response.json())
            .then((data) => {
              setSavedFacts(data);
            })
        );
      }
    }, []);
  
    return (
      <div>
        {savedfacts &&
          savedfacts.map((animalFact) => (
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
  
  export default SavedFacts;