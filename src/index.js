import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HelmetProvider} from "react-helmet-async"
import { AnimatePresence } from "framer-motion";
import { Contact, Home, Portfolio } from "./components";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const location = useLocation();

root.render(
  <React.StrictMode>
    <HelmetProvider>
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
    </HelmetProvider>
  </React.StrictMode>
);
