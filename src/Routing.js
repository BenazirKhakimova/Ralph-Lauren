import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import NavBar from "./components/NavBar/NavBar";
import AdminPage from "./page/AdminPage";
import Error404 from "./page/Error404";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Homepage />,
      id: 1,
    },
  ];

  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
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
