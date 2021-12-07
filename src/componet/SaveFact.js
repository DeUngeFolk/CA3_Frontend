import facade from "../apiFacade";
import URL from "../settings";


const SaveFact = (props) => {
  const SaveFactToUser = () => {
    const animalfact = props.animalfact;
    console.log("save fact to user")
    
      if (animalfact != null) {
        props.facade
          .fetchData()
          .then((data) =>
            fetch(
              URL + "/api/animalfact/savefact/save/" + data.msg,
              props.facade.makeOptions("POST", true, animalfact)
            ).then((response) => response.json())
          );
      }
    
  };

  return (
  
  <div>

<button value="SaveFact" onClick={SaveFactToUser}>
        {" "}
        save fact{" "}
      </button>
  </div>
  )
};

export default SaveFact;
