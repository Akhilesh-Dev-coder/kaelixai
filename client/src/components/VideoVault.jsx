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
  { id: 'ad-1', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'IMG_0930.MOV', title: 'Aurum Luxury Chrono', tags: ['Runway', 'Kling', 'Luxury'], desc: 'A hyper-luxurious promotional campaign blending mechanical precision with dark, atmospheric AI generation.' },
  { id: 'ad-2', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'IMG_1348.MOV', title: 'Noir SS26 Runway', tags: ['Midjourney', 'Runway', 'Fashion'], desc: 'A dynamic AI fashion show showcase highlighting modern fabric folds, high-end styling, and atmospheric runway stages.' },
  { id: 'ad-3', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'IMG_1351.MOV', title: 'Volta EV Velocity', tags: ['Veo', 'Luma', 'Automotive'], desc: 'High-speed automotive marketing highlighting silent velocity, smooth tracking, and sharp reflections.' },
  { id: 'ad-4', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-131.mp4', title: 'Cyber Dynamics Corp', tags: ['Kling', 'Cyberpunk', 'Ad'], desc: 'A neon-drenched corporate promo displaying cybernetic augmentations and gritty urban atmospheres.' },
  { id: 'ad-5', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-176.mp4', title: 'Home Intelligence Hub', tags: ['Runway', 'Product', 'Minimalist'], desc: 'Commercial highlighting sleek hardware design, natural glass reflections, and ambient warm lighting.' },
  { id: 'ad-6', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-256.mp4', title: 'EcoSphere Biosphere', tags: ['Flux', 'Veo', 'Future'], desc: 'A beautiful botanical trailer showcasing automated biosphere containment loops and vibrant plant life.' },
  { id: 'ad-7', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-344.mp4', title: 'Lumine Skin Elixir', tags: ['Midjourney', 'Beauty', 'Organic'], desc: 'Cosmetic launch video combining fluid simulation macros with soft lens glows and organic lighting.' },
  { id: 'ad-8', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-403.mp4', title: 'AeroGlide Drone Reveal', tags: ['Luma', 'Tech', 'Hardware'], desc: 'Drone cinematic sequence featuring precision carbon fiber shells and dynamic camera flight paths.' },
  { id: 'ad-9', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-611.mp4', title: 'Zenith Watch Cinematic', tags: ['Runway', 'Premium', 'Timeless'], desc: 'Classic mechanical watch commercial showcasing gold gear rotations and dark premium backdrops.' },
  { id: 'ad-10', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-612.mp4', title: 'Nectar Roast Brew', tags: ['Kling', 'Slow-Mo', 'Lifestyle'], desc: 'Slow-motion gourmet coffee commercial focusing on hot steam drops and rustic barista settings.' },
  { id: 'ad-11', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-76.mp4', title: 'Pulse Energy Surge', tags: ['Veo', 'Vibrant', 'Commercial'], desc: 'High-impact fitness brand commercial focusing on energy effects and rhythmic motion cuts.' },
  { id: 'ad-12', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-856.mp4', title: 'Endure Athletics Promo', tags: ['Flux', 'Runway', 'Sport'], desc: 'Grit-oriented sports advertisement showcasing runner dynamics, stadium spotlights, and dark textures.' },
  { id: 'ad-13', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-893.mp4', title: 'Tokyo Neon Bistro', tags: ['Kling', 'Atmospheric', 'Food'], desc: 'A close-up look at steaming ramen bowls, neon lanterns, and ambient Japanese restaurant vibes.' },
  { id: 'ad-14', categoryDir: 'AI ADS', categoryName: 'AI ADS', file: 'Video-899.mp4', title: 'Aura Spa & Wellness', tags: ['Luma', 'Cinematic', 'Escape'], desc: 'Commercial for luxury retreats showing candle lighting, steam treatments, and soft focus macro lenses.' },

  // AI UGC
  { id: 'ugc-1', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: '2.1-invideo-seedance_2_0 (3).mp4', title: 'Creator FitWear Review', tags: ['UGC', 'Apparel', 'Vlog'], desc: 'Organic creator content showcasing realistic motion, authentic expression, and high conversion flow.' },
  { id: 'ugc-2', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-172.mp4', title: 'HomePod AI Unboxing', tags: ['UGC', 'Gadget', 'Real-Feel'], desc: 'Realistic home unboxing layout focusing on raw audio testing and honest packaging details.' },
  { id: 'ugc-3', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-32.mp4', title: 'SkinRoutine Morning Glow', tags: ['UGC', 'Beauty', 'Tutorial'], desc: 'Vlog showing daily skin routine, close-up texture application, and friendly direct-to-camera speak.' },
  { id: 'ugc-4', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-359.mp4', title: 'SmartFryer Honest Opinion', tags: ['UGC', 'Kitchen', 'Review'], desc: 'Fast-paced cooking UGC highlighting kitchen product functionality and mouth-watering closeups.' },
  { id: 'ugc-5', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-434.mp4', title: 'Journeys App Experience', tags: ['UGC', 'Software', 'Travel'], desc: 'Mobile app testimonial focusing on user journeys interface and real screen captures.' },
  { id: 'ugc-6', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-830.mp4', title: 'AeroHeadset Sound Test', tags: ['UGC', 'Gaming', 'Hardware'], desc: 'Gaming UGC clip showcasing ambient light setups, microphone quality tests, and packaging reviews.' },
  { id: 'ugc-7', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-834.mp4', title: 'PureBottle Daily Review', tags: ['UGC', 'Eco', 'Health'], desc: 'Outdoor vlog reviewing insulation features and pure taste during fitness runs.' },
  { id: 'ugc-8', categoryDir: 'AI UGC', categoryName: 'AI UGC', file: 'Video-950.mp4', title: 'Stylist Shaving Secrets', tags: ['UGC', 'Grooming', 'SelfCare'], desc: 'Men care UGC showcasing shaver performance, close-ups skin finish, and easy instructions.' },

  // ANIMATION AI
  { id: 'ani-1', categoryDir: 'ANIMATION AI', categoryName: 'AI ANIMATIONS', file: 'Video-346.mp4', title: 'Metamorphosis Loop', tags: ['Animation', 'Surrealism', 'Luma'], desc: 'Bending the physics of reality with seamless morphs, liquid metallic shaders, and continuous motion loops.' },
  { id: 'ani-2', categoryDir: 'ANIMATION AI', categoryName: 'AI ANIMATIONS', file: 'Video-455.mp4', title: 'Cosmic Voyager Sequence', tags: ['Sci-Fi', 'Space', 'Flux'], desc: 'Beautiful 3D space flight animation gliding across solar winds and stellar neon gaseous clusters.' },
  { id: 'ani-3', categoryDir: 'ANIMATION AI', categoryName: 'AI ANIMATIONS', file: 'Video-563.mp4', title: 'Digital Dreamscape I', tags: ['Fantasy', 'Landscape', 'Runway'], desc: 'Infinite landscape flight showing levitating island rocks, pink clouds, and neon vegetation.' },
  { id: 'ani-4', categoryDir: 'ANIMATION AI', categoryName: 'AI ANIMATIONS', file: 'Video-936.mp4', title: 'Cyber Grid Infrastructure', tags: ['Abstract', 'Tech', 'Motion'], desc: 'Technical motion graphic showing digital wireframe grids and bright blue processor waves.' },

  // CINEMATIC AI
  { id: 'cine-1', categoryDir: 'CINEMATIC AI_', categoryName: 'CINEMATIC AI', file: 'Video-307 (1).mp4', title: 'Echoes of Mars Trailer', tags: ['Cinematic', 'Sci-Fi', 'Veo'], desc: 'A sweeping sci-fi epic showing cinematic lighting, deep atmospheric grading, and hyper-realistic alien terrain.' },
  { id: 'cine-2', categoryDir: 'CINEMATIC AI_', categoryName: 'CINEMATIC AI', file: 'Video-685.mp4', title: 'The Last Guardian Story', tags: ['Cinematic', 'Drama', 'ElevenLabs'], desc: 'Epic trailer focusing on massive ancient architectures, glowing ruin shields, and soft atmospheric light fog.' },
  { id: 'cine-3', categoryDir: 'CINEMATIC AI_', categoryName: 'CINEMATIC AI', file: 'Video-943.mp4', title: 'Neon Rain Over Tokyo', tags: ['Cinematic', 'Cyberpunk', 'Luma'], desc: 'Atmospheric neo-noir aesthetics showing advanced rain simulations, neon light bleeding, and cyberpunk moods.' },
  { id: 'cine-4', categoryDir: 'CINEMATIC AI_', categoryName: 'CINEMATIC AI', file: 'openart-02178156919048000000000000000000000ffffc0a8a22a4844ab_1781569393835_f48e7a7c.mp4', title: 'Primal Origins of Light', tags: ['Artistic', 'Epic', 'Veo'], desc: 'Artistic generative project portraying volcanic eruptions merging with high-altitude auroral ribbons.' },
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
