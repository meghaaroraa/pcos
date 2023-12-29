// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import NavigationBar from './navbar/Navbar';
// import HomePage from './pages/frontpage/HomePage';
// import AboutPage from './pages/aboutpage/AboutPage';
// import ContactPage from './pages/contactpage/ContactPage';
// import PredictionPage from './pages/predictionpage/PredictionPage';
// import SignupPage from './pages/loginpage/SignupPage';
// import LoginPage from './pages/loginpage/LoginPage';

// function App() {
//   return (
//     <div className="App">

//       <Router>

//       <NavigationBar />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/aboutpage" element={<AboutPage />} />
//         <Route path='/contactpage' element={<ContactPage />} />
//         <Route path='/predictionpage' element={<PredictionPage /> } />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//       </Routes>

//     </Router>

//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import NavigationBar from './navbar/Navbar';
// import HomePage from './pages/frontpage/HomePage';
// import AboutPage from './pages/aboutpage/AboutPage';
// import ContactPage from './pages/contactpage/ContactPage';
// import PredictionPage from './pages/predictionpage/PredictionPage';
// import SignupPage from './pages/loginpage/SignupPage';
// import LoginPage from './pages/loginpage/LoginPage';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <div className="App">
//       <Router>
//         {/* Pass loggedIn state and setLoggedIn function as props */}
//         <NavigationBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/aboutpage" element={<AboutPage />} />
//           <Route path='/contactpage' element={<ContactPage />} />
//           <Route path='/predictionpage' element={<PredictionPage />} />
//           {/* Pass setLoggedIn function to LoginPage component */}
//           <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
//           <Route path="/signup" element={<SignupPage />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './navbar/Navbar';
import HomePage from './pages/frontpage/HomePage';
import AboutPage from './pages/aboutpage/AboutPage';
import ContactPage from './pages/contactpage/ContactPage';
import PredictionPage from './pages/predictionpage/PredictionPage';
import SignupPage from './pages/loginpage/SignupPage';
import LoginPage from './pages/loginpage/LoginPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        {/* Conditionally render the NavigationBar based on the loggedIn state */}
        {loggedIn && <NavigationBar />}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path='/contactpage' element={<ContactPage />} />
          <Route path='/predictionpage' element={<PredictionPage />} />
          {/* Pass setLoggedIn function to LoginPage component */}
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

