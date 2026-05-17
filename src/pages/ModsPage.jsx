import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ModList from '../components/ModList';
import { modsData, allCategories } from '../data/mods';

const ModsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredMods = useMemo(() => {
    return modsData.filter(mod => {
      const matchesSearch = 
        mod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        mod.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === null || mod.categories.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="app-container">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="main-content">
        <Sidebar 
          categories={allCategories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        <ModList mods={filteredMods} />
      </main>
    </div>
  );
};

export default ModsPage;
