import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./page/AdminPage";

const Routing = () => {
  // let PUBLIC_ROUTES = {};

  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))} */}
        {ADMIN_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Routing;
