import React from "react";
import Navbar from "./Navbar";
import "../css/index.css";
const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="nom">Elliott Katane 17h00</div>
      <button className="btn">Download resume</button>
      <button className="btn">Contact me</button>
    </div>
  );
};

export default Index;
