import React, { useEffect, useState } from "react";
import facade from "../apiFacade";




const KoalaFact = (props) => {
  const [koalaFact, setKoalaFact] = useState();

  useEffect(() => {
    getNewKoalaFact();
  }, []);

  useEffect(() => {
    const animalfact = koalaFact;
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
  }, [koalaFact]);


  const getNewKoalaFact = () => {
    facade.FetchAnimalFactData("koala")
    .then((data) => setKoalaFact(data));
  };

  return (
    <div>
      {koalaFact && (
        <div>
          <h1> Id: {koalaFact.id} </h1>
          <h1> Type: {JSON.stringify(koalaFact.type.type)} </h1>
          <h2> Fact: {koalaFact.fact} </h2>{" "}
        </div>
      )}
      
      <button value="koalaFact" onClick={getNewKoalaFact}>
        {" "}
        new koala fact{" "}
      </button>
    </div>
  );
};

export default KoalaFact;



