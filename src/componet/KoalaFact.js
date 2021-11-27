import { useEffect, useState } from "react";

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
    fetch("https://anderslind99.com/CA3/api/Koalafact/fact") 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setKoalaFact(data);
      });
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