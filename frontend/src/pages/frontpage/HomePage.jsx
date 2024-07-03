import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css';

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
              width="250"
              height="150"
              loading="lazy"
            />
          </Col>
          <Col lg={6}>
          <h1 className="mainheading">
                CYSTER
          </h1>
            <div className="text-container">
              
              <p className="lead">
                Welcome to CYSTER, your premier destination for comprehensive women's health information and support. Our platform is dedicated to providing personalized medical insights and fostering a supportive community for discussing health concerns. Sign in to access your personalized results and stay updated with the latest health news and resources tailored just for you.
              </p>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
              <Link to="/login">
                <Button variant="outline-light" size="lg" className="px-4">
                  Sign In
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
