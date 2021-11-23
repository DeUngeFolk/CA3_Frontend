import { useEffect, useState } from "react";
import facade from "../apiFacade";

const FetchCatFact = () => {
  const [catFact, setCatFact] = useState([
    {
      catFact: "",
    },
  ]);

  useEffect(() => {
    facade.FetchCatFactData(URL + "api/catfact/fact", );
  }, []);

  const getCatFact = async (data) => {
    setCatFact(data.catFact, setCatFact);
  };

  return (
    <div>

        <p>cat fact: {catFact.getCatFact}</p>
    
    </div>
  );
};

export default function App() {
    return <FetchCatFact />;
  }
