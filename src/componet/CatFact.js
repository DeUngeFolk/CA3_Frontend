import { useEffect, useState } from "react";

const CatFact = () => {
  const [catFact, setCatFact] = useState();
  

  useEffect(() => {
    const option = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }

    fetch("https://anderslind99.com/CA3/api/catfact/fact", option)
      .then((response) => response.json())
      .then((data) =>
      {console.log(data);
      setCatFact(data)
    });
  }, []);

  return (
    <div>
      {catFact && (<div>
      <h1> Id: {catFact.id} </h1>
      <h1> Type: {JSON.stringify(catFact.type.type)} </h1>
      <h2> Fact: {catFact.fact} </h2> </div>)
    }
    </div>
  );
};

export default CatFact;
