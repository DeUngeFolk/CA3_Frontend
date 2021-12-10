import { useEffect, useState } from "react";
import facade from "../apiFacade";
import URL from "../settings";
import SaveFact from "./SaveFact";

const DogFact = (props) => {
  const [dogFact, setDogFact] = useState();

  useEffect(() => {
    getNewDogFact();
  }, []);

  useEffect(() => {
    const animalfact = dogFact;
    if (props.loggedIn) {
      if (animalfact != null) {
        facade
          .fetchData()
          .then((data) => fetch(
              URL + "/api/animalfact/facthistory/save/" + data.msg,
              facade.makeOptions("POST", true, animalfact)
            )
              .then((response) => response.json())
          );
      }
    }
  }, [dogFact]);


  const getNewDogFact = () => {
    facade.FetchAnimalFactData("dog")
    .then((data) => setDogFact(data));
  };

  return (
    <div>

<img src = "https://www.allgshepherds.com/wp-content/uploads/2021/02/German-Shepherd-No-Neck.jpg" 
    width="400" height="450" />

      {dogFact && (
        <div>
          
          <h1> Type: {JSON.stringify(dogFact.type.type)} </h1>
          <h2> Fact: {dogFact.fact} </h2>{" "}
        </div>
      )}

      <button value="dogFact" onClick={getNewDogFact}>
        {" "}
        new dog fact{" "}
      </button>

      {dogFact && (
        <SaveFact
        animalfact = {dogFact}
        facade = {facade} />)}

    </div>
  );
};

export default DogFact;
