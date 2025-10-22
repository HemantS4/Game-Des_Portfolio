# How to Add Project Images

This guide explains how to add images for your project detail pages.

## Image Structure

Each project needs images in the following structure:

```
public/images/projects/
├── cyber-odyssey/
│   ├── thumbnail.jpg         (Main project thumbnail)
│   ├── screenshot-1.jpg      (Gameplay screenshots)
│   ├── screenshot-2.jpg
│   ├── screenshot-3.jpg
│   ├── screenshot-4.jpg
│   ├── concept-art-1.jpg     (Optional: Concept art)
│   └── concept-art-2.jpg
│
├── forest-keeper/
│   ├── thumbnail.jpg
│   ├── screenshot-1.jpg
│   ├── screenshot-2.jpg
│   ├── screenshot-3.jpg
│   ├── screenshot-4.jpg
│   └── level-design-1.jpg
│
├── velocity-rush/
│   ├── thumbnail.jpg
│   ├── screenshot-1.jpg
│   ├── screenshot-2.jpg
│   ├── screenshot-3.jpg
│   ├── multiplayer.jpg
│   └── vehicles.jpg
│
└── shadow-tactics/
    ├── thumbnail.jpg
    ├── screenshot-1.jpg
    ├── screenshot-2.jpg
    ├── screenshot-3.jpg
    ├── ai-diagram.jpg
    └── level-layout.jpg
```

## Recommended Image Sizes

### Thumbnails
- **Size**: 1200x600px
- **Format**: JPG or PNG
- **Quality**: High (80-90%)
- Used on the main portfolio page and project hero

### Screenshots
- **Size**: 1920x1080px (16:9 aspect ratio)
- **Format**: JPG
- **Quality**: Medium-High (70-85%)
- Used in the gallery section

### Concept Art / Diagrams
- **Size**: 1200x800px minimum
- **Format**: JPG or PNG (PNG for diagrams with transparency)
- **Quality**: High (80-90%)

## Adding Your Own Images

### Step 1: Prepare Your Images

1. Resize images to recommended dimensions
2. Optimize file sizes (aim for <500KB per image)
3. Use descriptive filenames (e.g., `gameplay-combat-scene.jpg`)

### Step 2: Place Images in Correct Folders

Copy your images to the appropriate project folder:

```bash
# Example for Cyber Odyssey
cp path/to/your/image.jpg public/images/projects/cyber-odyssey/
```

### Step 3: Update Project Data (if needed)

The image paths are already configured in `src/data/projectsData.js`. If you add new images or change filenames, update the paths there:

```javascript
{
  id: 'cyber-odyssey',
  thumbnail: '/images/projects/cyber-odyssey/thumbnail.jpg',
  gallery: [
    '/images/projects/cyber-odyssey/screenshot-1.jpg',
    '/images/projects/cyber-odyssey/screenshot-2.jpg',
    // Add your new images here
  ]
}
```

## Fallback Images

If images are missing, the site automatically shows placeholder images with the project name. This prevents broken images while you're adding content.

## Free Stock Image Resources

If you need placeholder images for your projects:

- **Unsplash**: https://unsplash.com/ (Free high-quality photos)
- **Pexels**: https://pexels.com/ (Free stock photos & videos)
- **Pixabay**: https://pixabay.com/ (Free images and vectors)
- **Game UI Database**: https://gameuidatabase.com/ (Game screenshots)
- **ArtStation**: https://artstation.com/ (Game art and concept art)

## Image Optimization Tools

Before adding images, optimize them for web:

- **TinyPNG**: https://tinypng.com/ (Compress PNG/JPG)
- **Squoosh**: https://squoosh.app/ (Google's image compressor)
- **ImageOptim** (Mac): https://imageoptim.com/
- **GIMP**: https://gimp.org/ (Free image editor)

## Video Embedding

For project trailers, update the `videoUrl` in `projectsData.js` with a YouTube embed URL:

```javascript
{
  videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
}
```

To get the embed URL:
1. Go to your YouTube video
2. Click "Share" → "Embed"
3. Copy the URL from `src="..."`

## Need Help?

If you encounter issues:
1. Check that image paths match exactly (case-sensitive!)
2. Verify images are in the correct `public/images/projects/` folders
3. Clear browser cache and refresh
4. Check browser console for 404 errors
