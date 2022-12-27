import React, { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { About, Portfolio, Journal, Header, Login, Create, Edit, Footer  } from "./components";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      Navigate("/login");
    })
  }

  return (
    <div className="App">
      <main className="mainWrapper">
        <Router>
          <Header  isAuth={isAuth} signUserOut={signUserOut} />
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/journals" element={<Journal/>} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/createpost" element={<Create isAuth={isAuth} />} />
            <Route path="/editpost" element={<Edit/>} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;