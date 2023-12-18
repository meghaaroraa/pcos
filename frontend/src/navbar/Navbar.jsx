import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

import './Navbar.css'

const MyNavbar = () => {
  return (

    <div className="Rectangle1">

    <Navbar variant="light" expand="lg">

      <Container style={{padding:"10px"}}>

      <Navbar.Brand href="#home" className='custom-navlink'>Cyster</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="ms-auto">
          <Nav.Link href="/" className='custom-navlink'>Home</Nav.Link>
          <Nav.Link href="/aboutpage" className='custom-navlink'>About</Nav.Link>
          <Nav.Link href="/contactpage" className='custom-navlink'>Contact</Nav.Link>
          <Nav.Link href='/predictionpage' className='custom-navlink'>Predict</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
};

export default MyNavbar;
