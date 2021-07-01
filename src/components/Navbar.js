import { div } from "prelude-ls";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <link to="/" className="navbar-logo"></link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu-active" : "nav-menu"}>
          <li className="'nav-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="'nav-item">
            <Link to="/Services" className="nav-link" onClick={closeMobileMenu}>
              About Me
            </Link>
          </li>
          <li className="'nav-item">
            <Link to="/Products" className="nav-link" onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className="'nav-item">
            <Link to="/Products" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="'nav-item">
            <Link to="/Products" className="nav-link" onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
