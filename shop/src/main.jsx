import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ProductProvider from "./context/ProductContext";
import ThemeProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ThemeProvider>
  </React.StrictMode>
);