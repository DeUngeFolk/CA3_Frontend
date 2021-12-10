import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function Header() {
  







  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/cat-fact">
            Cat Fact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/dog-fact">
            Dog Fact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/koala-fact">
            Koala Fact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/fox-fact">
            Fox Fact
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="active" to="/random-fact">
            Random Fact
          </NavLink>
        </li>
          <li>
            <NavLink activeClassName="active" to="/fact-history">
              Fact History
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/saved-facts">
              Saved Facts
            </NavLink>
          </li>
      
        <li>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/create-account">
            Create account
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
