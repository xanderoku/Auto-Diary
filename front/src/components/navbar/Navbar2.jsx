import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Cookies from "js-cookie";
import logo from "./logo.png";

export default class NavbarTwo extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      logged: Cookies.get("user")
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    if (this.props.logged) {
      return (
        <div className="position-relative" style={{ zIndex: "2000" }}>
          <Navbar dark expand="md">
            <NavbarBrand href="/">
              <img
                style={{ width: "60px", height: "60px" }}
                src={logo}
                alt="Auto Diary"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/logout">Logout</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Functions
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/test">Services</DropdownItem>
                    <DropdownItem href="/start">Start page</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div
          className="position-relative"
          style={{ zIndex: "2000", marginLeft: "10%", marginRight: "10%" }}
        >
          <Navbar dark expand="md">
            <NavbarBrand href="/">
              <img
                style={{ width: "60px", height: "60px" }}
                src={logo}
                alt="Auto Diary"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/login/">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/start">Sign up</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
}
