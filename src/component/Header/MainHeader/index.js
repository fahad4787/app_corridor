import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../Images/logo.svg";
const MainHeader = () => {

  const [navBar,setNavbar] = useState(false)

  const changeNavBar = () =>{
    if(window.scrollY >= 80){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
    
  }
  window.addEventListener('scroll', changeNavBar);
  
  return (
    <>
    <Navbar expand="lg" className={navBar? 'nav_active': 'mainHeader'}>
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navBar">
        <Nav className="justify-content-end w-100">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <NavDropdown title="Service" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Pages</Nav.Link>
          <Nav.Link href="#home">Portofolio</Nav.Link>
          <Nav.Link href="#home">Blog</Nav.Link>
          <Nav.Link href="#home">Contact</Nav.Link>
          <Button variant="outline-primary"  className="btn">Download</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  );
};

export default MainHeader;
