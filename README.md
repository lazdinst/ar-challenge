## Todo Application

A full-stack Todo application built with TypeScript, React, Redux Toolkit, and Express.js. This application allows users to create, manage, and categorize todos with features such as drag-and-drop functionality, category management, and sorting/filtering options.

## Features

- Create Todos: Add todos with a title, description, due date, and category.

- Manage Categories: Create, edit, and delete categories for better organization.

- Drag-and-Drop Functionality: Move todos between categories seamlessly.

- Filtering and Sorting: Filter todos by status (completed, active) and sort them by due date or creation date.

- Backend: Node.js and Express.js to handle API requests and manage the state of todos and categories.

- State Management: Redux Toolkit for efficient state handling on the frontend.

## Setup Instructions

1. Clone the Repository

   ```bash
   git clone https://github.com/lazdinst/ar-challenge.git
   ```

2. Install dependencies

   ```bash
   # Install backend dependencies

   cd server
   npm install

   # Install frontend dependencies

   cd ../client
   npm install
   ```

3. Start Application

   ##### Backend

   Start the Express server:

   ```bash
   cd server
   npm start
   ```

   The backend server will run on http://localhost:5000.

   ##### Frontend

   Start the React client:

   ```bash
   cd ../client
   npm start
   ```

   The frontend will be accessible at http://localhost:5173.

#### Optional Start

The `run.sh` script simplifies the setup and execution of the Todo application. It performs the following steps:

1. Installs dependencies for both the backend (`server`) and frontend (`client`).
2. Starts the backend server.
3. Starts the frontend client.

Make the script executable (only required once):

```bash
chmod +x run.sh
./run.sh

```

The backend will run on http://localhost:5000, and the frontend will be accessible at http://localhost:5173.
