import { useEffect, useState } from "react";
import facade from "../apiFacade";

const KoalaFact = () => {
  const [koalaFact, setKoalaFact] = useState();

  useEffect(() => {
    const option = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    getNewKoalaFact();
  }, []);

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