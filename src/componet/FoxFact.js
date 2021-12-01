import { useEffect, useState } from "react";
import facade from "../apiFacade";
import URL from "../settings";

const FoxFact = (props) => {
  const [foxFact, setFoxFact] = useState();

  useEffect(() => {
    getNewFoxFact();
  }, []);

  useEffect(() => {
    const animalfact = foxFact;
    if (props.loggedIn) {
      if (animalfact != null) {
        fetch(
          URL + "/api/animalfact/facthistory/save/user",
          facade.makeOptions("POST", true, animalfact)
        )
          .then((response) => response.json())
          .then(console.log(animalfact));
      }
    }
  }, [foxFact]);

  const getNewFoxFact = () => {
    facade.FetchAnimalFactData("fox")
    .then((data) => setFoxFact(data));
  };

  return (
    <div>
      {foxFact && (
        <div>
          <h1> Id: {foxFact.id} </h1>
          <h1> Type: {JSON.stringify(foxFact.type.type)} </h1>
          <h2> Fact: {foxFact.fact} </h2>{" "}
        </div>
      )}

      <button value="foxFact" onClick={getNewFoxFact}>
        {" "}
        new fox fact{" "}
      </button>
    </div>
  );
};

export default FoxFact;