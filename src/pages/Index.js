import React from "react";
import Navbar from "./Navbar";
import "../css/index.css";
const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="nom">Elliott Katane</div>
      <button className="btn">Download resume</button>
      <button className="btn">Contact me</button>
    </div>
  );
};

export default Index;
