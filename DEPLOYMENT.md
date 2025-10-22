# 🚀 Quick Deployment Guide

## Step-by-Step GitHub Pages Deployment

### 1️⃣ Prepare Your Repository

**Update Repository Name** (if different):
- Open `vite.config.js`
- Change the `base` value to match your repo name:
```javascript
base: '/YOUR-REPO-NAME/',
```

### 2️⃣ Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/Portfolio_Game-Des.git

# Push to GitHub
git push -u origin master
```

### 3️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Click **Save**

### 4️⃣ Wait for Deployment

- Go to the **Actions** tab in your repository
- Watch the "Deploy to GitHub Pages" workflow run
- Once complete (green checkmark ✅), your site is live!

### 5️⃣ Visit Your Site

Your portfolio will be available at:
```
https://YOUR-USERNAME.github.io/Portfolio_Game-Des/
```

---

## 🔧 Configuration Checklist

Before deploying, ensure:

- [ ] `vite.config.js` has correct `base` path
- [ ] `.github/workflows/deploy.yml` exists
- [ ] `public/.nojekyll` file exists
- [ ] All your personal info is updated in components
- [ ] Project links work correctly
- [ ] Repository is public (required for free GitHub Pages)

---

## 🐛 Common Issues

### Issue: Blank white page after deployment
**Solution**:
- Verify the `base` path in `vite.config.js` matches your repository name exactly
- Check browser console for 404 errors
- Ensure repository name doesn't have spaces or special characters

### Issue: Workflow fails
**Solution**:
- Check the Actions tab for error messages
- Ensure `package-lock.json` is committed
- Verify all dependencies are in `package.json`

### Issue: Site doesn't update
**Solution**:
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub's CDN to update
- Check if workflow completed successfully in Actions tab

### Issue: 3D elements not loading
**Solution**:
- Check that `base` path is correct
- Verify Three.js dependencies are installed
- Check browser console for errors

---

## 🔄 Updating Your Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push origin master
```

The GitHub Actions workflow will automatically rebuild and redeploy your site!

---

## 📊 Repository Settings

### Required Settings:
- **Visibility**: Public (for free GitHub Pages)
- **GitHub Pages Source**: GitHub Actions
- **Branch**: master (or main)

### Optional Settings:
- **Custom Domain**: Can be added in Pages settings
- **Enforce HTTPS**: Recommended (usually enabled by default)

---

## 🎯 Next Steps After Deployment

1. **Customize Content**:
   - Update projects in `src/components/Projects.jsx`
   - Add your info in `src/components/About.jsx`
   - Change Hero text in `src/components/Hero.jsx`

2. **Test Thoroughly**:
   - Test all interactive elements
   - Verify links work
   - Check on mobile devices
   - Test in different browsers

3. **Share Your Portfolio**:
   - Add to LinkedIn
   - Share on social media
   - Include in resume/CV
   - Add to ArtStation/game dev communities

4. **Monitor Performance**:
   - Use Chrome DevTools Lighthouse
   - Check loading times
   - Optimize images if needed
   - Consider reducing particles on mobile

---

## 📱 Testing Locally Before Deployment

```bash
# Build production version
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4173` to test the production build locally.

---

## 🆘 Need Help?

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Vite Docs**: https://vitejs.dev/guide/static-deploy.html
- **Issues**: Open an issue in your repository

---

**Made with ❤️ - Happy Deploying! 🚀**
