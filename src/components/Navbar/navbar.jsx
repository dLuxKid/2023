import React, { useState } from "react";
import "./navbar.css";
import { NavLink, Nav, Bars} from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState("false");

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Signup"
                activeClassName="active"
                onClick={handleClick}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <Bars className={click ? "fas fa-times fa-fade" : "fas fa-bars"}/>
          </div>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
