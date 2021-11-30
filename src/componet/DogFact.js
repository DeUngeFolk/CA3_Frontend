import { useEffect, useState } from "react";
import facade from "../apiFacade";

const DogFact = () => {
  const [dogFact, setDogFact] = useState();

  useEffect(() => {
    const option = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    getNewDogFact();
  }, []);

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
