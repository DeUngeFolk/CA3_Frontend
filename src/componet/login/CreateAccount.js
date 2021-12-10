import { useState } from "react";

export default function CreateAccount({ createUser }) {
  const init = { username: "", password: "" };
  const [UserCredentials, setUserCredentials] = useState(init);

  const createAccount = (evt) => {
    evt.preventDefault();
    createUser(UserCredentials.username, UserCredentials.password);
  };
  const onChange = (evt) => {
    setUserCredentials({
      ...UserCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Create user</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={createAccount}>create account</button>
      </form>
    </div>
  );
}
