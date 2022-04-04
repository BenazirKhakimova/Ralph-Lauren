import React from "react";
import CreateProduct from "../CreateProduct/CreateProduct";
import AdminList from "../components/AdminList/AdminList";
import Pagination from "../components/Pagination/Pagination";
// import "./AdminPage.css";
const AdminPage = () => {
  return (
    <div className="pages-mt">
      <CreateProduct />
      <AdminList />
      {/* <Pagination/> */}
    </div>
  );
};

export default AdminPage;
