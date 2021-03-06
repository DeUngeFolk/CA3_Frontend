import { useState, useEffect } from "react";


export default function LoggedIn({ facade }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  const [errorMsg, setErrorMsg] = useState("all is good");

  useEffect(() => {
    facade
      .fetchData()
      .then((data) => setDataFromServer(data.msg))
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => setErrorMsg(e.code ,e.message));
        } else {
          console.log("Network error");
        }
      });
  }, []);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>

      <p>{errorMsg}</p>
    </div>
  );
  

}

