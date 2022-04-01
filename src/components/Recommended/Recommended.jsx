import React from "react";
import Card from "../Card/Card";

const Recommended = () => {
  return (
    <div className="card-blocks">
      <p className="recommended">Recommended</p>
      <div className="card-block container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Recommended;
