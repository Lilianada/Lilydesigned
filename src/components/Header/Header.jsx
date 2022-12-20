import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./Header.scss";

export default function Header() {
  // const [toggle, setToggle] = useState(false);

  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };
  return (
    <ErrorBoundary>
      <div className="headers">
        <header className="stylistDesktop__Header">
            <nav className="navItems">
              <Link to="/" className="logoName">
                ThingsbyLilian
              </Link>

              <ul className="navList">
                <li className="navItem">
                  <Link to="/portfolio" className="navLink">
                    Portfolio
                  </Link>
                </li>
                <li className="navItem">
                  <Link to="/journal" className="navLink">
                    Journal
                  </Link>
                </li>
              </ul>
            </nav>
        </header>

        {/* <header className="stylistMobile__Header">
          <img src={Logo} alt="Logo" />
        </header> */}
      </div>
    </ErrorBoundary>
  );
}
