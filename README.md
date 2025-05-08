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
2. Install the Vercel CLI: `npm i -g vercel`
3. Login to Vercel: `vercel login`
4. Deploy the project: `vercel`

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments.

### Important Notes for Deployment

- The contact form functionality is adapted to work in static mode when deployed to Vercel
- The `vercel.json` file contains the necessary configuration for proper routing
- For a full backend integration, you would need to create Vercel Serverless Functions or API Routes

## Credits

- Design inspired by modern photography studio websites
- Images from Pexels and Unsplash
- Icons from Lucide React

## License

This project is licensed under the MIT License.

---

Created with ❤️ for Focus Studio & Photography