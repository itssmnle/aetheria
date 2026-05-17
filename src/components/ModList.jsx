import React from 'react';
import ModCard from './ModCard';

const ModList = ({ mods }) => {
  if (mods.length === 0) {
    return (
      <div className="mod-list-container">
        <div className="no-results">
          <h3>No mods found</h3>
          <p>Try adjusting your search or category filter.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mod-list-container">
      <div className="mod-list-header">
        <h1>Mods ({mods.length})</h1>
      </div>
      <div className="mod-grid">
        {mods.map(mod => (
          <ModCard key={mod.id} mod={mod} />
        ))}
      </div>
    </div>
  );
};

export default ModList;
