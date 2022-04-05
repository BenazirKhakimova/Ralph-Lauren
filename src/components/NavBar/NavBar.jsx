import {
  AlignLeftOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

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
                <Link to={item.link} key={item.id}>
                  <Menu.Item>{item.title}</Menu.Item>
                </Link>
              ))}
            </Menu.ItemGroup>
          </SubMenu>
          <Link className="logo-link" to="/">
            <span className="visually-hidden-logo">Ralph Lauren</span>
          </Link>
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
      </>
    );
  }
}

export default NavBar;
