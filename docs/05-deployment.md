# Deployment Guide

## Overview

This guide covers deploying the Softgrid Sensing website to GitHub Pages with a custom domain.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   Local Dev          GitHub            GitHub Pages             │
│   ┌─────────┐       ┌─────────┐       ┌─────────────┐          │
│   │ Next.js │ push  │  Repo   │ build │  Static     │          │
│   │  Dev    │ ────> │         │ ────> │  Files      │          │
│   └─────────┘       └─────────┘       └─────────────┘          │
│                          │                   │                  │
│                          │                   │                  │
│                    GitHub Actions      softgridsensing.com      │
│                    (Auto Build)        (Custom Domain)          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Prerequisites

- GitHub account with access to create repositories
- Access to Siteground DNS settings for softgridsensing.com
- Node.js 18+ installed locally

---

## Step 1: Project Setup

### 1.1 Create Next.js Project

```bash
npx create-next-app@latest softgrid-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 1.2 Configure for Static Export

Edit `next.config.mjs` (ESM format required for Next.js 14.2.x):

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 1.3 Add Output Directory to .gitignore

The `out` directory is already typically in `.gitignore`, but verify.

---

## Step 2: GitHub Repository Setup

### 2.1 Create Repository

1. Go to GitHub and create new repository: `softgrid-website`
2. Can be public or private (GitHub Pages works with both on paid plans)

### 2.2 Push Code

```bash
cd softgrid-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/softgrid-website.git
git push -u origin main
```

---

## Step 3: GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Step 4: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Under "Build and deployment":
   - Source: `GitHub Actions`
3. The workflow will automatically deploy on push to main

---

## Step 5: Custom Domain Configuration

### 5.1 Add CNAME File

Create `public/CNAME` with content:

```
softgridsensing.com
```

This file will be included in the build output.

### 5.2 Configure Siteground DNS

Log into Siteground and update DNS records:

**For apex domain (softgridsensing.com)**:

| Type | Name | Value           |
| ---- | ---- | --------------- |
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

**For www subdomain**:

| Type  | Name | Value                   |
| ----- | ---- | ----------------------- |
| CNAME | www  | YOUR_USERNAME.github.io |

Replace `YOUR_USERNAME` with the actual GitHub username or organization name.

### 5.3 Configure Custom Domain in GitHub

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `softgridsensing.com`
3. Click Save
4. Wait for DNS check to complete (can take up to 24 hours)
5. Once verified, check "Enforce HTTPS"

---

## Step 6: Verify Deployment

### 6.1 Check GitHub Actions

1. Go to repository → Actions tab
2. Verify the workflow completed successfully

### 6.2 Check Website

1. Visit https://softgridsensing.com
2. Verify all pages load correctly
3. Check HTTPS is working (padlock icon)

### 6.3 Test on Mobile

- Test responsive design on mobile devices
- Verify touch interactions work

---

## Local Development

### Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### Build Locally

```bash
npm run build
```

This creates the `out` directory with static files.

### Preview Build

```bash
npx serve out
```

---

## Troubleshooting

### DNS Not Propagating

- DNS changes can take up to 48 hours
- Use https://dnschecker.org to verify propagation
- Clear browser cache

### HTTPS Certificate Issues

- GitHub automatically provisions Let's Encrypt certificate
- Can take up to 24 hours after DNS is configured
- Make sure "Enforce HTTPS" is enabled

### 404 Errors on Direct Page Access

For client-side routing, add `404.html` that redirects to index:

Create `public/404.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Redirecting...</title>
    <script>
      // Redirect to home page (simple approach)
      // For better SPA support, implement proper redirect logic
      window.location.href = "/";
    </script>
  </head>
  <body>
    Redirecting...
  </body>
</html>
```

**Note**: Since we're using static export with Next.js App Router, each page is pre-rendered, so direct access should work. The 404.html is mainly for undefined routes.

### Images Not Loading

- Ensure images are in `public/images/`
- Use absolute paths: `/images/filename.jpg`
- For Next.js Image component with static export, `unoptimized: true` is required

---

## Updating the Website

### Normal Updates

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to main
4. GitHub Actions automatically rebuilds and deploys

```bash
git add .
git commit -m "Update content"
git push
```

### Emergency Rollback

1. Go to repository → Actions
2. Find the last successful deployment
3. Re-run that workflow

Or revert the commit:

```bash
git revert HEAD
git push
```

---

## Image Hosting (Large Files)

For large images or videos, use AWS S3 instead of Git:

### S3 Setup

1. Create S3 bucket: `softgrid-website-assets`
2. Enable public access for the bucket
3. Upload files to the bucket
4. Reference in code: `https://softgrid-website-assets.s3.ap-southeast-1.amazonaws.com/filename.jpg`

### CloudFront (Optional, for better performance)

1. Create CloudFront distribution
2. Point to S3 bucket
3. Use CloudFront URL for assets

---

## Monitoring

### Uptime Monitoring

Consider setting up:

- GitHub Status for deployment status
- UptimeRobot or similar for website uptime

### Analytics

Add Google Analytics or similar:

1. Create GA4 property
2. Add tracking code to `app/layout.tsx`

```tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## Checklist Before Launch

- [ ] All pages render correctly
- [ ] Responsive design works on mobile
- [ ] Contact form submits successfully
- [ ] All links work (internal and external)
- [ ] Images load properly
- [ ] Meta tags and SEO content in place
- [ ] Favicon and social sharing images added
- [ ] HTTPS enforced
- [ ] 404 page configured
- [ ] Analytics set up (if needed)
