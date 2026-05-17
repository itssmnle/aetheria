import React from 'react';

const ModCard = ({ mod, compact = false }) => {
  return (
    <a 
      href={mod.url || '#'} 
      target={mod.url ? "_blank" : "_self"} 
      rel="noopener noreferrer" 
      className={`mod-card ${compact ? 'compact' : ''}`}
    >
      <div className="mod-card-header">
        <img src={mod.icon} alt={`${mod.name} icon`} className="mod-icon" />
        <div className="mod-info-top">
          <h3>{mod.name}</h3>
          <span className="mod-author">by {mod.author}</span>
        </div>
      </div>
      
      <p className="mod-description">{mod.description}</p>
      
      {!compact && (
        <div className="mod-card-footer">
          <div className="mod-categories">
            {mod.categories.map(cat => (
              <span key={cat} className="category-tag">{cat}</span>
            ))}
          </div>
          <span className="mod-version">{mod.version}</span>
        </div>
      )}
    </a>
  );
};

export default ModCard;
