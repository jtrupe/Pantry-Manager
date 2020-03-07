import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "shards-react";

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <NavItem>
          <NavLink active href="#">
            Active
        </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
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