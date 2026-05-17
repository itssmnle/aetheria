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

      {/* ── Bottom Social Buttons (Tacit 3D rounded squares, matching provided design layout) ── */}
      <div className="sidebar-socials">
        {/* Twitch */}
        <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="social-tile" aria-label="Twitch">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
          </svg>
        </a>
        
        {/* YouTube */}
        <a href="https://www.youtube.com/@itssmnle?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="social-tile" aria-label="YouTube">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        {/* X (Twitter) */}
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-tile" aria-label="X">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* Discord */}
        <a href="https://discord.gg/GJM5zxAGsP" target="_blank" rel="noopener noreferrer" className="social-tile" aria-label="Discord">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Header;
