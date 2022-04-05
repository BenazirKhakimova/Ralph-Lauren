import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { NAV_LIST } from "../NavBar/NavBar";

const CurrentUser = () => {
  const location = useLocation();
  const { currentUser } = useContext(authContext);
  return <div></div>;
};

export default CurrentUser;
