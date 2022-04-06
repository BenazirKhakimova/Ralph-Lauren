import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ item }) => {
  const [image, setImage] = useState(false);

  return (
    <div className="card">
      <Link to={`/details/${item.id}`}>
        <img
          src={image ? item.image3 : item.image1}
          onMouseEnter={() => setImage(true)}
          onMouseLeave={() => setImage(false)}
        />
      </Link>
      <h1 className="card-title">{item.brand}</h1>
      <a href="#" className="card-desc">
        {item.title}
      </a>
      <h2 className="card-price">{"$" + item.price}</h2>
      <div className="card-footer">
        <HeartOutlined className="icon-card" />
        <Link to={`/details/${item.id}`}>
          <EllipsisOutlined
            key="1"
            style={{ cursor: "pointer" }}
            className="icon-card"
          />
        </Link>
        <ShoppingOutlined className="icon-card" />
      </div>
    </div>
  );
};

export default Card;
