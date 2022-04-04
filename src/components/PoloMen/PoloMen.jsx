import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Collection from "../Collection/Collection";
import "./PoloMen.css";

const PoloMen = () => {
  return (
    <div className="collection-blocks">
      <BreadCrumb />
      <h1 className="polo-title collection-title">Men's Polo Shirts</h1>
      <div className="polo collection-block">
        <Collection />
      </div>
    </div>
  );
};

export default PoloMen;
