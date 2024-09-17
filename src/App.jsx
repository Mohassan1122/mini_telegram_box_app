
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './layout/Layout.jsx';
import LandingPage from './components/LandingPage';
import WelcomePage from './components/WelcomePage';
import MiningPage from './components/MiningPage';
import Task from './pages/Task.jsx';
import Team from './pages/Team.jsx';
import Leadership from './pages/Leaderboard.jsx';
import BoostPage from './pages/BoostPage.jsx';



const tele = window.Telegram.WebApp;

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  useEffect(() => {
    tele.ready();
  });

  return (
    <>
      <Router>
        <Routes>
          {/* Public pages without the Navbar */}
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/" element={<LandingPage />} />


          {/* Pages with the Navbar */}
          <Route element={<Layout />}>
            <Route path="/mining" element={<MiningPage />} />
            <Route path="/task" element={<Task />} />
            <Route path="/team" element={<Team />} />
            <Route path="/boost" element={<BoostPage />} />
            <Route path="/leadership" element={<Leaderboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;


