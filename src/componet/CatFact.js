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

useEffect ((data)=>{

  if(props.loggedIn) {
  
   console.log("add Post to FactHistory here")

  } 


},[catFact])

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
