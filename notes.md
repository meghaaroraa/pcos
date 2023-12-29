cd frontend
npm install axios

cd backend
pip install Flask Flask-SQLAlchemy flask-cors
pip install flask-sqlalchemy
pip install Flask-Session


eg:
drishti
drishti1@gmail.com
480

pehle hme secret key generate krni hogi, for using session in flask
this is the code

import os
import secrets

# Generate a secure random key
key = secrets.token_hex(16)  # 16 bytes (32 hex characters)

print(key)  # Output the generated key

my secret key is : 6cd8801663627e5ccb8038ec78f5ad08











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
// import { useAuth } from '../../AuthContext';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate(); // Access the navigate function

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response.data); // Handle successful login response
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
          navigate('/'); // Redirect to home page if already logged in
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoggedIn();
  }, [navigate]);
  
  return (
    <div className="container">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link to="/signup">Signup</Link>
      </Form>
    </div>
  );
}

export default LoginPage;


