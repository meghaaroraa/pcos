import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './navbar/Navbar';
import HomePage from './pages/frontpage/HomePage';
import AboutPage from './pages/aboutpage/AboutPage';
import ContactPage from './pages/contactpage/ContactPage';
import PredictionPage from './pages/predictionpage/PredictionPage';

function App() {
  return (
    <div className="App">

      <Router>

      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path='/contactpage' element={<ContactPage />} />
        <Route path='/predictionpage' element={<PredictionPage /> } />
      </Routes>

    </Router>

    </div>
  );
}

export default App;
