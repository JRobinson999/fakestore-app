import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This code initializes a React application by rendering the main `App` component into the root element of the HTML document. It uses `ReactDOM.createRoot` to create a root for the React application and `React.StrictMode` to help identify potential problems in the application during development. The `App` component serves as the entry point for the application, where all other components will be rendered.
// The `React.StrictMode` is a tool for highlighting potential problems in an application, such as deprecated APIs or unsafe lifecycle methods. It does not render any visible UI but helps developers write better React code by providing warnings and suggestions in the console during development.
