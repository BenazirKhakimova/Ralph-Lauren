import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Home/Homepage";
import NavBar from "./components/NavBar/NavBar";
import AdminPage from "./page/AdminPage";
import Error404 from "./page/Error404";
import EditProduct from "./components/EditProduct/EditProduct";
import AdminList from "./components/AdminList/AdminList";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import SweatersMen from "./components/SweatersMen/SweatersMen";
import FootwearMen from "./components/FootwearMen/FootwearMen";
import PoloMen from "./components/PoloMen/PoloMen";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
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
    {
      link: "/sweaters",
      element: <SweatersMen />,
      id: 4,
    },
    {
      link: "/footwear",
      element: <FootwearMen />,
      id: 5,
    },
    {
      link: "/polo",
      element: <PoloMen />,
      id: 6,
    },
    {
      link: "/details/:id",
      element: <DetailsProduct/>,
      id: 7,
    },
  ];

  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 10,
    },
    {
      link: "/list",
      element: <AdminList />,
      id: 11,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 12,
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
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
