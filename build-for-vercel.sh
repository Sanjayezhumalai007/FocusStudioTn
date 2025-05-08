#!/bin/bash

# Build script for Vercel static site deployment

# Build the frontend only
echo "Building frontend for static deployment..."
npm run build

# Create a simple static API response for contact form
mkdir -p dist/public/api/contact

# Create a JSON response for the contact form API
cat > dist/public/api/contact/index.json << EOL
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": 1,
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "service": "portrait",
    "date": "2025-05-20",
    "message": "This is a static response for Vercel deployment",
    "createdAt": "2025-05-08T12:00:00.000Z"
  }
}
EOL

echo "Static build complete! Ready for Vercel deployment."