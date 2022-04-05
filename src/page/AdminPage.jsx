import React from "react";
import AdminList from "../components/AdminList/AdminList";
import CreateProduct from "../components/CreateProduct/CreateProduct";

// import "./AdminPage.css";
const AdminPage = () => {
  return (
    <div className="pages-mt">
      <CreateProduct/>
      <AdminList />
    </div>
  );
};

export default AdminPage;
