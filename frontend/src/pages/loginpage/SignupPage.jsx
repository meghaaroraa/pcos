// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function SignupPage() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate(); 

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/signup', formData);
//       console.log(response.data); // Handle successful signup response

//       // Redirect to the login page after successful signup
//       // navigate('/login'); // Navigate to the login page
//       if (response.status === 200) {
//         // Redirect to the login page after successful signup
//         navigate('/login'); // Navigate to the login page
//       } else {
//         // Handle other cases if needed
//         console.error('Signup failed:', response.data); // Log any error response
//       }
//     } catch (error) {
//       console.error('Signup failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleInputChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Signup</button>
//         <Link to="/login">SignIn</Link>
//       </form>
//     </div>
//   );
// }

// export default SignupPage;
//  mere vala upr code

// ####### mara ka code with csss #########
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';


function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      console.log(response.data);

      if (response.status === 200) {
        navigate('/login');
      } else {
        console.error('Signup failed:', response.data);
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    
    <div className="page-container">
      <div className="image-container">
          <img src="/doctor.jpg" alt="Background" className="background-image" />
      </div>
      <div className="signup-container">
        <div className="content-container">
          <h2 className="heading">Signup</h2>
          <form className="form-container" onSubmit={handleSignup}>
            <div className="form-group1">
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
            <div className="form-group1">
            <label htmlFor="username" style={{ color: '#e0529e' }}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group1">
            <label htmlFor="username" style={{ color: '#e0529e' }}>Password:</label>
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
              <button type="submit">Signup</button>
            </div>
            <div className="form-grouplog">
              <Link to="/login" className='link'>Already have an account, Sign in</Link>
            </div>
          </form>
          {/* <div className="form-grouplog">
            <Link to="/login" className="link">
              Forgot Password?
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;