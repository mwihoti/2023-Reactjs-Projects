import React from 'react';
import logo from './movers.jpg';
import { Navbar, Nav, Button, Form, Collapse } from 'bootstrap-4-react';





import { Link } from 'react-router-dom';
function Nav_bar() {
  return (
    <>
      <Navbar expand="lg" dark bg="dark" mb="3">
        <Navbar.Brand href="#">
          <img src={logo} alt="Bootstrap" width="50" height="50" />

        </Navbar.Brand>
        <Navbar.Toggler target="#navbarColor1" />
        <Collapse navbar id="navbarColor1">
          <Navbar.Nav mr="auto">
            <Link to="/" class="nav-link active ">Home</Link>
            <Link to="/about" class="nav-link active ">About</Link>
            <Link to="/contact" class="nav-link active">Contact</Link>

            <Link to="/pricing" class="nav-link active">Pricing</Link>



          </Navbar.Nav>
          <Form inline my="2 lg-0">
            <Form.Input type="search" placeholder="Search" mr="sm-2" />
            <Button outline info my="2 sm-0">Search</Button>
          </Form>
        </Collapse>
      </Navbar>

    </>
  );
}
export default Nav_bar;