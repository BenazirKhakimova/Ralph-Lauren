import {
  DeleteOutlined,
  EllipsisOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Collection from "../Collection/Collection";
import "./PoloMen.css";

const PoloMen = () => {
  const { products, getProducts } = useContext(contextProduct);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="collection-blocks">
      <BreadCrumb />
      <h1 className="polo-title collection-title">Men's Polo Shirts</h1>
      <div className="polo collection-block">
        <Collection />
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-img">
              <img src={item.image1} alt="" />
            </div>
            <h1 className="card-title">{item.brand}</h1>
            <a href="#" className="card-desc">
              {item.title}
            </a>
            <h2 className="card-price">{item.price}</h2>
            <div className="card-footer">
              <HeartOutlined className="icon-card" />
              <Link to={`/details/${item.id}`}>
                <EllipsisOutlined
                  key="1"
                  style={{ cursor: "pointer" }}
                  className="icon-card"
                />
              </Link>
              <DeleteOutlined className="icon-card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoloMen;
