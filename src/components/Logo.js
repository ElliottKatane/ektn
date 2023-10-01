import React from "react";
import image from "../logoblack.png";
import { NavLink } from "react-router-dom";
import "../css/Logo.css";
const Logo = () => {
  return (
    <NavLink to="/">
      <img src={image} alt="logo elliott katane" />
    </NavLink>
  );
};

export default Logo;
