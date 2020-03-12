import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "shards-react";

import "./style.css";

class Navbar extends Component {
  render() {
    return (
     
        <Nav fill>
          <NavItem>
          <NavLink href="/dashboard">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/search">Search A Recipe</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Favorites</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
        </NavLink>
          </NavItem>
        </Nav>
     
    );
  }
}

export default Navbar;