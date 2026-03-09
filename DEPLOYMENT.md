# Westrose Interiors - Deployment Guide

## GitHub Setup

### Option 1: Using GitHub CLI (Recommended)

```bash
# Install GitHub CLI if not already installed
# Then authenticate
gh auth login

# Create a new repository
gh repo create westrose-interiors --public --source=. --remote=origin --push
```

### Option 2: Using HTTPS with Personal Access Token

```bash
# Create a Personal Access Token on GitHub (Settings → Developer settings → Personal access tokens)
# Replace YOUR_TOKEN with your token
git remote add origin https://YOUR_TOKEN@github.com/westjames1982-ctrl/westrose-interiors.git
git branch -M main
git push -u origin main
```

### Option 3: Using SSH Key

```bash
# Generate SSH key if you don't have one
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub (Settings → SSH and GPG keys)
# Then push
git remote add origin git@github.com:westjames1982-ctrl/westrose-interiors.git
git branch -M main
git push -u origin main
```

## Vercel Deployment

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your westjames1982-ctrl account
3. Click "New Project"
4. Connect your GitHub account if prompted
5. Select the `westrose-interiors` repository

### Step 2: Configure Project Settings

In Vercel dashboard:
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `.` (or leave default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Environment Variables**: None required for this project

### Step 3: Deploy

1. Click "Deploy"
2. Vercel will build and deploy automatically
3. Wait for the deployment to complete (usually 2-3 minutes)
4. Your live URL will be displayed (typically `https://westrose-interiors-[hash].vercel.app`)

### Custom Domain (Optional)

After deployment:
1. Go to project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `www.westroseinteriors.ca`)
4. Follow DNS configuration instructions

## Local Testing Before Deployment

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Test production build locally
npm start
```

## Post-Deployment Checklist

- [ ] Website loads successfully
- [ ] All 23 portfolio images display correctly
- [ ] Hero section renders properly
- [ ] Navigation links work
- [ ] Contact form functions
- [ ] Mobile responsiveness works on various devices
- [ ] Logo appears in header and footer
- [ ] Footer company information is correct
- [ ] All buttons and CTAs work

## Troubleshooting

### Images not loading
- Ensure all images are in `/public/images/`
- Check that Next.js Image optimization is working
- Verify file names match in Portfolio.tsx

### Build errors
- Clear cache: `rm -rf .next node_modules && npm install`
- Check Node version: `node --version` (should be 18+)
- Run `npm run build` locally first to catch errors

### Deployment fails on Vercel
- Check build logs in Vercel dashboard
- Verify all environment variables are set if needed
- Ensure GitHub connection is active

## Updates & Maintenance

### To update the website:

1. Make changes locally
2. Test with `npm run dev`
3. Commit: `git add . && git commit -m "Your message"`
4. Push: `git push origin main`
5. Vercel automatically redeploys on every push to main

### Adding new project images:

1. Add images to `/public/images/`
2. Update the images array in `src/components/Portfolio.tsx`
3. Commit and push
4. Vercel will redeploy automatically

## Contact

For issues or questions about the website, refer to README.md
