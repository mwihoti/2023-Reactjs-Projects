import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Navbars extends Component {
  render() {
    const brandStyle = {
      fontSize: '24px', // Corrected from fontsize to fontSize
      font: 'italic',
      fontWeight: 'bold',
      color: '#ffff',
      borderRadius: '50%',
      backgroundColor: 'blue', // Corrected from backgoundColor to backgroundColor
      padding: '10px',
    };

    const navContainerStyle = {
      display: 'flex',
      justifyContent: "space-between",
      alignItems: "center",
    };

    const navLinkStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
    };

    return (
      <Router>
        <div>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container style={navContainerStyle}>
              <Navbar.Brand href="#home" style={brandStyle}>
                Zim-Movers
                <h1 className=' font-thin text-2sl italic font-serif'>Portfolio</h1>
              </Navbar.Brand>
              <Nav style={navLinkStyle}>
                <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/Pricing"}>Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />
        </div>
        <div>
          <Switch>
            <Route path='/Home'>
              <Home />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/Pricing'>
              <Pricing />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
