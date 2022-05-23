import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./HeaderStyles.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <>
      <header className="header">
        <div className="container">
          <img src={logo} alt="logo" />
          <nav className={nav ? "nav active" : "nav"}>
            <ul className="nav-menu-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
            <ul className="nav-menu-2">
              <li className="login">Login</li>
              <li>
                <button className="btn-1">Sign Up</button>
              </li>
            </ul>
          </nav>
          <div className="hamburger" onClick={handleNav}>
            {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
