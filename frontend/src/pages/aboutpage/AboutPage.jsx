// About.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import './AboutPage.css'

const About = () => {
  return (
    <div className='Rectangle1'>
        <Container className="px-4 py-5">
            <h1 className="m-5 p-4 heading">About Us</h1>
            <p className='lead p-4 m-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Container>
    </div>
  );
};

export default About;
