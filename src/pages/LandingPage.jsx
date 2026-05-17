import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ModCard from '../components/ModCard';
import { modsData } from '../data/mods';

// Pick 5 showcase mods
const SHOWCASE_MODS = modsData.slice(0, 5);
const VISIBLE = 3; // cards visible at once
const TOTAL = SHOWCASE_MODS.length;

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % TOTAL), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + TOTAL) % TOTAL), []);

  useEffect(() => {
    const id = setInterval(next, 2200);
    return () => clearInterval(id);
  }, [next]);

  // Build visible indices: center = current, wrap around
  const getVisible = () => {
    const indices = [];
    for (let i = 0; i < VISIBLE; i++) {
      indices.push((current + i) % TOTAL);
    }
    return indices;
  };

  const visibleIndices = getVisible();

  return (
    <>
      <Header showSearch={false} />
      <div className="landing-page" style={{ paddingTop: '18vh' }}>

        {/* ── Hero ── */}
        <div className="hero">
          <h1>Welcome to <span className="mc-font-gradient">Aetheria</span></h1>
          <p>
            Discover, play, and share our carefully curated collection of Minecraft mods built for an exceptional experience.
          </p>
          <div className="hero-buttons">
            <Link to="/mods" className="btn btn-primary">Discover mods</Link>
            <Link to="/history" className="btn btn-secondary">History</Link>
          </div>
        </div>

        {/* ── Carousel ── */}
        <div className="carousel-section">
          <button className="carousel-arrow left" onClick={prev} aria-label="Previous">&#8592;</button>

          <div className="carousel-track">
            {visibleIndices.map((modIdx, position) => (
              <div
                key={SHOWCASE_MODS[modIdx].id}
                className={`carousel-card ${position === 1 ? 'carousel-card--center' : 'carousel-card--side'}`}
              >
                <ModCard mod={SHOWCASE_MODS[modIdx]} compact={true} />
              </div>
            ))}
          </div>

          <button className="carousel-arrow right" onClick={next} aria-label="Next">&#8594;</button>

          {/* Dot indicators */}
          <div className="carousel-dots">
            {SHOWCASE_MODS.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Community Section ── */}
        <div className="community-section">
          <div className="community-bg-overlay" />
          <div className="community-content">
            <h2 className="community-title">JOIN THE COMMUNITY.</h2>
            <p className="community-sub">Connect with players, share your builds, and be part of the Aetheria story.</p>
            <div className="community-buttons">
              <a
                href="https://discord.gg/GJM5zxAGsP"
                target="_blank"
                rel="noopener noreferrer"
                className="community-btn community-btn--discord"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Join Discord
              </a>
              <a
                href="https://www.youtube.com/@itssmnle?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="community-btn community-btn--youtube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default LandingPage;

