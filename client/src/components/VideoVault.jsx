import React, { useState, useEffect, useRef } from 'react';

// Cloudinary configuration (Option A)
const CLOUDINARY_CLOUD_NAME = 'dawby8dui'; 

export function getVideoUrl(categoryDir, fileName) {
  if (CLOUDINARY_CLOUD_NAME) {
    const encodedCategory = encodeURIComponent(categoryDir);
    const cleanFileName = fileName.replace(/\.[^/.]+$/, ""); // Strip original extension
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/f_auto,q_auto/portfolio/${encodedCategory}/${cleanFileName}.mp4`;
  }
  return `/videos/${categoryDir}/${fileName}`;
}

export function getVideoPoster(categoryDir, fileName) {
  if (CLOUDINARY_CLOUD_NAME) {
    const encodedCategory = encodeURIComponent(categoryDir);
    const cleanFileName = fileName.replace(/\.[^/.]+$/, "");
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/f_auto,q_auto/portfolio/${encodedCategory}/${cleanFileName}.jpg`;
  }
  return ''; 
}

const categoriesData = [
  {
    key: 'AI ADS',
    name: 'AI Commercials',
    file: 'IMG_0930.MOV',
    count: 14,
    tags: ['Runway Gen-3', 'Kling AI', 'Ad Copy'],
    desc: 'High-conversion product videos and luxury campaigns.'
  },
  {
    key: 'AI UGC',
    name: 'AI UGC Creator',
    file: '2.1-invideo-seedance_2_0 (3).mp4',
    count: 8,
    tags: ['Synthesia', 'HeyGen', 'Realistic Avatar'],
    desc: 'Authentic creator review vlog and reaction posts.'
  },
  {
    key: 'ANIMATION AI',
    name: 'AI Animations',
    file: 'Video-346.mp4',
    count: 4,
    tags: ['Luma Machine', 'Morphs', 'Surreal Loops'],
    desc: 'Surreal visual loops and liquid metal morphing physics.'
  },
  {
    key: 'CINEMATIC AI_',
    name: 'Cinematic AI',
    file: 'Video-307 (1).mp4',
    count: 4,
    tags: ['Sora AI', 'Epic Sci-Fi', 'World-Gen'],
    desc: 'Immersive trailers, neon cityscapes, and narrative worlds.'
  }
];

