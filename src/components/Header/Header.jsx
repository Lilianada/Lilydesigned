import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { ErrorBoundary } from "../../components";
import "./Header.scss";

export default function Header({ isAuth, signUserOut }) {
  const [active, setActive] = useState(1);

  const isActive = (index) => {
    setActive(index);
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <ErrorBoundary>
      <header className="desktopHeader">
        <nav className="navItems">
          <Link
            to="/"
            className={active === 1 ? "activeLogo" : "logoName"}
            onClick={() => isActive(1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C10.1699 16 16 10.1699 16 0C16 10.1699 21.8301 16 32 16C21.8301 16 16 21.8301 16 32C16 21.8301 10.1699 16 0 16Z" fill="#fff"/>
            </svg>
            ThingsbyLily
          </Link>

          <ul className="navList">
            <li className="navItem" onClick={() => isActive(2)}>
              <Link
                to="/portfolio"
                className={active === 2 ? "activeLink" : "navLink"}
              >
                Portfolio
              </Link>
            </li>
            <li className="navItem" onClick={() => isActive(3)}>
              <Link
                to="/journals"
                className={active === 3 ? "activeLink" : "navLink"}
              >
                Journals
              </Link>
            </li>
            {!isAuth ? (
              <li className="navItem" onClick={() => isActive(4)}>
                <Link
                  to="/login"
                  className={active === 4 ? "activeLink" : "navLink"}
                >
                  Login
                </Link>
              </li>
            ) : (
              <>
                <li className="navItem" onClick={() => isActive(5)}>
                  <Link
                    to="/createpost"
                    className={active === 5 ? "activeLink" : "navLink"}
                  >
                    Create
                  </Link>
                </li>
                <li
                  className="navItem"
                  onClick={() => {
                    isActive(4);
                    signUserOut();
                  }}
                >
                  <Link
                    to="/login"
                    className={active === 4 ? "activeLink" : "navLink"}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>

      <header className="mobileHeader">
        <Link
          to="/"
          className={active === 1 ? "activeLogo" : "logoName"}
          onClick={() => isActive(1)}
        >
          ThingsbyLilian
        </Link>

        <nav className="navItems">
          <div className="toggle" onClick={handleToggle}>
            <FiMenu
              size={28}
              fill="black"
              stroke="black"
              style={{ cursor: "pointer" }}
            />
          </div>

          <ul className={`navList ${toggle ? "show" : ""}`}>
            <li className="navItem" onClick={() => isActive(1)}>
              <Link to="/" className={active === 1 ? "activeLink" : "navLink"}>
                Home
              </Link>
            </li>
            <li className="navItem" onClick={() => isActive(2)}>
              <Link
                to="/portfolio"
                className={active === 2 ? "activeLink" : "navLink"}
              >
                Portfolio
              </Link>
            </li>
            <li className="navItem" onClick={() => isActive(3)}>
              <Link
                to="/journals"
                className={active === 3 ? "activeLink" : "navLink"}
              >
                Journals
              </Link>
            </li>
            {!isAuth ? (
              <li className="navItem" onClick={() => isActive(4)}>
                <Link
                  to="/login"
                  className={active === 4 ? "activeLink" : "navLink"}
                >
                  Login
                </Link>
              </li>
            ) : (
              <>
                <li className="navItem" onClick={() => isActive(5)}>
                  <Link
                    to="/createpost"
                    className={active === 5 ? "activeLink" : "navLink"}
                  >
                    Create
                  </Link>
                </li>
                <li
                  className="navItem"
                  onClick={() => {
                    isActive(4);
                    signUserOut();
                  }}
                >
                  <Link
                    to="/login"
                    className={active === 4 ? "activeLink" : "navLink"}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </ErrorBoundary>
  );
}
