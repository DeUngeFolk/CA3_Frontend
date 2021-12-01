import { useEffect, useState } from "react";
import facade from "../apiFacade";

const DogFact = (props) => {
  const [dogFact, setDogFact] = useState();

  useEffect(() => {
    getNewDogFact();
  }, []);

  useEffect(() => {
    const animalfact = dogFact;
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
  }, [dogFact]);


  const getNewDogFact = () => {
    facade.FetchAnimalFactData("dog")
    .then((data) => setDogFact(data));
  };

  return (
    <div>
      {dogFact && (
        <div>
          <h1> Id: {dogFact.id} </h1>
          <h1> Type: {JSON.stringify(dogFact.type.type)} </h1>
          <h2> Fact: {dogFact.fact} </h2>{" "}
        </div>
      )}

      <button value="dogFact" onClick={getNewDogFact}>
        {" "}
        new dog fact{" "}
      </button>
    </div>
  );
};

export default DogFact;
