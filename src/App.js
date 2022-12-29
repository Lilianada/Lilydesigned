import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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
        <Router>
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
        </Router>
      </main>
    </div>
  );
}

export default App;
