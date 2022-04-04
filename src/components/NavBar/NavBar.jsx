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
const NAV_RIGHT_LIST = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/54/54481.png",
    link: "*",
    id: 1,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    link: "*",
    id: 2,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    link: "*",
    id: 3,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/694/694575.png",
    link: "*",
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
        {NAV_RIGHT_LIST.map((item) => (
          <Link to={item.link} key={item.id}>
            <img className="nav_icons logo-link" src={item.src} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
