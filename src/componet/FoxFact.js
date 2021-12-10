import { useEffect, useState } from "react";
import facade from "../apiFacade";
import URL from "../settings";
import SaveFact from "./SaveFact";

const FoxFact = (props) => {
  const [foxFact, setFoxFact] = useState();

  useEffect(() => {
    getNewFoxFact();
  }, []);

  useEffect(() => {
    const animalfact = foxFact;
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
  }, [foxFact]);

  const getNewFoxFact = () => {
    facade.FetchAnimalFactData("fox")
    .then((data) => setFoxFact(data));
  };

  return (
    <div>

<img src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/baby-red-fox-curtis-patterson.jpg" 
    width="400" height="450" />

      {foxFact && (
        <div>
          
          <h1> Type: {JSON.stringify(foxFact.type.type)} </h1>
          <h2> Fact: {foxFact.fact} </h2>{" "}
        </div>
      )}

      <button value="foxFact" onClick={getNewFoxFact}>
        {" "}
        new fox fact{" "}
      </button>

      {foxFact && (
        <SaveFact
        animalfact = {foxFact}
        facade = {facade} />)}

    </div>
  );
};

export default FoxFact;