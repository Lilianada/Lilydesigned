import React from "react";
import {Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  Portfolio,
  Journal,
  Header,
  Footer,
  Contact,
} from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <main className="mainWrapper">
          <Header />
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" index element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/journals" element={<Journal />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
      </main>
    </div>
  );
}

export default App;
