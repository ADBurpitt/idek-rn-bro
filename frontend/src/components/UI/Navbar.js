import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signout } from 'store/actions/auth'

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
  DropdownItem } from 'reactstrap'

class NavigationBar extends Component {
  state = { isOpen: false }
  
  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  profileDropdown = () =>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        { this.props.user.attributes.email }
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to="/profile" >
          My Profile
        </DropdownItem>
        <DropdownItem tag={Link} to="/settings" >
          Settings
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={this.props.signout} >
          Sign out
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  
  navLinks = () =>
    <>
      <NavItem>
        <NavLink tag={Link} to='/test-api' >Test API</NavLink>
      </NavItem>
      { this.profileDropdown() }
    </>

  authLinks = () =>
    <>
      <NavItem>
        <NavLink tag={Link} to='/signin' >Sign in</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to='/signup' >Sign up</NavLink>
      </NavItem>
    </>

  render() {
    console.log(this.props)
    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to='/'>reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              { 
                !this.props.loading && (
                  this.props.user
                  ? this.navLinks()
                  : this.authLinks()
                )
              }
            </Nav>
          </Collapse>
        </Navbar>
    )
  }
}

export default connect(
  state => ({ user: state.auth.user, loading: state.auth.loading }),
  { signout }
)(NavigationBar)