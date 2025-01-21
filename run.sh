#!/bin/bash

# Navigate to the server directory, install dependencies, and start the server
cd server || exit
if [ ! -d "node_modules" ]; then
  echo "Installing server dependencies..."
  npm install
fi

echo "Starting the server..."
npm run dev &

# Navigate to the client directory, install dependencies, and start the client
cd ../client || exit
if [ ! -d "node_modules" ]; then
  echo "Installing client dependencies..."
  npm install
fi

echo "Starting the client..."
npm run dev &

# Wait for background processes to finish
wait
