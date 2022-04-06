import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { ADMIN_EMAIL } from "../../helpers/consts";
import Auth from "../Auth/Auth";

import "./CurentUser.css";
const CurrentUser = () => {
  const { currentUser, handleLogout } = useContext(authContext);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {currentUser ? (
          <LogoutOutlined onClick={handleLogout} style={{ fontSize: "24px" }} />
        ) : (
          <Auth />
        )}
        {currentUser === ADMIN_EMAIL ? (
          <Link to="/admin" className="nav-admin">
            ADMIN
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default CurrentUser;
