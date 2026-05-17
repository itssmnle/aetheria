import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import LandingPage from './pages/LandingPage';
import ModsPage from './pages/ModsPage';
import HistoryPage from './pages/HistoryPage';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mods" element={<ModsPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <ThemeToggle />
      <Analytics />
    </Router>
  );
}

export default App;
