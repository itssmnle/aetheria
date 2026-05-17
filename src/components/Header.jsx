import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ searchQuery, setSearchQuery, showSearch = false }) => {
  const location = useLocation();

  return (
    <nav className="sidebar-nav">
      {/* ── Top Logo Circle Image Only ── */}
      <div className="sidebar-logo-section">
        <Link to="/" className="sidebar-logo-circle">
          <img src="/images/logo.png" alt="Aetheria Logo" className="sidebar-logo-img" />
        </Link>
      </div>

      {/* ── Navigation Links (No Icons, simple underlines) ── */}
      <div className="sidebar-links">
        <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>
          <span className="link-text">HOME</span>
        </Link>
        
        <Link to="/mods" className={`sidebar-link ${location.pathname === '/mods' ? 'active' : ''}`}>
          <span className="link-text">MODS</span>
        </Link>

        <Link to="/history" className={`sidebar-link ${location.pathname === '/history' ? 'active' : ''}`}>
          <span className="link-text">HISTORY</span>
        </Link>
      </div>

      {/* ── Search Input (Dynamic) ── */}
      {showSearch && (
        <div className="sidebar-search-container">
          <input 
            type="text" 
            className="sidebar-search-input" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      {/* ── Bottom Social Buttons (Tacit 3D rounded squares: YouTube & Discord only, two eyes visible in Discord SVG) ── */}
      <div className="sidebar-socials">
        {/* YouTube */}
        <a href="https://www.youtube.com/@itssmnle?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="social-tile" aria-label="YouTube">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        {/* Discord (Official shape with 2 eyes) */}
        <a href="https://discord.gg/GJM5zxAGsP" target="_blank" rel="noopener noreferrer" className="social-tile" aria-label="Discord">
          <svg width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor">
            <path d="M107.7 8.07A105.15 105.15 0 0 0 77.26 0a77.19 77.19 0 0 0-3.3 6.83A96.67 96.67 0 0 0 52.5 6.83 77.19 77.19 0 0 0 49.2 0 105.15 105.15 0 0 0 18.77 8.07C3.12 31.25-1.07 53.86.35 76.09a105.77 105.77 0 0 0 32.22 16.27 78.29 78.29 0 0 0 6.82-11.08 68.4 68.4 0 0 1-10.73-5.12c.91-.66 1.8-1.34 2.65-2A75.58 75.58 0 0 0 96 74.19c.85.7 1.74 1.38 2.65 2a68.4 68.4 0 0 1-10.73 5.12 78.83 78.83 0 0 0 6.82-11.08 105.54 105.54 0 0 0 32.22-16.27C128.61 53.86 124.08 31.25 107.7 8.07ZM42.45 65.69C36.18 65.69 31 60 31 53S36.18 40.36 42.45 40.36 53.83 46 53.83 53 48.72 65.69 42.45 65.69Zm42.24 0C78.41 65.69 73.24 60 73.24 53S78.41 40.36 84.69 40.36 96.07 46 96.07 53 91 65.69 84.69 65.69Z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Header;
