import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyNavbar from './navbar/Navbar'; // Adjust the import path accordingly
import SignIn from './pages/frontpage/SignIn.jsx';
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
        {/* Always render the NavigationBar */}
        {<MyNavbar />}

        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path='/contactpage' element={<ContactPage />} />
          <Route path='/predictionpage' element={<PredictionPage />} />
          <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;