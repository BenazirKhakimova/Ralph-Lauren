import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-img"></div>
      <h1 className="card-title">Ralph Lauren Collection</h1>
      <a href="#" className="card-desc">
        Silk Ikat-Print Pochette
      </a>
      <h2 className="card-price">$1,590.00</h2>
    </div>
  );
};

export default Card;
