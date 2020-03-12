import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "shards-react";

import "./style.css";

class Navbar extends Component {
  render() {
    return (
     
        <Nav fill>
          <NavItem>
            <NavLink href="#">Active</NavLink>
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