import React, { useState } from "react";
import "./navbar.css";
import {
  NavLink,
  Nav,
  Bars,
  NavBtnLink,
  NavMenu,
  NavBtn,
} from "./NavbarElements";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
        <NavLink exact to="/" className="Logo">
          SKIN DIAGNOSIS
        </NavLink>
        <NavMenu className={click ? "nav-menu active" : "nav-menu"}>
          <NavLink
            exact
            to="/Login"
            activeClassName="active"
            onClick={handleClick}
          >
            Log in
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/signin" onClick={handleClick}>Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
        <Bars onClick={handleClick} />
      </Nav>
    </>
  );
}

export default Navbar;
