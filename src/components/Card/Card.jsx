import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./Card.css";

const Card = ({ item }) => {
  const [image, setImage] = useState(false);
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  return (
    <div className="card">
      <img
        src={image ? item.image3 : item.image1}
        onMouseEnter={() => setImage(true)}
        onMouseLeave={() => setImage(false)}
      />
      <h1 className="card-title">{item.brand}</h1>
      <a href="#" className="card-desc">
        {item.title}
      </a>
      <h2 className="card-price">{"$ " + item.price}</h2>
      <div className="card-footer">
        <HeartOutlined className="icon-card" />
        <Link to={`/details/${item.id}`}>
          <EllipsisOutlined
            key="1"
            style={{ cursor: "pointer" }}
            className="icon-card"
          />
        </Link>

        <ShoppingOutlined
          className="icon-card"
          onClick={() => {
            addProductToCart(item);
            setCheckItem(checkItemInCart(item.id));
          }}
          style={{ fontSize: "25px", color: checkItem ? "red" : "black" }}
        />
      </div>
    </div>
  );
};

export default Card;
