#!/bin/bash

# Debugging information
echo "Current directory: $(pwd)"
echo "Directory contents: $(ls -la)"

# Build the project
echo "Building project with Vite..."
npx vite build client

# Check if build directory exists and list contents
echo "Checking build output..."
if [ -d "client/dist" ]; then
  echo "Build was successful. Contents of client/dist:"
  ls -la client/dist
else
  echo "ERROR: Build directory client/dist does not exist!"
  exit 1
fi

# Create necessary directories
echo "Creating output directory structure..."
mkdir -p dist
mkdir -p dist/api/contact

# Copy build files to the correct location for Vercel
echo "Copying build files to Vercel output directory..."
cp -r client/dist/* dist/

# Create a mock API response for the contact form
echo "Creating static API endpoint for contact form..."
cat > dist/api/contact/index.json << EOL
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": 1,
    "name": "Demo User",
    "email": "user@example.com",
    "phone": "1234567890",
    "service": "portrait",
    "date": "2025-05-20",
    "message": "This is a static API response for Vercel deployment",
    "createdAt": "2025-05-08T12:00:00.000Z"
  }
}
EOL

# Verify final output
echo "Final output directory structure:"
find dist -type f | sort

echo "Build completed successfully!"