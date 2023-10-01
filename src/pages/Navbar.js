import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "../components/Logo";
const Navbar = () => {
  return (
    <div className="navigation">
      <div className="leftside">
        <Logo />
      </div>
      <div className="rightside">
        <ul>
          <li>
            <NavLink
              to="/about"
              exact="true"
              className={(nav) => (nav.isActive ? "navactive" : "")}
            >
              A propos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Works"
              exact="true"
              className={(nav) => (nav.isActive ? "navactive" : "")}
            >
              Métiers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Insta"
              exact="true"
              className={(nav) => (nav.isActive ? "navactive" : "")}
            >
              Instagram
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
