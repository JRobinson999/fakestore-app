import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Cheeseburger",
      price: 5.99,
      description: "A delicious cheeseburger with all the fixings.",
    },
    {
      id: 2,
      name: "Veggie Burger",
      price: 6.49,
      description: "A healthy alternative with fresh veggies.",
    },
    {
      id: 3,
      name: "Chicken Sandwich",
      price: 7.25,
      description: "Grilled chicken on a toasted bun.",
    },
  ]);

  return (
    <div className="App">
      <h1>🛒 E-Commerce Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
