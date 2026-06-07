import React, { useState } from 'react';
import Header from '../components/Header';
import { historyData } from './HistoryPage';

const GalleryPage = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Extract all images from historyData
  const allImages = historyData.reduce((acc, item) => {
    if (item.images && item.images.length > 0) {
      item.images.forEach(img => {
        acc.push({
          src: img,
          title: item.title,
          date: item.date,
          content: item.content
        });
      });
    }
    return acc;
  }, []);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <Header showSearch={false} />
      <div className="gallery-page">
        <div className="gallery-header">
          <h1>Historical Gallery</h1>
          <p>Visual moments from the timeline of Aetheria</p>
        </div>

        <div className="gallery-grid">
          {allImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-card" 
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-img-wrapper">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  loading="lazy" 
                  onError={(e) => { e.target.style.opacity = '0.3'; }}
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-date">{image.date}</span>
                  <h3>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <button className="lightbox-nav prev" onClick={prevImage} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="lightbox-content-wrap" onClick={(e) => e.stopPropagation()}>
              <img 
                src={allImages[activeImageIndex].src} 
                alt={allImages[activeImageIndex].title} 
                className="lightbox-image"
              />
              <div className="lightbox-details">
                <span className="lightbox-date">{allImages[activeImageIndex].date}</span>
                <h2>{allImages[activeImageIndex].title}</h2>
                <p>{allImages[activeImageIndex].content}</p>
              </div>
            </div>

            <button className="lightbox-nav next" onClick={nextImage} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryPage;
