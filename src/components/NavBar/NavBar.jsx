import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

let NAV_LIST = [
  {
    title: "Men",
    link: "/men",
    id: 1,
  },
  {
    title: "Women",
    link: "/women",
    id: 2,
  },
  {
    title: "Home",
    link: "/home",
    id: 3,
  },
  {
    title: "Sale",
    link: "/sale",
    id: 4,
  },
];
const NavBar = () => {
  return (
    <div className="navigation">
      <div className="primary-logo">
        <Link className="logo-link" to="/">
          <span className="visually-hidden">Ralph Lauren</span>
        </Link>
      </div>
      <div className="navbar">
        {NAV_LIST.map((item) => (
          <Link className="nav-item logo-link" to={item.link} key={item.id}>
            {item.title}
          </Link>
        ))}
        <Link to="/admin" className="nav-item logo-link">
          ADMIN
        </Link>
      </div>
      <div className="nav-right">
        <SearchOutlined style={{ fontSize: "24px" }} />
        <ShoppingCartOutlined style={{ fontSize: "24px" }} />
        <HeartOutlined style={{ fontSize: "24px" }} />
        <UserOutlined style={{ fontSize: "24px" }} />
      </div>
    </div>
  );
};

export default NavBar;
