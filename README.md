# Focus Studio & Photography Website

A modern, responsive website for a professional photography studio based in Kallakurichi, Tamil Nadu. This website showcases the studio's services, portfolio, and allows clients to contact them for bookings.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Service showcase with pricing
- Filterable portfolio gallery
- Client testimonials
- Contact form with validation
- SEO optimized

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Shadcn UI components
- React Hook Form for form validation
- React Query for data fetching
- Express.js backend (for local development)

## Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:5000](http://localhost:5000) in your browser

## Deploying to Vercel

This project is configured to be deployed as a static site on Vercel. Follow these steps:

1. Create an account on [Vercel](https://vercel.com) if you don't have one already
2. Connect your GitHub repository to Vercel or use the Vercel CLI:
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

### Important Notes for Deployment

- The project uses a custom build script (`vercel-build.sh`) that properly handles the build process for Vercel
- The contact form is configured to work in static mode when deployed to Vercel (via client-side code)
- The `vercel.json` file contains the configuration for routing and build settings
- If you need server-side functionality:
  - Create Vercel Serverless Functions for your API endpoints
  - Update the API client code in `client/src/lib/queryClient.ts` to use these endpoints
  - Consider using Vercel KV or other database options for data storage

### Troubleshooting Deployment

If you encounter issues with the Vercel deployment:

1. Ensure all files are committed to your repository
2. Check that the `vercel.json` and `vercel-build.sh` files are in the root directory
3. Verify that the build script has execute permissions (`chmod +x vercel-build.sh`)
4. Review the Vercel deployment logs for specific error messages

## Credits

- Design inspired by modern photography studio websites
- Images from Pexels and Unsplash
- Icons from Lucide React

## License

This project is licensed under the MIT License.

---

Created with ❤️ for Focus Studio & Photography