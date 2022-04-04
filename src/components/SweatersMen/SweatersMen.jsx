import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Collection from "../Collection/Collection";
import "./SweatersMen.css";

const SweatersMen = () => {
  return (
    <div className="collection-blocks">
      <BreadCrumb />
      <h1 className="sweaters-title collection-title">Men's Sweaters</h1>
      <div className="sweaters collection-block">
        <Collection />
      </div>
    </div>
  );
};

export default SweatersMen;
