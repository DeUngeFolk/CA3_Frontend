import { useEffect, useState } from "react";

const DogFact = () => {
  const [dogFact, setDogFact] = useState();

  useEffect(() => {
    const option = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    getNewDogFact();
  }, []);

  const getNewDogFact = () => {
    fetch("https://anderslind99.com/CA3/api/dogfact/fact")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDogFact(data);
      });
  };

  return (
    <div>
      {dogFact && (
        <div>
          <h1> Id: {dogFact.id} </h1>
          <h1> Type: {JSON.stringify(dogFact.type.type)} </h1>
          <h2> Fact: {dogFact.fact} </h2>{" "}
        </div>
      )}

      <button value="dogFact" onClick={getNewDogFact}>
        {" "}
        new dog fact{" "}
      </button>
    </div>
  );
};

export default DogFact;
