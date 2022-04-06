import React from "react";
import Routing from "./Routing";
import ProductsContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/cartContext";
import AuthContextProvider from "./context/authContext";

import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartContextProvider>
          <ProductsContextProvider>
            <Routing />
          </ProductsContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
