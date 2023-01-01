import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Contact, Home, Portfolio } from "./components";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const location = useLocation();

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<App />} />
            <Route exact path="/" index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
