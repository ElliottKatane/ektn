import React from "react";
import Navbar from "./Navbar";
import WorkCard from "../components/WorkCard";
import "../css/workcard.css";

const Works = () => {
  return (
    <div>
      <Navbar />

      <WorkCard metier="Développeur" />
      <WorkCard metier="Tuteur de français" />
      <WorkCard metier="Photographe" />
    </div>
  );
};

export default Works;
