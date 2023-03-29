import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "..";
import "./style.scss";
import { motion } from "framer-motion";

export default function Header() {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{ marginRight: ".5rem" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 16C10.1699 16 16 10.1699 16 0C16 10.1699 21.8301 16 32 16C21.8301 16 16 21.8301 16 32C16 21.8301 10.1699 16 0 16Z"
                fill="#fff"
              />
            </svg>
            LilyDesigned
          </Link>

          <ul className="navList">
            <motion.li
              className="navItem"
              onClick={() => isActive(2)}
              whileHover={{ scale: 0.9 }}
            >
              <Link
                to="/portfolio"
                className={active === 2 ? "activeLink" : "navLink"}
              >
                Projects
              </Link>
            </motion.li>
            <motion.li
              className="navItem"
              onClick={() => isActive(3)}
              whileHover={{ scale: 0.9 }}
            >
              <Link
                to="/contact"
                className={active === 3 ? "activeLink" : "navLink"}
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </nav>
      </header>
      </ErrorBoundary>
  );
}
