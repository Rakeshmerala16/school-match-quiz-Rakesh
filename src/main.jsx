import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Render the root React app wrapped in BrowserRouter with base path "/quiz"
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/quiz">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
