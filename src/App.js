import "./App.css";
import React from "react";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import ProductsContextProvider from "./context/ProductContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import MenList from "./components/MenList/MenList";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
           <Routing />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
