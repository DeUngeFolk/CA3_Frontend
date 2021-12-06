import { useEffect, useState } from "react";
import facade from "../apiFacade";
import URL from "../settings";
import LoggedIn from "./login/LoggedIn";
import SaveFact from "./SaveFact";

const CatFact = (props) => {
  const [catFact, setCatFact] = useState();
  

  useEffect(() => {
    getNewCatFact();
  }, []);

  useEffect(() => {
    const animalfact = catFact;
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
  }, [catFact]);

  const getNewCatFact = () => {
    facade.FetchAnimalFactData("cat").then((data) => setCatFact(data));
  };

  return (
    <div>

    <img src = "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" 
    width="400" height="450" />

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

      {catFact && (
        <SaveFact
        animalfact = {catFact}
        facade = {facade} />)}

    </div>
  );
};

export default CatFact;
