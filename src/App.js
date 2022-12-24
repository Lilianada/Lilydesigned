import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Portfolio, Journal, Header, Login, Create, Edit  } from "./components";

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/journals" element={<Journal/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/createpost" element={<Create/>} />
            <Route path="/editpost" element={<Edit/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;