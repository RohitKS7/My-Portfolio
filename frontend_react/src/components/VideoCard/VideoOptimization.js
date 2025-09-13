// Video optimization utilities
export const getVideoLoadingPreference = () => {
  // Check for user's data saver preference
  if (navigator.connection) {
    const connection = navigator.connection;
    // If user is on slow connection or has data saver enabled
    if (connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' || 
        connection.saveData) {
      return 'image-only';
    }
  }
  
  // Check for reduced motion preference
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'image-only';
  }
  
  return 'video-enabled';
};

export const shouldLoadVideo = (loadingPreference) => {
  return loadingPreference === 'video-enabled';
};

export const getVideoPreloadStrategy = () => {
  const connection = navigator.connection;
  if (connection) {
    switch (connection.effectiveType) {
      case 'slow-2g':
      case '2g':
        return 'none';
      case '3g':
        return 'metadata';
      default:
        return 'metadata';
    }
  }
  return 'metadata';
};
