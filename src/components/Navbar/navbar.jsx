import React, { useState } from "react";
import "./navbar.css";
import { Nav, NavLink, Bars, NavBtnLink, NavBtn } from "./NavbarElements";

function Navbar() {
  const [click, setClick] = useState("false");

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
        <div className="nav.container">
          <Bars onClick={handleClick} />
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/support-us"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SUPPORT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/SignIn">Log-in</NavLink>
            </li>
            <li>
            <NavBtnLink to="/CreateAccount">Sign-Up</NavBtnLink>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