const videosData = [
  // AI ADS
  { id: 'ad-1', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'IMG_0930.MOV', title: 'Luxury Timepiece Mechanics', tags: ['Watches', 'Macro', 'Luxury'], desc: 'Ultra-close macro cinematography revealing the intricate gold gears and jewelled movements inside a precision luxury watch.' },
  { id: 'ad-2', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'IMG_1348.MOV', title: 'Rimless Titanium Eyewear', tags: ['Fashion', 'Eyewear', 'Editorial'], desc: 'Dark editorial-style campaign for a premium rimless sunglasses brand with blue tinted lenses and a moody monochrome aesthetic.' },
  { id: 'ad-3', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'IMG_1351.MOV', title: "Lay's — Every Moment", tags: ['Food', 'FMCG', 'Lifestyle'], desc: "Vibrant fish-eye commercial for Lay's chips capturing a joyful street moment with floating chips and energy-packed visuals." },
  { id: 'ad-4', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-131.mp4', title: 'Wild Stone Ultra Sensual', tags: ['Fragrance', 'Luxury', 'Beauty'], desc: 'Bold product reveal ad for Wild Stone Eau de Parfum featuring a striking red glass bottle against flowing crimson satin fabric.' },
  { id: 'ad-5', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-176.mp4', title: 'Diamond Elegance Jewels', tags: ['Jewelry', 'Ethereal', 'Beauty'], desc: 'Soft dreamy jewellery commercial featuring a woman adorning a delicate diamond earring against a soft blue sky backdrop.' },
  { id: 'ad-6', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-256.mp4', title: 'Maggi Midnight Craving', tags: ['Food', 'FMCG', 'Relatable'], desc: 'Intimate and craveable instant noodle ad showing a girl twirling hot noodles under warm bokeh lights in a cosy night setting.' },
  { id: 'ad-7', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-344.mp4', title: 'Luxume Roofing — Desert', tags: ['Construction', 'Brand', 'Cinematic'], desc: 'Cinematic brand film for Luxume Roofing set in sweeping Saharan dunes with a camel and a desert-hardy corrugated rooftop.' },
  { id: 'ad-8', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-403.mp4', title: 'Velvet Caramel Pour', tags: ['Food', 'Macro', 'Confectionery'], desc: 'Sensual slow-motion macro of molten caramel chocolate spiralling into a perfect swirl under warm golden studio lighting.' },
  { id: 'ad-9', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-611.mp4', title: 'Oakley Prizm Lens Story', tags: ['Eyewear', 'Sport', 'Outdoor'], desc: "Extreme close-up of an Oakley sport shield lens reflecting a dramatic sunset landscape, capturing the brand's raw performance edge." },
  { id: 'ad-10', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-612.mp4', title: 'Rouge Lips — Power Shade', tags: ['Beauty', 'Cosmetics', 'Editorial'], desc: 'Cinematic beauty ad showing a bold red lipstick being applied in a glamorous close-up with dramatic lens flare.' },
  { id: 'ad-11', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-76.mp4', title: 'Vivo Y — Own Your Moment', tags: ['Mobile', 'Lifestyle', 'Youth'], desc: 'Dynamic youth-targeted ad for Vivo smartphone featuring a woman striking a bold boxing pose at a lit poolside venue.' },
  { id: 'ad-12', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-856.mp4', title: 'Noir Light Pillars', tags: ['Abstract', 'Brand', 'Premium'], desc: 'Minimalist dark-tone brand art featuring glowing vertical light pillars in red and blue against a black void — pure atmosphere.' },
  { id: 'ad-13', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-893.mp4', title: 'Shanthi Cafe — Baby Adventure', tags: ['Food', 'Animation', 'Cute'], desc: 'Charming 3D animated commercial for Shanthi Cafe featuring an adorable big-eyed baby discovering the warm restaurant world.' },
  { id: 'ad-14', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-899.mp4', title: 'Luxume Roofing — Kerala Home', tags: ['Construction', 'Brand', 'Tropical'], desc: 'Warm and lush brand film for Luxume Roofing showing a beautiful Kerala traditional home under a mango tree at golden hour.' },

  // AI UGC
  { id: 'ugc-1', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: '2.1-invideo-seedance_2_0 (3).mp4', title: 'Wildplay Chocolate Fragrance', tags: ['UGC', 'Fragrance', 'Creator'], desc: 'Natural UGC-style creator review of Wildplay Chocolate Body Perfume — authentic hold-to-camera presentation with warm tones.' },
  { id: 'ugc-2', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-172.mp4', title: 'Home Renovation Reveal', tags: ['UGC', 'Interior', 'Real Estate'], desc: 'Interior walkthrough UGC showing a freshly renovated room with a wooden glass door, pendant lights, and soft natural daylight.' },
  { id: 'ugc-3', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-32.mp4', title: 'Red Saree Rooftop Moment', tags: ['UGC', 'Fashion', 'Ethnic'], desc: 'Lifestyle UGC featuring a woman in a radiant red silk saree on a breezy rooftop at dusk — graceful and culturally rich.' },
  { id: 'ugc-4', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-359.mp4', title: 'Ethnic Jewellery Try-On', tags: ['UGC', 'Jewellery', 'Fashion'], desc: 'Vibrant creator content showcasing statement earrings and ethnic accessories in a lush outdoor setting — festive and real.' },
  { id: 'ugc-5', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-434.mp4', title: 'Hill Resort Morning View', tags: ['UGC', 'Travel', 'Stay'], desc: 'Breathtaking resort UGC shot from an arch-window looking out over a misty hilltop deck with tall eucalyptus trees.' },
  { id: 'ugc-6', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-830.mp4', title: 'HORIZON Biker Jacket Drop', tags: ['UGC', 'Streetwear', 'Fashion'], desc: 'Hype fashion UGC for the HORIZON moto jacket — extreme close-up of the embroidered logo, neon green stripes, and leather texture.' },
  { id: 'ugc-7', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-834.mp4', title: 'Casual Plaid Lookbook', tags: ['UGC', 'Fashion', 'Minimal'], desc: 'Softly overexposed aesthetic lookbook clip showcasing a casual plaid shirt silhouette — warm, dreamy, and effortlessly organic.' },
  { id: 'ugc-8', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-950.mp4', title: 'Olive Knit Texture Close-Up', tags: ['UGC', 'Apparel', 'Cosy'], desc: 'Textural product UGC revealing the intricate stitch details of an olive-toned knit cardigan — made for slow fashion lovers.' },

  // ANIMATION AI
  { id: 'ani-1', categoryDir: 'ANIMATION AI', categoryName: 'AI ANIMATIONS', file: 'Video-346.mp4', title: 'Shadow Warrior Awakening', tags: ['Animation', 'Dark Fantasy', 'Action'], desc: 'Cinematic dark-fantasy animation of a hooded warrior gripping a blade, wreathed in smoke and ember light in a hauntingly atmospheric scene.' },
  { id: 'ani-2', categoryDir: 'ANIMATION AI', categoryName: 'AI ANIMATIONS', file: 'Video-455.mp4', title: 'NEXUS Mech Surge', tags: ['Animation', 'Sci-Fi', 'Mecha'], desc: 'High-octane 3D animation featuring a red-black mecha suit crackling with electric bolts, mid-combat in a futuristic station corridor.' },
  { id: 'ani-3', categoryDir: 'ANIMATION AI', categoryName: 'AI ANIMATIONS', file: 'Video-563.mp4', title: 'Stealth Drone Over Cliffs', tags: ['Animation', 'Action', 'Sci-Fi'], desc: 'Sweeping aerial animation of a dark stealth drone launching over dramatic fiery cliff-sides with atmospheric light bloom.' },
  { id: 'ani-4', categoryDir: 'ANIMATION AI', categoryName: 'AI ANIMATIONS', file: 'Video-936.mp4', title: 'AI Creator Workflow', tags: ['Animation', 'EdTech', 'Tech'], desc: 'Stylised animated explainer featuring an AI video creator at work with Sony headphones, showcasing InVideo and next-gen AI tools.' },

  // CINEMATIC AI
  { id: 'cine-1', categoryDir: 'CINEMATIC AI_', categoryName: 'CINEMATIC AI', file: 'Video-307 (1).mp4', title: 'Red Hoop Dimension', tags: ['Cinematic', 'Abstract', 'Surreal'], desc: 'Mesmerising surrealist cinematic — a glowing red basketball hoop suspended in a void with electric wire trails weaving into darkness.' },
  { id: 'cine-2', categoryDir: 'CINEMATIC AI_', categoryName: 'CINEMATIC AI', file: 'Video-685.mp4', title: 'Frost Titan Chronicles', tags: ['Cinematic', 'Epic Fantasy', 'Creature'], desc: 'Epic fantasy cinematic featuring a towering armoured beast-warrior wielding a glowing rune staff in a snowswept mountain realm.' },
  { id: 'cine-3', categoryDir: 'CINEMATIC AI_', categoryName: 'CINEMATIC AI', file: 'Video-943.mp4', title: 'Macaw Jungle Serenade', tags: ['Cinematic', 'Nature', 'Wildlife'], desc: 'Breathtaking wildlife cinematic of two scarlet macaws in an intimate jungle moment, bathed in cathedral rays of tropical sunlight.' },
  { id: 'cine-4', categoryDir: 'CINEMATIC AI_', categoryName: 'CINEMATIC AI', file: 'openart-02178156919048000000000000000000000ffffc0a8a22a4844ab_1781569393835_f48e7a7c.mp4', title: 'BMW M3 — Rain & Power', tags: ['Cinematic', 'Automotive', 'Moody'], desc: 'Atmospheric automotive cinematic of a classic red BMW M3 hood-up on a misty rain-soaked road — raw power meets poetic grading.' },
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Interactive Category Card component on main page
function CategoryCard({ category, onOpenReels }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const posterUrl = getVideoPoster(category.key, category.file);
  const videoUrl = getVideoUrl(category.key, category.file);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Preview video play interrupted:', err));
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="category-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenReels(category.key)}
    >
      <div 
        className="category-card-poster"
        style={{ backgroundImage: posterUrl ? `url(${posterUrl})` : 'none' }}
      />
      
      <video
        ref={videoRef}
        className={`category-card-video ${isPlaying ? 'playing' : ''}`}
        src={videoUrl}
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="category-card-scrim"></div>

      <div className="category-card-content">
        <span className="category-card-count">{category.count} Videos</span>
        <h3 className="category-card-title">{category.name}</h3>
        <p className="sub" style={{ fontSize: '12px', opacity: 0.8, color: 'var(--text2)', marginBottom: '8px' }}>
          {category.desc}
        </p>
        <div className="category-card-action">
          <span>Watch in Reels</span>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Single Reel slide inside the smartphone emulator overlay
function ReelFeedSlide({ video, index, activeIndex, isMuted, onMuteToggle }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const posterUrl = getVideoPoster(video.categoryDir, video.file);
  const videoUrl = getVideoUrl(video.categoryDir, video.file);

  // Buffer optimization: mount video player only if within 1 index distance
  const isLoaded = Math.abs(activeIndex - index) <= 1;

  useEffect(() => {
    if (!videoRef.current) return;

    if (activeIndex === index) {
      // Play active video immediately
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Reel feed play error:', err));
    } else {
      // Pause and reset other videos
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [activeIndex, index]);

  return (
    <div className="reel-feed-slide">
      {/* Background Poster Cover shown while video is loading */}
      <div 
        className="reel-feed-poster"
        style={{ 
          backgroundImage: posterUrl ? `url(${posterUrl})` : 'none',
          opacity: isPlaying ? 0 : 1,
          zIndex: 1
        }}
      />

      {isLoaded && (
        <video
          ref={videoRef}
          className="reel-feed-video"
          src={videoUrl}
          muted={isMuted}
          loop
          playsInline
          style={{ zIndex: 0 }}
        />
      )}

      {/* Subtle bottom scrim gradient for text legibility, keeping video at full brightness */}
      <div className="reel-feed-bottom-info">
        <span className="reel-feed-cat-label">{video.categoryName}</span>
        <h3 className="reel-feed-title">{video.title}</h3>
        <p className="reel-feed-desc">{video.desc}</p>
        <div className="reel-feed-tags">
          {video.tags.map((tag, idx) => (
            <span key={idx} className="reel-feed-tag">#{tag}</span>
          ))}
        </div>
      </div>

      {/* Floating HUD Right Panel Controls (Sound button, scroll cues) */}
      <div className="reel-feed-right-actions">
        <button 
          className="reel-action-btn"
          onClick={onMuteToggle}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default function VideoVault({ showreelTrigger, onShowreelClose }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [shuffledReelsList, setShuffledReelsList] = useState([]);
  const feedScrollRef = useRef(null);

  // Listen to the Hero Showreel trigger
  useEffect(() => {
    if (showreelTrigger) {
      handleOpenReels('SHOWREEL');
    }
  }, [showreelTrigger]);

  // Toggle body class to hide navbar and disable background page scrolling when reels overlay is active
  useEffect(() => {
    if (activeCategory) {
      document.body.classList.add('reels-active');
    } else {
      document.body.classList.remove('reels-active');
    }
    return () => {
      document.body.classList.remove('reels-active');
    };
  }, [activeCategory]);

  const handleOpenReels = (categoryKey) => {
    if (categoryKey === 'SHOWREEL') {
      const shuffled = shuffleArray(videosData);
      setShuffledReelsList(shuffled);
    }
    setActiveCategory(categoryKey);
    setActiveReelIndex(0);
  };

  const handleCloseReels = () => {
    setActiveCategory(null);
    setActiveReelIndex(0);
    if (onShowreelClose) {
      onShowreelClose();
    }
  };

  // Filter or shuffle video list for current active reels overlay
  const reelsList = activeCategory === 'SHOWREEL'
    ? shuffledReelsList
    : (activeCategory 
        ? videosData.filter(v => v.categoryDir === activeCategory)
        : []);

  // Handle snapping scroll detection inside the reels feed
  const handleFeedScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;
    const clientHeight = e.currentTarget.clientHeight;
    const index = Math.round(scrollTop / clientHeight);
    if (index !== activeReelIndex && index >= 0 && index < reelsList.length) {
      setActiveReelIndex(index);
    }
  };

  // Handle global escape key to close overlays
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseReels();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="works-grid-section" id="work">
      <div className="works-grid-header">
        <div className="eyebrow reveal" style={{ display: 'inline-flex' }}>Visual Portfolio</div>
        <h2 className="big-title reveal" style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '16px', color: '#fff' }}>
          Visual Production Works
        </h2>
        <p className="sub reveal" style={{ color: 'var(--text2)' }}>
          Hover over each category card to preview the featured campaign. Click to open and browse the catalog in a fullscreen vertical Reels feed.
        </p>
      </div>

      {/* Category cards block */}
      <div className="works-categories-grid reveal">
        {categoriesData.map((category) => (
          <CategoryCard 
            key={category.key} 
            category={category} 
            onOpenReels={handleOpenReels} 
          />
        ))}
      </div>

      {/* Fullscreen Instagram Reels Overlay Player */}
      {activeCategory && (
        <div className="reels-overlay">
          {/* Smartphone Simulator Emulator Frame */}
          <div className="reels-phone-wrapper">
            {/* Close/Back button inside the phone frame */}
            <button className="reel-close-btn" onClick={handleCloseReels} aria-label="Close reels player">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
            </button>

            {/* Top Indicator HUD showing active counter */}
            <div className="reel-counter-hud">
              {activeReelIndex + 1} / {reelsList.length}
            </div>

            <div 
              className="reels-scroll-feed" 
              ref={feedScrollRef}
              onScroll={handleFeedScroll}
            >
              {reelsList.map((video, idx) => (
                <ReelFeedSlide
                  key={video.id}
                  video={video}
                  index={idx}
                  activeIndex={activeReelIndex}
                  isMuted={isMuted}
                  onMuteToggle={() => setIsMuted(!isMuted)}
                />
              ))}
            </div>

            {/* Swipe hint indicator showing at the bottom center if more videos are below */}
            {activeReelIndex < reelsList.length - 1 && (
              <div className="reels-swipe-hint">
                <span>Swipe Up</span>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
