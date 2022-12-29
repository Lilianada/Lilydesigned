import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Contact, Footer, Header, Home, Portfolio } from "./components";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const location = useLocation();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
