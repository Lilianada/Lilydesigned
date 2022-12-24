import React, { useState } from "react";
import { Link } from "react-router-dom";
import {ErrorBoundary} from "../../components";
import "./Header.scss";

export default function Header() {
  const [active, setActive] = useState(1);

  const isActive = (index) => {
    setActive(index);
  };

  return (
    <ErrorBoundary>
        <header className="header">
            <nav className="navItems">
              <Link to="/" className={active === 1 ? "activeLogo" : "logoName"} onClick={() => isActive(1)} >
                ThingsbyLilian
              </Link>

              <ul className="navList">
                <li className="navItem" onClick={() => isActive(2)}>
                  <Link to="/portfolio" className={active === 2 ? "activeLink" : "navLink"}>
                    Portfolio
                  </Link>
                </li>
                <li className="navItem" onClick={() => isActive(3)}>
                  <Link to="/journal" className={active === 3 ? "activeLink" : "navLink"}>
                    Journal
                  </Link>
                </li>
                <li className="navItem" onClick={() => isActive(4)}>
                  <Link to="/login" className={active === 4 ? "activeLink" : "navLink"}>
                    Login
                  </Link>
                </li>
                <li className="navItem" onClick={() => isActive (5)}>
                  <Link to="/createpost" className={active === 5 ? "activeLink" : "navLink"}>
                    Create
                  </Link>
                </li>
              </ul>
            </nav>
        </header>
    </ErrorBoundary>
  );
}
