import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Portfolio, Journal, Header  } from "./components";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/journal" element={<Journal/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;