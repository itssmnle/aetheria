import React from 'react';

const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <div className="category-list">
        <button 
          className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          All Mods
        </button>
        
        <div className="category-divider"></div>
        
        {categories.map(category => (
          <button 
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
