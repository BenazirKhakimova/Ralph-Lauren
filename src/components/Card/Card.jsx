import {
  DeleteOutlined,
  EllipsisOutlined,
  HeartOutlined,
} from "@ant-design/icons";
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
      <div className="card-footer">
        <HeartOutlined className="icon-card" />
        <EllipsisOutlined className="icon-card" />
        <DeleteOutlined className="icon-card" />
      </div>
    </div>
  );
};

export default Card;
