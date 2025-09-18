Expense Tracker:
A full-stack Expense Tracker app built with React (frontend) and Express/MongoDB (backend). Track your daily expenses, view summaries, and manage your spending with a clean UI.
Folder Structure
Expense Tracker/
├── .gitignore
├── package-lock.json
├── README.md
│
├── backend/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   ├── package-lock.json
│   └── package.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.css
│   │   │   ├── App.js
│   │   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js

Backend Setup
Install dependencies:

cd backend
npm install
Configure environment variables:

Create a .env file in backend/ with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Start the backend server:

npm run dev
The backend runs on http://localhost:5000.

Frontend Setup
Install dependencies:

cd frontend
npm install
Configure API URL (optional):

Create a .env file in frontend/ with:
VITE_API_URL=http://localhost:5000
Start the frontend dev server:

npm run dev
The frontend runs on http://localhost:3000.
echnologies Used
Frontend: React, React Router, Bootstrap, Chart.js
Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

