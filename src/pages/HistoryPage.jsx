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

/* ── Minecraft Names & Factions Parser ── */
const players = ['itssmnle', 'kingston_wdw', 'CheeseIsWeird', 'suhao49', 'Bin_1104', 'MeetFlow', 'ItzAlan'];
const factions = {
  'La Sombra Del Wither Cartel': 'faction-cartel',
  'la sombra del wither cartel': 'faction-cartel',
  'La Sombra del Wither Cartel': 'faction-cartel',
  'Aetheria Empire': 'faction-empire',
  'Aetheria empire': 'faction-empire',
  'NewSMP': 'faction-newsmp',
  'newsmp': 'faction-newsmp',
  'Hanoi': 'faction-hanoi',
  'Dalat': 'faction-dalat',
  'Saigon': 'faction-saigon',
  'Hue': 'faction-hue'
};

const formatTextWithMinecraftEntities = (text) => {
  if (!text) return '';
  
  // Sort factions by length descending to match longer strings first
  const factionKeys = Object.keys(factions).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`\\b(${[...players, ...factionKeys].map(x => x.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})\\b`, 'gi');
  
  const parts = text.split(pattern);
  if (parts.length === 1) return text;
  
  return parts.map((part, index) => {
    // Check if player name
    const matchedPlayer = players.find(p => p.toLowerCase() === part.toLowerCase());
    if (matchedPlayer) {
      return (
        <span key={index} className={`player-name player-${matchedPlayer}`} title={`Minecraft Player: ${matchedPlayer}`}>
          {matchedPlayer}
        </span>
      );
    }
    
    // Check if faction
    const factionKey = factionKeys.find(f => f.toLowerCase() === part.toLowerCase());
    if (factionKey) {
      const className = factions[factionKey];
      return (
        <span key={index} className={className}>
          {part}
        </span>
      );
    }
    
    return part;
  });
};

/* ── History Data ── */
const historyData = [
  {
    date: "May 15, 2022",
    title: "Start of Aetheria",
    content: "Start of Aetheria, on Bedrock Edition including itssmnle, kingston_wdw and CheeseIsWeird and various other members.",
    images: ["/images/history/bedrock.png"]
  },
  {
    date: "May 29, 2022",
    title: "The Birth of CheatSMP",
    content: "The birth of CheatSMP, a few structures including the prison, community house, multiple areas popping up.",
    images: ["/images/history/cheatsmp.png"]
  },
  {
    date: "January 2023",
    title: "Structural Development",
    content: "Structural development and invitation of 20 members, many structures rising.",
    images: ["/images/history/servermap.png"]
  },
  {
    date: "August 2, 2023",
    title: "Great Server War",
    content: "Great server war, including more than 20+ structures damaged and 3 ships completely destroyed - many withers deployed causing massive destruction."
  },
  {
    date: "August 15, 2023",
    title: "Grace Period & Rebuilding",
    content: "Grace period the liberalists won - rebuilding massive structures that were affected including the prison, which burnt down, in which allowed the escape of kingston_wdw who then griefed multiple structures."
  },
  {
    date: "September 29, 2023",
    title: "A New District & Ice Highway",
    content: "A new district formed under the rule of suhao49, and the highway was established.",
    images: ["/images/history/newdist.png"]
  },
  {
    date: "January 2024",
    title: "The Rigged Minigame Plains Fight",
    content: "Big minigame was hosted in January 2024 - a group of players rigged the games and led to a massive fight in the plains near the new district + spawn was built and structures rose alongside it.",
  },
  {
    date: "April 15, 2024",
    title: "NewSMP Formed",
    content: "NewSMP was formed, the now formed alliance of 4 houses into a big main district. The old area of the server is now protected under spawn protection.",
    images: [
      "/images/history/dalat.png",
      "/images/history/dalat2.png",
      "/images/history/hanoi.png",
      "/images/history/saigon.png"
    ]
  },
  {
    date: "April 17, 2024",
    title: "Aetheria Empire Formed",
    content: "Aetheria Empire was formed under itssmnle, with structures such as the Aetherian Church, AetheriansXP being mostly populated. Factions of houses Dalat, Hanoi, expanded their area that prospered significantly meanwhile Bin_1104, the only member in the Hue faction singlehandedly maintained the order of his own faction by building his own structures. Saigon was still in a civil war in which many players hid from the ongoing war.",
    images: [
      "/images/history/aetheriaempire1.png",
      "/images/history/aetheriaempire2.png"
    ]
  },
  {
    date: "June 29, 2025",
    title: "Higher Playercount & Cartel Rise",
    content: "AetheriaSMP was pushed to a higher playercount, now exceeding 50. With the likes of MeetFlow and ItzAlan many other structures and groups branched from the existing factions. One notable group being the la sombra del wither cartel, distributing illegal goods across the server.",
    images: [
      "/images/history/memberexpand.png",
      "/images/history/cartel.png",
      "/images/history/cartel2.png"
    ]
  },
  {
    date: "August 13, 2025",
    title: "Official Server Trailer",
    content: "August 13, 2025: Server trailer released!",
    video: "https://www.youtube.com/embed/m9YzqX62_Rg?si=PtI3vTRgRvhC3Ozk"
  },
  {
    date: "May 21, 2026",
    title: "New Season & Updated Spawn",
    content: "May 21, 2026: A new season for AetheriaSMP! Server spawn is updated.",
    images: ["/images/history/newaeth.png"]
  }
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
                <p>{formatTextWithMinecraftEntities(item.content)}</p>

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
