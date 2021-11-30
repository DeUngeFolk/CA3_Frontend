import { useEffect, useState } from "react";
import facade from "../apiFacade";

const FoxFact = () => {
  const [foxFact, setFoxFact] = useState();

  useEffect(() => {
    const option = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    getNewFoxFact();
  }, []);

  const getNewFoxFact = () => {
    facade.FetchAnimalFactData("fox")
    .then((data) => setFoxFact(data));
  };

  return (
    <div>
      {foxFact && (
        <div>
          <h1> Id: {foxFact.id} </h1>
          <h1> Type: {JSON.stringify(foxFact.type.type)} </h1>
          <h2> Fact: {foxFact.fact} </h2>{" "}
        </div>
      )}

      <button value="foxFact" onClick={getNewFoxFact}>
        {" "}
        new fox fact{" "}
      </button>
    </div>
  );
};

export default FoxFact;