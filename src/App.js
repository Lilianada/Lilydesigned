import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Portfolio, Journal, Header, Footer, Contact  } from "./components";

function App() {
  return (
    <div className="App">
      <main className="mainWrapper">
        <Router>
          <Header />
          <Routes>
            <Route path="/" index element={<Home/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/journals" element={<Journal/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;