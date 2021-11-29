import { useEffect, useState } from "react";
import facade from "../apiFacade";

const CatFact = (props) => {
  const [catFact, setCatFact] = useState();

  useEffect(() => {
    const option = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    getNewCatFact();
  }, []);

  useEffect(() => {
    const animalfact = catFact;
    if (props.loggedIn) {
      if (animalfact != null) {
        const option = {
          method: "POST",
          Headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          // TODO: find issue with the MediaType. getting 415 error from server.
          body: JSON.stringify({ animalfact }),
        };

        fetch(
          "https://anderslind99.com/CA3/api/animalfact/facthistory/save/user",
          facade.makeOptions("POST",true,animalfact))
      
          .then((response) => response.json())
          .then(console.log(animalfact));
      }
    }
  }, [catFact]);

  const getNewCatFact = () => {
    fetch("https://anderslind99.com/CA3/api/catfact/fact")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCatFact(data);
      });
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
