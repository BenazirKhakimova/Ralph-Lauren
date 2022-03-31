import "./App.css";
import React from "react";
import Routing from "./Routing";
import ProductsContextProvider from "./context/ProductContext";
import Header from "./components/Header/Header";
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
