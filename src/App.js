import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Home, Portfolio, Journal  } from "./components";

function App() {
  return (
    <div className="App">
      <main className='mainWrapper'>
        <Header/>
      </main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/journal" element={<Journal/>} />
      </Routes>
    </div>
  );
}

export default App;