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

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.logged !== this.props.logged) {
  //     return this.setState({logged: Cookies.get('user')})
  //   }
  // }

  render() {
    // const loggedIn = Cookies.get("user");
    if (this.props.logged) {
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
