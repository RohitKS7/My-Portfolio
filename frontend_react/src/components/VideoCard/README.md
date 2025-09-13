# VideoCard Component

A highly optimized React component that displays video backgrounds with image fallbacks for better performance and accessibility.

## Features

- **Video Background**: Auto-playing muted videos with click-to-play/pause functionality
- **Image Fallback**: Automatic fallback to static images when videos fail to load or for users with slow connections
- **Performance Optimization**: 
  - Lazy loading with Intersection Observer
  - Connection-aware loading (respects data saver preferences)
  - Reduced motion support
  - Smart preload strategies based on connection speed
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Responsive Design**: Fully responsive with mobile-optimized layouts
- **Overlay Content**: Text content overlaid on video/image with gradient backgrounds for readability

## Usage

```jsx
import VideoCard from './components/VideoCard/VideoCard';

<VideoCard
  videoSrc={videoUrl}
  imageSrc={imageUrl}
  title="Card Title"
  subtitle="Card Subtitle"
  description="Card description text"
  metrics="Metrics Text"
  highlight="Badge Text"
  loading="lazy"
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `videoSrc` | string | No | URL to the video file (MP4 recommended) |
| `imageSrc` | string | Yes | URL to the fallback image |
| `title` | string | Yes | Main title text |
| `subtitle` | string | Yes | Subtitle text |
| `description` | string | Yes | Description text |
| `metrics` | string | Yes | Metrics/CTA text |
| `highlight` | string | Yes | Badge text |
| `loading` | string | No | Image loading strategy ('lazy' or 'eager') |

## Performance Optimizations

### Connection-Aware Loading
- Automatically detects user's connection speed
- Disables video loading on slow connections (2G, slow-2G)
- Respects user's data saver preferences

### Reduced Motion Support
- Automatically disables videos for users who prefer reduced motion
- Falls back to static images seamlessly

### Smart Preloading
- `metadata`: Loads only video metadata (default for 3G+)
- `none`: No preloading (for slow connections)
- `auto`: Full preloading (for fast connections)

### Intersection Observer
- Videos only load when the card comes into view
- Reduces initial page load time
- Saves bandwidth for off-screen content

## Styling

The component uses SCSS with CSS custom properties for easy theming:

```scss
.video-card {
  // Main card container
  .video-container {
    // Video/image container
  }
  .content-overlay {
    // Text overlay with gradient background
  }
  .achievement-badge {
    // Top-right badge styling
  }
}
```

## Browser Support

- Modern browsers with Intersection Observer support
- Graceful degradation for older browsers
- Mobile-optimized for iOS and Android

## Accessibility

- Proper semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast text overlays
- Reduced motion compliance

## File Structure

```
VideoCard/
├── VideoCard.jsx          # Main component
├── VideoCard.scss         # Component styles
├── VideoOptimization.js   # Performance utilities
└── README.md             # This documentation
```
