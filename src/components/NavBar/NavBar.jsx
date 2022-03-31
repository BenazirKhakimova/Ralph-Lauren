import React from "react";
// import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

let NAV_LIST = [
  {
    title: "Men",
    link: "*",
    id: 1,
  },
  {
    title: "Women",
    link: "*",
    id: 2,
  },
  {
    title: "Home",
    link: "*",
    id: 3,
  },
  {
    title: "Sale",
    link: "*",
    id: 4,
  },
];
const NAV_RIGHT_LIST = [
  {
    src: "https://cdn-icons.flaticon.com/png/512/4024/premium/4024513.png?token=exp=1648714317~hmac=de77669b32730435638731ff2a8739b4",
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
  // const location = useLocation();
  return (
    <div className="navBar">
      <div className="primary-logo">
        <span className="visually-hidden">Ralph Lauren</span>
      </div>
      <div className="navbar">
        {NAV_LIST.map((item) => (
          // <Link
          //   className={
          //     location.pathname === item.link
          //       ? "navbar-item-active"
          //       : "navbar-item"
          //   }
          //   to={item.link}
          //   key={item.id}
          // >
          //   {item.title}
          // </Link>
          <a className="nav-item">{item.title}</a>
        ))}
        {/* <Link
          to="/admin"
          className={
            location.pathname === "./admin"
              ? "navbar-item-active"
              : "navbar-item"
          }
        >
          ADMIN
        </Link> */}
      </div>
      <div className="nav-right">
        {NAV_RIGHT_LIST.map((item) => (
          // <Link
          //   className={
          //     location.pathname === item.link
          //       ? "navbar-item-active"
          //       : "navbar-item"
          //   }
          //   to={item.link}
          //   key={item.id}
          // >
          //   {item.title}
          // </Link>
          <img className="nav_icons" src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
