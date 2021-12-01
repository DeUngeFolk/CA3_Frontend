import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componet/Header";
import Home from "./componet/Home";
import Company from "./componet/Company";
import Products from "./componet/Products";
import AddBook from "./componet/AddBook";
import NoMatch from "./componet/NoMatch";
import FindBook from "./componet/FindBook";
import LogIn from "./componet/login/LogIn";
import facade from "./apiFacade";
import LoggedIn from "./componet/login/LoggedIn";
import CatFact from "./componet/CatFact";
import DogFact from "./componet/DogFact";
import KoalaFact from "./componet/KoalaFact";
import FoxFact from "./componet/FoxFact";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={props.bookFacade} />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/find-book">
          <FindBook bookFacade={props.bookFacade} />
        </Route>
        <Route path='/cat-fact'>
          <CatFact loggedIn = {loggedIn} facade={facade} />
          </Route>
          <Route path='/dog-fact'>
          <DogFact loggedIn = {loggedIn} />
          </Route>
          <Route path='/koala-fact'>
          <KoalaFact loggedIn = {loggedIn} />
          </Route>
          <Route path='/fox-fact'>
          <FoxFact loggedIn = {loggedIn} />
          </Route>
        <Route path="/company">
          <Company />
        </Route>
        <route path="/login">
          <div>
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
              <div>
                <LoggedIn facade={facade} />
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        </route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
