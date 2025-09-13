import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './VideoCard.scss';
import { getVideoLoadingPreference, shouldLoadVideo, getVideoPreloadStrategy } from './VideoOptimization';

const VideoCard = ({ 
  videoSrc, 
  imageSrc, 
  title, 
  subtitle, 
  description, 
  metrics, 
  highlight,
  loading = "lazy"
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // Start with auto-play
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [loadingPreference, setLoadingPreference] = useState('video-enabled');

  // Initialize loading preference
  useEffect(() => {
    setLoadingPreference(getVideoLoadingPreference());
  }, []);

  // Intersection Observer to load video only when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
    // Auto-play video when loaded
    if (videoRef.current && shouldLoadVideo(loadingPreference)) {
      videoRef.current.play().catch(console.error);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    // Keep video playing in loop, don't change playing state
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <motion.div
      ref={videoRef}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="video-card"
    >
      {/* Video Background Container */}
      <div className="video-container">
        {/* Fallback Image */}
        <img 
          src={imageSrc} 
          alt={title}
          className={`fallback-image ${videoLoaded && !videoError ? 'hidden' : ''}`}
          loading={loading}
        />
        
        {/* Video Element */}
        {isInView && videoSrc && !videoError && shouldLoadVideo(loadingPreference) && (
          <video
            ref={videoRef}
            className={`background-video ${videoLoaded ? 'loaded' : ''}`}
            muted
            loop
            playsInline
            preload={getVideoPreloadStrategy()}
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onEnded={handleVideoEnd}
            onClick={handleVideoClick}
            poster={imageSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Video Overlay Controls */}
        {videoLoaded && !videoError && (
          <div className="video-overlay" onClick={handleVideoClick}>
            <div className={`play-pause-icon ${isVideoPlaying ? 'playing' : ''}`}>
              {isVideoPlaying ? '⏸️' : '▶️'}
            </div>
          </div>
        )}

        {/* Achievement Badge - Positioned at top */}
        <div className="achievement-badge">
          {highlight}
        </div>

        <div className="content-top">
              <h2 className="bold-text">
                {title}
              </h2>
              
              <h3 className="subtitle-text">
                {subtitle}
              </h3>
            </div>
        {/* Content Overlay */}
        <div className="content-overlay">
          {/* Main Content */}
          <div className="card-content">
            
            
            <div className="content-bottom">
              <p className="p-text">
                {description}
              </p>
              
              {/* Metrics Display */}
              <div className="metrics-display">
                <span className="metrics-text">{metrics}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
