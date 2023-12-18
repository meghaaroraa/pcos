import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css'

function HomePage() {
  return (
    <div className="Rectangle1">
    <Container className="px-4 py-5">
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
        <Col sm={8} lg={6}>
          <img
            src="/doctor.jpg" // Replace with your image source
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="350"
            height="250"
            loading="lazy"
          />
        </Col>
        <Col lg={6}>
          <h1 className="mainheading">
            CYSTER
          </h1>
          <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button variant="outline-light" size="lg" className="px-4" style={{color: "#FF6AC3", borderColor: "#FF6AC3"}}>
              Sign In
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default HomePage;
