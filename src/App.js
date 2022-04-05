import "./App.css";
import React from "react";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import ProductsContextProvider from "./context/ProductContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import AuthContextProvider from "./context/authContext";

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
      <ProductsContextProvider>
           <Routing />
      </ProductsContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
