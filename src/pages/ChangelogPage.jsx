import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ChangelogPage = () => {
  return (
    <>
      <Header showSearch={false} />
      <div className="app-container" style={{ alignItems: 'center', paddingTop: '4rem' }}>
        <div style={{ maxWidth: '800px', width: '100%', padding: '2rem', backgroundColor: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <h1 style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}>Aetheria Changelog</h1>
          
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>v1.0.0 - The Beginning</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>May 16, 2026</p>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Initial launch of Aetheria.</li>
              <li>Added core utility and performance mods.</li>
              <li>Implemented the new white and gray custom theme.</li>
            </ul>
          </div>

          <Link to="/" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChangelogPage;
