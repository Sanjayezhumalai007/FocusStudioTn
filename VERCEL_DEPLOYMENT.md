# Deploying to Vercel - Step by Step Guide

This guide explains how to deploy your Focus Studio & Photography website to Vercel as a static site.

## Prerequisites

- A [Vercel](https://vercel.com) account
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Options

### Option 1: Deploy via the Vercel Dashboard (Recommended)

1. Log in to your Vercel account
2. Click "Add New..." and select "Project"
3. Import your Git repository
4. Configure your project:
   - **Framework Preset**: Select "Other"
   - **Build and Output Settings**:
     - Build Command: `chmod +x ./vercel-build.sh && ./vercel-build.sh`
     - Output Directory: `dist`
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your project

## What to Expect

- The deployment will build the project using our custom build script (`vercel-build.sh`)
- The website will be deployed as a static site
- The contact form will work in static mode (client-side only)
- You'll get a unique URL for your deployment (e.g., `focus-studio.vercel.app`)

## Troubleshooting Common Issues

### Issue: "No Output Directory named 'dist' found"

**Solution**: Check that the build script is properly copying files to the `dist` directory. You may need to run the build locally to debug.

### Issue: Contact form doesn't work

**Solution**: This is expected in a static deployment. The form uses client-side code to simulate form submission. If you need real form submissions, you'll need to create a serverless function.

### Issue: Build fails with permission denied

**Solution**: Make sure the build script is executable: 
```bash
git update-index --chmod=+x vercel-build.sh
git commit -m "Make build script executable"
git push
```

## Setting up a Custom Domain

1. In your Vercel dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your custom domain and follow the verification steps

## Need Help?

If you encounter any issues with your Vercel deployment, check the [Vercel documentation](https://vercel.com/docs) or reach out to Vercel support.