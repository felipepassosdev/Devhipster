import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar
        variant='dark'
        expand='lg'
      >
        <Navbar.Brand href="/"><h3>DevHipster</h3></Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto text-center'>
            <LinkContainer to="/cursos">
              <Nav.Link>
                <h4>Cursos</h4>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/execicios">
              <Nav.Link>
                <h4>Exercícios</h4>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/vagas">
              <Nav.Link>
                <h4>Vagas</h4>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/vlogs">
              <Nav.Link>
                <h4>Vlogs</h4>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/podcasts">
              <Nav.Link>
                <h4>Podcasts</h4>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
