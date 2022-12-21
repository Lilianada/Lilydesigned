import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Portfolio, Journal  } from "./components";

function App() {
  return (
    <div className="App">
      <main className='mainWrapper'>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/journal" element={<Journal/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;