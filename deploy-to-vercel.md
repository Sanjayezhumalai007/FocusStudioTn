# Deploying Focus Studio & Photography to Vercel

Follow these steps to deploy your photography studio website to Vercel:

## Preparation Steps

1. **Download Your Project Files**
   - Download all the files from this Replit project to your local computer
   - Make sure to include all files including `vercel.json`

2. **Create a Vercel Account**
   - If you don't already have one, sign up at [vercel.com](https://vercel.com)
   - It's free to sign up and you can connect with your GitHub account

## Deployment Options

### Option 1: Deploy via Vercel Dashboard (Recommended for Beginners)

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Click on "Upload" in the Import Git Repository section
3. Drag and drop your project folder or select it from your computer
4. Vercel will automatically detect the project as a Vite/React application
5. Click "Deploy" and wait for the build process to complete

### Option 2: Deploy via GitHub (Recommended for Ongoing Updates)

1. Create a GitHub repository and push your project files to it
2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Connect your GitHub account if you haven't already
4. Select the repository containing your Focus Studio website
5. Vercel will automatically detect your project settings
6. Click "Deploy" to start the build process

## Post-Deployment

1. **Check Your Live Website**
   - After successful deployment, Vercel will provide a URL like `focus-studio.vercel.app`
   - Your photography website is now live and accessible to everyone!

2. **Custom Domain Setup** (Optional)
   - In the Vercel dashboard, go to your project settings
   - Click on "Domains" and add your custom domain
   - Follow Vercel's instructions to set up DNS records with your domain registrar

3. **Updates and Maintenance**
   - For future updates, edit your files and redeploy
   - If you connected with GitHub, simply push changes to your repository and Vercel will automatically rebuild

## Need Form Functionality?

The contact form is currently set up for demonstration purposes. To make it fully functional:

1. Create a Vercel serverless function for form handling
2. Or integrate with a form service like Formspree, EmailJS, or GetForm

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Custom Domain Setup Guide](https://vercel.com/docs/concepts/projects/domains)
- [Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions) (for form handling)

Congratulations on deploying your Focus Studio & Photography website!