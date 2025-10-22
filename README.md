# 🎮 3D Game Designer Portfolio

A stunning Three.js portfolio website featuring an immersive 3D space environment with floating project cards, particle effects, and smooth mouse interactions.

## ✨ Features

- **3D Space Environment** - Deep space theme with 5000+ animated particles
- **Floating Project Cards** - Cards float in 3D space like particles
- **Interactive Mouse Controls** - Camera and particles respond to mouse movement
- **Hover to Focus** - Project cards smoothly move to center when hovered
- **Scroll Animations** - Smooth transitions between Hero, Projects, and About sections
- **Responsive Design** - Works beautifully on all screen sizes
- **Modern Tech Stack** - Built with React, Three.js, and Vite

## 🚀 Live Demo

Visit the live site: `https://YOUR-USERNAME.github.io/Portfolio_Game-Des/`

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Vite** - Fast build tool and dev server
- **CSS3** - Advanced animations and styling

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/Portfolio_Game-Des.git
cd Portfolio_Game-Des
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 🏗️ Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin master
```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", select **Source: GitHub Actions**

3. **That's it!** The workflow will automatically build and deploy your site whenever you push to the master branch.

Your site will be available at: `https://YOUR-USERNAME.github.io/Portfolio_Game-Des/`

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. Install gh-pages (if not already installed):
```bash
npm install -D gh-pages
```

3. Add to package.json scripts:
```json
"deploy": "gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

## 📝 Configuration

### Repository Name

If your repository name is different from `Portfolio_Game-Des`, update the `base` path in `vite.config.js`:

```javascript
base: '/YOUR-REPOSITORY-NAME/',
```

### Branch Name

If your default branch is `main` instead of `master`, update `.github/workflows/deploy.yml`:

```yaml
on:
  push:
    branches:
      - main  # Change from master to main
```

## 🎨 Customization

### Update Project Information

Edit `src/components/Projects.jsx` to add your projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    category: 'Game Genre',
    year: '2024',
    description: 'Project description',
    tools: ['Unity', 'C#'],
    link: 'https://your-project-link.com'
  },
  // Add more projects...
]
```

### Update Personal Information

- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Footer**: Edit `src/components/Footer.jsx`

### Change Colors

Update CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #ff7849;
  --color-secondary: #ffa05f;
  /* Customize other colors */
}
```

## 📁 Project Structure

```
Portfolio_Game-Des/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── .nojekyll              # Prevents GitHub Pages Jekyll processing
├── src/
│   ├── components/
│   │   ├── Scene3D.jsx        # 3D space scene with particles
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Projects.jsx       # Floating project cards
│   │   ├── About.jsx          # About section
│   │   ├── Sidebar.jsx        # Navigation sidebar
│   │   └── Footer.jsx         # Footer component
│   ├── App.jsx                # Main app component
│   ├── App.css                # Component styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts

```

## 🎮 User Interactions

- **Mouse Movement** - Camera and particles follow your cursor with smooth parallax
- **Scroll** - Navigate through Hero, Projects, and About sections
- **Hover over Projects** - Cards smoothly move to center and enlarge
- **Click on Projects** - Opens project links in new tab
- **Continuous Animation** - Particles and cards float continuously

## 🐛 Troubleshooting

### Blank page after deployment
- Check that the `base` path in `vite.config.js` matches your repository name
- Ensure GitHub Pages is enabled in repository settings
- Check the Actions tab for deployment errors

### Assets not loading
- Verify all assets are in the `public` folder or imported in components
- Check browser console for 404 errors
- Ensure `base` path is correctly configured

### Performance issues
- The 5000+ particles may be intensive on older devices
- Consider reducing particle count in `src/components/Scene3D.jsx`
- Adjust particle count in the `count` variable

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/YOUR-USERNAME/Portfolio_Game-Des/issues).

## 👤 Author

**Your Name**
- Portfolio: [Your Portfolio Link]
- GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ and Three.js
