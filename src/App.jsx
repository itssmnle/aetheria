import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import LandingPage from './pages/LandingPage';
import ModsPage from './pages/ModsPage';
import HistoryPage from './pages/HistoryPage';
import CommandsPage from './pages/CommandsPage';

// Helper component that resets page scroll to (0, 0) on route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mods" element={<ModsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/commands" element={<CommandsPage />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
