import facade from "../apiFacade";


const SaveFact = (props) => {
  const SaveFactToUser = () => {
    const animalfact = props.animalfact;
    if (props.loggedIn) {
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
