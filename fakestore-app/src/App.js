import React from "react";
import Navbar from "./components/Navibar";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
