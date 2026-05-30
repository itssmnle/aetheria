import React, { useState, useCallback } from 'react';
import Header from '../components/Header';

/* ── Image Carousel ── */
const ImageCarousel = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const prev = useCallback(() => {
    setLoaded(false);
    setError(false);
    setCurrent(i => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setLoaded(false);
    setError(false);
    setCurrent(i => (i + 1) % images.length);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="timeline-media">
        <img
          src={images[0]}
          alt={alt}
          className="timeline-img-cropped"
          onError={e => { e.target.style.opacity = '0.3'; }}
        />
      </div>
    );
  }

  return (
    <div className="timeline-media timeline-carousel">
      {/* Image frame */}
      <div className="carousel-img-wrap">
        {!loaded && !error && (
          <div className="carousel-placeholder">Loading…</div>
        )}
        {error && (
          <div className="carousel-placeholder">Image unavailable</div>
        )}
        <img
          key={images[current]}
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="timeline-img-cropped"
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.25s ease' }}
          onLoad={() => setLoaded(true)}
          onError={() => { setLoaded(true); setError(true); }}
        />
      </div>

      {/* Controls */}
      <div className="carousel-controls">
        <button onClick={prev} className="carousel-btn" aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="carousel-indicator">{current + 1} / {images.length}</span>
        <button onClick={next} className="carousel-btn" aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

/* ── History Data (only real provided images) ── */
const historyData = [
  {
    date: "May 15, 2022",
    title: "Start of Aetheria",
    content: "Start of Aetheria on Bedrock edition including itssmnle, Kingston_wdw and Tonybaloney.",
    images: ["/images/history/aetheria_start_1779008470164.png"],
  },
  {
    date: "May 29, 2022",
    title: "The Birth of Cheatsmp",
    content: "The birth of cheatsmp, a few structures including the prison, community house, mob farm, and iron golem farm.",
    images: [
      "/images/history/cheatsmp.png",
      "/images/history/cheatsmp_prison_1779008538912.png",
    ],
  },
  {
    date: "January 2023",
    title: "Structural Development",
    content: "Structural development and invitation of 20 members, many structures rising.",
    images: ["/images/history/servermap.png"],
  },
  {
    date: "August 2, 2023",
    title: "Great Server War",
    content: "Great server war, including more than 20+ structures damaged and 3 ships completely destroyed — many withers deployed causing massive destruction.",
    images: ["/images/history/server_war_1779008649287.png"],
  },
  {
    date: "August 15, 2023",
    title: "Grace Period",
    content: "Grace period — the liberalists won. Rebuilding massive structures that were affected, including the prison which allowed the escape of strong player kingston_wdw.",
  },
  {
    date: "September 29, 2023",
    title: "A New District",
    content: "A new district formed under the rule of suhao49, and the ice highway was established.",
    images: [
      "/images/history/ice_highway_1779008821173.png",
      "/images/history/newdist.png",
    ],
  },
  {
    date: "January 2024",
    title: "Big Minigame",
    content: "Big minigame was hosted — a group of players rigged the games and led to a massive fight in the plains near the new district. Spawn was built and structures rose alongside it.",
  },
  {
    date: "February 2024",
    title: "Massive Dupe & Cheat Glitch",
    content: "Massive dupe and cheat glitch by oliver — duping over 50 kits of full netherite, also spawning the ender dragon in the overworld.",
    images: ["/images/history/dupe_glitch_1779009040024.png"],
  },
  {
    date: "April 15, 2024",
    title: "New SMP Formed",
    content: "New SMP formed — the alliance of 4 houses into a big main district. The old area of the server is now protected under spawn protection.",
    images: [
      "/images/history/dalat.png",
      "/images/history/dalat2.png",
      "/images/history/hanoi.png",
      "/images/history/saigon.png",
    ],
  },
  {
    date: "April 17, 2024",
    title: "Aetheria Empire",
    content: "Aetheria empire was formed under itssmnle. Factions of houses Dalat and Hanoi expanded significantly. Bin_1104, the only member of the Hue faction, singlehandedly maintained order. Saigon was still in a civil war in which many players hid from tyrants.",
    images: [
      "/images/history/aetheriaempire1.png",
      "/images/history/aetheriaempire2.png",
      "/images/history/aetheria_empire_1779009071331.png",
    ],
  },
  {
    date: "June 29, 2025",
    title: "Playercount Surge",
    content: "AetheriaSMP exceeded 50 players. With the likes of MeetFlow and ItzAlan, many structures and groups branched from existing factions — one notable group being La Sombra del Wither Cartel, distributing illegal goods across the server.",
    images: [
      "/images/history/memberexpand.png",
      "/images/history/cartel.png",
      "/images/history/cartel2.png",
    ],
  },
  {
    date: "August 13, 2025",
    title: "Server Trailer Released!",
    content: "The official Aetheria server trailer was released showcasing the incredible world and its players.",
    video: "https://www.youtube.com/embed/m9YzqX62_Rg?si=PtI3vTRgRvhC3Ozk",
  },
];

/* ── Page Component ── */
const HistoryPage = () => {
  return (
    <>
      <Header showSearch={false} />
      <div className="history-page">
        <div className="history-header">
          <h1>Aetheria History</h1>
          <p>The timeline of events, wars, and empires.</p>
        </div>

        <div className="timeline">
          {historyData.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h2>{item.title}</h2>
                <p>{item.content}</p>

                {item.images && item.images.length > 0 && (
                  <ImageCarousel images={item.images} alt={item.title} />
                )}

                {item.video && (
                  <div className="timeline-media video-container">
                    <iframe
                      width="100%"
                      height="315"
                      src={item.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
