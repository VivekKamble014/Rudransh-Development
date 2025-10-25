# Netlify Deployment Guide

## Problem Fixed
The "Page Not Found" error when refreshing or directly accessing URLs in your React SPA has been fixed.

## Files Added/Modified

### 1. `public/_redirects`
```
/*    /index.html   200
```
This file tells Netlify to serve the `index.html` file for all routes, allowing React Router to handle client-side routing.

### 2. `netlify.toml`
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```
This provides additional configuration for Netlify deployment.

### 3. `vite.config.js` (Updated)
Added proper build configuration for deployment.

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Deploy!

### Option 2: Manual Deployment
1. Run `npm run build` in your project directory
2. Upload the `dist` folder to Netlify
3. The `_redirects` file will be included automatically

## Build Commands
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build locally
npm run preview
```

## What This Fixes
- ✅ Direct URL access (e.g., `/AboutUs`, `/projects`)
- ✅ Page refresh on any route
- ✅ Browser back/forward navigation
- ✅ Bookmarking specific pages
- ✅ Sharing direct links to pages

## Testing
After deployment, test these scenarios:
1. Navigate to `/AboutUs` and refresh the page
2. Navigate to `/projects` and refresh the page
3. Navigate to `/founder` and refresh the page
4. Use browser back/forward buttons
5. Bookmark a specific page and access it directly

All should work without "Page Not Found" errors!
