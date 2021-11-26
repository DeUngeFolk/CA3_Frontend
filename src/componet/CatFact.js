import { useEffect, useState } from "react";

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

  useEffect(
    () => {
      if (props.loggedIn) {
        const option = {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(catFact),
        };

        fetch("https://anderslind99.com/CA3/api/animalfact/facthistory/save/user",option)
        .then((response) => response.json)

        console.log(catFact);
        console.log("add Post to FactHistory here");
      }
    },
    [catFact]
  );

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
