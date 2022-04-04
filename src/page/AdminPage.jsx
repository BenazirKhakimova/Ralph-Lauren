import React from "react";
import CreateProduct from "../CreateProduct/CreateProduct";
import AdminList from "../components/AdminList/AdminList";
import Filter from "../components/Filter/Filter";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
// import "./AdminPage.css";
const AdminPage = () => {
  return (
    <div className="pages-mt">
    <Search/>
      <CreateProduct />
      <AdminList />
      <Pagination/>
    </div>
  );
};

export default AdminPage;
