import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Home/Homepage";
import Men from "./components/Men/Men";
// import Headers from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Women from "./components/Women/Women";
import AdminPage from "./page/AdminPage";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Homepage />,
      id: 1,
    },
    {
      link: "/men",
      element: <Men />,
      id: 2,
    },
    {
      link: "/women",
      element: <Women />,
      id: 3,
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
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
