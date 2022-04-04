import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Collection.css";

const Collection = () => {
  return (
    <div className="collections container">
      <p>Polo Shirts</p>

      <div className="collection">
        <Link to="/polo1">
          <Card />
        </Link>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Collection;
