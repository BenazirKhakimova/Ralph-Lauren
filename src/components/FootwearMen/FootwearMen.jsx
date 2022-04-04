import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Collection from "../Collection/Collection";

const FootwearMen = () => {
  return (
    <div className="footwear collection-block">
      <BreadCrumb />
      <h1 className="sweaters-title collection-title">Men's Footwear</h1>
      <Collection />
    </div>
  );
};

export default FootwearMen;
