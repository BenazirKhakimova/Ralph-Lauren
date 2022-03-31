import "./App.css";
import React from "react";
import Routing from "./Routing";
import ProductsContextProvider from "./context/ProductContext";

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
