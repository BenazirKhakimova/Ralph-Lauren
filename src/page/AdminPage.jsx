import React from "react";
import CreateProduct from "../CreateProduct/CreateProduct";
import AdminList from "../components/AdminList/AdminList";
import Filter from "../components/Filter/Filter";
// import "./AdminPage.css";
const AdminPage = () => {
  return (
    <div className="pages-mt">
      <CreateProduct />
      <AdminList />
    </div>
  );
};

export default AdminPage;
