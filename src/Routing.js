import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import NavBar from "./components/NavBar/NavBar";
import AdminPage from "./page/AdminPage";
import Error404 from "./page/Error404";
import EditProduct from "./components/EditProduct/EditProduct";
import AdminList from "./components/AdminList/AdminList";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Homepage />,
      id: 1,
    },
    {
      link: "/details/:id",
      id: 4,
    },
  ];

  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/list",
      element: <AdminList />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 3,
    },
  ];

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        {ADMIN_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Routing;
