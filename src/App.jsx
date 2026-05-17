import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ModsPage from './pages/ModsPage';
import ChangelogPage from './pages/ChangelogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mods" element={<ModsPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
