# How to Add a Custom Moon 3D Model

## Option 1: Download from Sketchfab (Recommended)

1. **Visit Sketchfab**: https://sketchfab.com/3d-models/moon-photorealistic-2k-cc-by-b8b80f96968548a7ae0583ce4dc6e7ae

2. **Download the model**:
   - Click "Download 3D Model" button
   - Select **GLTF** format
   - Download the file

3. **Extract and place**:
   - Extract the downloaded ZIP file
   - Find the `.gltf` or `.glb` file
   - Create folder: `public/models/`
   - Place the file as: `public/models/moon.glb`

## Option 2: NASA Official Moon

1. **Visit**: https://solarsystem.nasa.gov/resources/2366/moon-3d-model/

2. **Download**:
   - Click download button
   - Choose GLTF format if available

3. **Place in project**:
   - Put in `public/models/moon.glb`

## Option 3: Use High-Quality Textures (Current Method)

The current implementation uses procedural shaders which are already very realistic. If you want photo-realistic textures instead:

1. **Download Moon Texture**:
   - Visit: https://www.solarsystemscope.com/textures/
   - Download "Moon" texture (2K or 4K)

2. **Place texture**:
   - Put in `public/textures/moon.jpg`

3. **Code will automatically detect and use it**

## Free Moon Model Resources:

- **Sketchfab**: https://sketchfab.com/search?q=moon&type=models&features=downloadable
- **NASA 3D Resources**: https://science.nasa.gov/3d-resources/
- **Poly Haven**: https://polyhaven.com/
- **Three.js Examples**: https://threejs.org/examples/?q=moon

## File Structure:
```
Portfolio_Game-Des/
└── public/
    └── models/
        └── moon.glb    <- Place your 3D model here
```

## Supported Formats:
- `.glb` (Binary GLTF - Best)
- `.gltf` (GLTF)
- `.fbx`
- `.obj` + `.mtl`

Once you add the file, the code will automatically use it!
