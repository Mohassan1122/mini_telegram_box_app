
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import WelcomePage from './components/WelcomePage';
import MiningPage from './components/MiningPage';



const tele = window.Telegram.WebApp;

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
useEffect(()=>{
  tele.ready();
});

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/mining" element={<MiningPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


