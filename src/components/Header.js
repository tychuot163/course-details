import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <span className="icn-logo">
      <i className="material-icons">code</i>
    </span>
    <ul className="main-nav">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={{ background: "#FF8066" }}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/character" activeStyle={{ background: "#4D8076" }}>Character</NavLink>
      </li>
      <li>
        <NavLink to="/courses" activeStyle={{ background: "#00C9A7" }}>Task/ Quest</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
