import React, { useEffect, useState } from "react";
import facade from "../apiFacade";
import URL from "../settings";
import SaveFact from "./SaveFact";


const KoalaFact = (props) => {
  const [koalaFact, setKoalaFact] = useState();

  useEffect(() => {
    getNewKoalaFact();
  }, []);

  useEffect(() => {
    const animalfact = koalaFact;
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
  }, [koalaFact]);


  const getNewKoalaFact = () => {
    facade.FetchAnimalFactData("koala")
    .then((data) => setKoalaFact(data));
  };

  return (
    <div>

<img src = "https://memegenerator.net/img/images/15132932.jpg" 
    width="400" height="450" />

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

      {koalaFact && (
        <SaveFact
        animalfact = {koalaFact}
        facade = {facade} />)}

    </div>
  );
};

export default KoalaFact;



