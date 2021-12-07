import { useEffect, useState, Image } from "react";
import facade from "../apiFacade";
import URL from "../settings";

const RandomFact = (props) => {
  const [randomFact, setRandomFact] = useState();
  const [imgURL, setImgURL] = useState("");
  var type;

  useEffect(() => {
    getNewRandomFact();
  }, []);

  useEffect(() => {
    const animalfact = randomFact;
    if (props.loggedIn) {
      if (animalfact != null) {
        facade
          .fetchData()
          .then((data) =>
            fetch(
              URL + "/api/animalfact/facthistory/save/" + data.msg,
              facade.makeOptions("POST", true, animalfact)
            ).then((response) => response.json())
          );
      }
    }
  }, [randomFact]);

  const getNewRandomFact = () => {
    facade.FetchAnimalFactData("random").then((data) => {
      setRandomFact(data);

      if (randomFact !== undefined) {
        type = JSON.stringify(randomFact.type.type);
        switch (type) {
          case "cat":
            setImgURL(
              "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            );
            break;

          case "dog":
            setImgURL(
              "https://www.allgshepherds.com/wp-content/uploads/2021/02/German-Shepherd-No-Neck.jpg"
            );
            break;

          case "koala":
            setImgURL("https://memegenerator.net/img/images/15132932.jpg");
            break;

          case "fox":
            setImgURL(
              "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/baby-red-fox-curtis-patterson.jpg"
            );
            break;

          default:
            break;
        }
      }
    });
  };

  return (
    <div>
      {imgURL && <Image src={imgURL} />}

      {randomFact && (
        <div>
          <h1> Id: {randomFact.id} </h1>
          <h1> Type: {JSON.stringify(randomFact.type.type)} </h1>
          <h2> Fact: {randomFact.fact} </h2>{" "}
        </div>
      )}

      <button value="randomFact" onClick={getNewRandomFact}>
        {" "}
        new random fact{" "}
      </button>
    </div>
  );
};

export default RandomFact;
