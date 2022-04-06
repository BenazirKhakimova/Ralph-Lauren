import {
  AlignLeftOutlined,
  HeartOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";
import Women from "../Women/Women";
import "./NavBar.css";
import { Menu } from "antd";
// import Men from "../Men/Men";
import Search from "../Search/Search";
import Auth from "../Auth/Auth";
import CurrentUser from "../CurrentUser/CurrentUser";
import { ADMIN_EMAIL } from "../../helpers/consts";
import { authContext } from "../../context/authContext";

const { SubMenu } = Menu;

export const NAV_LIST = [
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
  // {
  //   title: "Home",
  //   link: "/home",
  //   id: 3,
  // },
  // {
  //   title: "Sale",
  //   link: "/sale",
  //   id: 4,
  // },
];

class NavBar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="menu"
        >
          <SubMenu
            key="SubMenu"
            title={<AlignLeftOutlined className="submenu-title" />}
            className="subMenu"
          >
            <Menu.ItemGroup>
              {NAV_LIST.map((item) => (
                <Link to={item.link}>
                  <Menu.Item>{item.title}</Menu.Item>
                </Link>
              ))}
            </Menu.ItemGroup>
          </SubMenu>
          <div className="nav-right">
            <SearchOutlined style={{ fontSize: "22px" }} />
            <ShoppingCartOutlined style={{ fontSize: "22px" }} />
            <HeartOutlined style={{ fontSize: "22px" }} />
            <UserOutlined style={{ fontSize: "22px" }} />
          </div>
        </Menu>
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
          </div>
          <div className="nav-right">
            <Search />
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
            <HeartOutlined style={{ fontSize: "24px" }} />
            <CurrentUser />
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
