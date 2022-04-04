import { Rate } from "antd";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";
import Loading from "../Loading/Loading";
import "./Details.css";
const Details = () => {
  const { getOneProduct, oneProduct } = useContext(contextProduct);
  const params = useParams();
  useEffect(() => {
    getOneProduct(params.id);
  });
  return oneProduct ? (
    <div style={{ padding: "8%" }}>
      <div className="description-wrapper">
        <div className="left-wrapper">
          <div className="img-block">
            <div>
              <img src={oneProduct.image1} alt="#" />
            </div>
            <div>
              <img src={oneProduct.image2} alt="#" />
            </div>
          </div>
          <div>
            <p className="description">{oneProduct.description}</p>
          </div>
        </div>
        <div className="right-wrapper">
          <div>{oneProduct.brand}</div>
          <h1>{oneProduct.title}</h1>
          <span>{oneProduct.price}</span>
          <div className="cart-wrapper">
            <span style={{ textAlign: "center" }}>
              Please enter your email to be notified if this product becomes
              available.
            </span>
            <input
              type="text"
              placeholder="Enter email address"
              className="cart-input"
            />
            <button className="cart-input-button">Notify me</button>

            <a href="#" className="store-title">
              FIND IN STORE
            </a>
          </div>
          <h5 className="reviews">reviews</h5>
          <Rate allowHalf defaultValue={2.5} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
