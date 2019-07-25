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
import logo from './logo.png'

export default class NavbarTwo extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      logged: Cookies.get('user')
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
        <div>
          <Navbar dark expand="md">
            <NavbarBrand href="/"><img style={{width: '60px', height: '60px'}} src={logo} alt="Auto Diary"/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/logout">Logout</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Functions
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/test">Services</DropdownItem>
                    <DropdownItem>Test2</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Auto Diary</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login/">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Sign up</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
}
