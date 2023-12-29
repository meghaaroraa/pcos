// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
// // import { useAuth } from './AuthContext';

// function LoginPage() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const navigate = useNavigate(); // Access the navigate function

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await axios.post('http://localhost:5000/login', formData);
//       console.log(response.data); // Handle successful login response
//       // Redirect to home page upon successful login
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Redirect to the signup page on login failure
//       navigate('/signup');
//     }
//   };

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/checkLoggedIn');
//         if (response.data.loggedIn) {
//           navigate('/'); // Redirect to home page if already logged in
//         }
//       } catch (error) {
//         console.error('Error checking login status:', error);
//       }
//     };

//     checkLoggedIn();
//   }, [navigate]);
  
//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <Form onSubmit={handleLogin}>
//         <Form.Group controlId="username">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//         <Link to="/signup">Signup</Link>
//       </Form>
//     </div>
//   );
// }

// export default LoginPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';

// function LoginPage() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const [loggedIn, setLoggedIn] = useState(false); // State to track login status
//   const navigate = useNavigate(); // Access the navigate function

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await axios.post('http://localhost:5000/login', formData);
//       console.log(response.data); // Handle successful login response
      
//       // Update the loggedIn state upon successful login
//       setLoggedIn(true);

//       // Redirect to home page upon successful login
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Redirect to the signup page on login failure
//       navigate('/signup');
//     }
//   };

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/checkLoggedIn');
//         if (response.data.loggedIn) {
//           // Update the loggedIn state if already logged in
//           setLoggedIn(true);
//           navigate('/'); // Redirect to home page if already logged in
//         }
//       } catch (error) {
//         console.error('Error checking login status:', error);
//       }
//     };

//     checkLoggedIn();
//   }, [navigate]);
  
//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <Form onSubmit={handleLogin}>
//         <Form.Group controlId="username">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//         <Link to="/signup">Signup</Link>
//       </Form>
//     </div>
//   );
// }

// export default LoginPage;




// ########   mera shi vala code ##########

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';

// function LoginPage({ setLoggedIn }) {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const navigate = useNavigate(); // Access the navigate function

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await axios.post('http://localhost:5000/signup', formData);
//       console.log(response.data); // Handle successful login response
      
//       // Update the loggedIn state in the parent component upon successful login
//       setLoggedIn(true);

//       // Redirect to home page upon successful login
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Redirect to the signup page on login failure
//       navigate('/signup');
//     }
//   };

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/checkLoggedIn');
//         if (response.data.loggedIn) {
//           // Update the loggedIn state in the parent component if already logged in
//           setLoggedIn(true);
//           navigate('/'); // Redirect to home page if already logged in
//         }
//       } catch (error) {
//         console.error('Error checking login status:', error);
//       }
//     };

//     checkLoggedIn();
//   }, [navigate, setLoggedIn]);
  
//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <Form onSubmit={handleLogin}>
//         <Form.Group controlId="username">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//         <Link to="/signup">Signup</Link>
//       </Form>
//     </div>
//   );
// }

// export default LoginPage;



// ##### maira ka code with css ########


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// function LoginUp() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLoginUp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/signup', formData);
//       console.log(response.data);

//       if (response.status === 200) {
//         navigate('/login');
//       } else {
//         console.error('Login failed:', response.data);
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h2 className="heading">LogIn</h2>
//       <h2 className="heading_under">Welcome Back!</h2>
//       <div className="container">
//         <div className="form-container">
//           <h2 className="heading2">Login to your account</h2>
//           <form onSubmit={handleLoginUp}>
//             <div className="form-group">
//               <label htmlFor="username" style={{ color: '#e0529e' }}>Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password" style={{ color: '#e0529e' }}>Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <button type="submit">Log in</button>
//             </div>
//           </form>
//           <div className="link-container">
//             <div className="form-grouplog">
//               <Link to="/signup" className="link">
//                 Sign Up
//               </Link>
//             </div>
//             <div className="form-grouplog2">
//               <Link to="/signup" className="link">
//                 Don't have an account?
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginUp;

import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage({ setLoggedIn }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response.data);

      setLoggedIn(true);

      // Redirect to home page upon successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      // Redirect to the signup page on login failure
      navigate('/signup');
    }
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get('http://localhost:5000/checkLoggedIn');
        if (response.data.loggedIn) {
              // Update the loggedIn state in the parent component if already logged in
          setLoggedIn(true);
          navigate('/'); // Redirect to home page if already logged in
        }
      } catch (error) {
          console.error('Error checking login status:', error);
      }
    };
    
    checkLoggedIn();
  }, [navigate, setLoggedIn]);

  return (
    <div className='box'>
      <h2 className="heading">LogIn</h2>
      <h2 className="heading_under">Welcome Back!</h2>
      <div className="container">
        <div className="form-container">
          <h2 className="heading2">Login to your account</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username" style={{ color: '#e0529e' }}>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ color: '#e0529e' }}>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit">Log in</button>
            </div>
          </form>
          <div className="link-container">
            <div className="form-grouplog">
              <Link to="/signup" className="link">
                Don't have an account? Sign Up
              </Link>
            </div>
            {/* <div className="form-grouplog2">
              <Link to="/signup" className="link">
                Don't have an account?
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;



