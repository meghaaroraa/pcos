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



// import React, { useState, useEffect } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import './Navbar.css';

// const MyNavbar = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/checkLoggedIn');
//         console.log('Response from checkLoggedIn:', response.data);
//         if (response.data.loggedIn) {
//           setLoggedIn(true); // Set loggedIn state to true if user is logged in
//         }
//       } catch (error) {
//         console.error('Error checking login status:', error);
//       }
//     };

//     checkLoggedIn();
//   }, []);

//   return (
//     <div className="Rectangle1">
//       <Navbar variant="light" expand="lg">
//         <Container style={{ padding: '10px' }}>
//           <Navbar.Brand href="#home" className='custom-navlink'>Cyster</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link as={Link} to="/" className='custom-navlink'>Home</Nav.Link>
//               {loggedIn && (
//                 <>
//                   <Nav.Link as={Link} to="/aboutpage" className='custom-navlink'>About</Nav.Link>
//                   <Nav.Link as={Link} to="/contactpage" className='custom-navlink'>Contact</Nav.Link>
//                   <Nav.Link as={Link} to='/predictionpage' className='custom-navlink'>Predict</Nav.Link>
//                 </>
//               )}
//               {!loggedIn && (
//                 <>
//                   <Nav.Link href="/login" className='custom-navlink'>Login</Nav.Link>
//                   <Nav.Link href="/signup" className='custom-navlink'>Signup</Nav.Link>
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default MyNavbar;

