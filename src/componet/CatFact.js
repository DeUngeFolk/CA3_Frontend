import { useEffect, useState } from "react";
import facade from "../apiFacade";
import URL from "../settings";

const CatFact = (props) => {
  const [catFact, setCatFact] = useState();

  useEffect(() => {
    getNewCatFact();
  }, []);

  useEffect(() => {
    const animalfact = catFact;
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
  }, [catFact]);

  const getNewCatFact = () => {
    facade.FetchAnimalFactData("cat")
    .then((data) => setCatFact(data));
  };

  return (
    <div>
      {catFact && (
        <div>
          <h1> Id: {catFact.id} </h1>
          <h1> Type: {JSON.stringify(catFact.type.type)} </h1>
          <h2> Fact: {catFact.fact} </h2>{" "}
        </div>
      )}

      <button value="catFact" onClick={getNewCatFact}>
        {" "}
        new cat fact{" "}
      </button>
    </div>
  );
};

export default CatFact;
