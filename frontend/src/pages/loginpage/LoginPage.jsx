import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { Container, Button } from 'react-bootstrap';

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
      navigate('/homepage');
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
          navigate('/homepage'); // Redirect to home page if already logged in
        }
      } catch (error) {
          console.error('Error checking login status:', error);
      }
    };
    
    checkLoggedIn();
  }, [navigate, setLoggedIn]);

  return (
    <div className='Rectangle1'>
      <Container className="px-4 py-5">
        <h1 className="heading">LogIn</h1>

        <div className="container">
          <div className="form-container">
            <p className="heading2">Welcome Back! Login to your account</p>
            
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                {/* <button type="submit">Log in</button> */}
                <Button type = "submit" variant="light" size="lg" className="px-4" style={{ backgroundColor: "#FF6AC3", borderColor: "#FF6AC3", color: "white"}}>
                Sign In
              </Button>
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
      </Container>
    </div>
  );
}

export default LoginPage;

