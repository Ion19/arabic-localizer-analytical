import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  
  } from 'reactstrap';
  import logo from '../utlities/images/logo.png';
  import profile from '../utlities/images/profile.jpg';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar  color="dark" dark expand="lg">
          
           
          <NavbarBrand href="/">
            <div className="logo-background">
              <div className="edged"></div>
            <img className="img-fluid" src={logo} alt="logo" />
            </div>

          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/admin/">Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/analytics/">Analytics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/phs Form/">PHS Form</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/permissions/">Permissions</NavLink>
              </NavItem>

              
            </Nav>

               
            <Nav className="ml-auto" navbar>
             
            <NavItem>
                <NavLink href="/">
                <img className="rounded-circle" src={profile} alt="pc" width="32" height="32"/>
                 </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/logout/">
                        Log out
                 </NavLink>
              </NavItem>
              
            </Nav>
           
          </Collapse>
         
        </Navbar>
        </div>
      
    );
  }
}
