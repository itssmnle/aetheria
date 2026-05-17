import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searchQuery, setSearchQuery, showSearch = true }) => {
  return (
    <header className="header">
      <div className="header-section header-left">
        <Link to="/" className="logo">
          <span className="logo-icon">⬡</span>
          Aetheria
        </Link>
      </div>

      <div className="header-section header-center">
        <div className="header-nav">
          <Link to="/mods" className="nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            Mods
          </Link>
          <Link to="/changelog" className="nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Changelog
          </Link>
        </div>
      </div>
      
      <div className="header-section header-right">
        {showSearch && (
          <div className="search-container">
            <svg 
              className="search-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search mods..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
