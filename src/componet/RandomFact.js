import { useEffect, useState } from "react";
import facade from "../apiFacade";
import URL from "../settings";

const RandomFact = (props) => {
  const [randomFact, setRandomFact] = useState();

  useEffect(() => {
    getNewRandomFact();
  }, []);

  useEffect(() => {
    const animalfact = randomFact;
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
  }, [randomFact]);

  const getNewRandomFact = () => {
    facade.FetchAnimalFactData("random")
    .then((data) => setRandomFact(data));
  };

  return (
    <div>
      {randomFact && (
        <div>
          <h1> Id: {randomFact.id} </h1>
          <h1> Type: {JSON.stringify(randomFact.type.type)} </h1>
          <h2> Fact: {randomFact.fact} </h2>{" "}
        </div>
      )}

      <button value="randomFact" onClick={getNewRandomFact}>
        {" "}
        new random fact{" "}
      </button>
    </div>
  );
};

export default RandomFact;