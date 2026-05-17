import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ModCard from '../components/ModCard';
import { modsData } from '../data/mods';

const LandingPage = () => {
  return (
    <>
      <Header showSearch={false} />
      <div className="landing-page" style={{ paddingTop: '25vh' }}>
        <div className="hero">
          <h1>Welcome to Aetheria</h1>
          <p>
            Discover, play, and share our carefully curated collection of Minecraft mods built for an exceptional experience.
          </p>
          <div className="hero-buttons">
            <Link to="/mods" className="btn btn-primary">
              Discover mods
            </Link>
            <Link to="/changelog" className="btn btn-secondary">
              Changelog
            </Link>
          </div>
        </div>

        <div className="horizontal-scroll-section">
          <div className="marquee-container">
            <div className="marquee-content">
              {modsData.map(mod => (
                <ModCard key={`a-${mod.id}`} mod={mod} compact={true} />
              ))}
              {modsData.map(mod => (
                <ModCard key={`b-${mod.id}`} mod={mod} compact={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
