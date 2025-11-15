🧠 Chat Interface (React + Node.js + TailwindCSS)

A lightweight, responsive conversational interface built with React, Node.js (Express), and TailwindCSS.
The application provides a clean chat layout, session-based routing, a collapsible sidebar, theme switching, and structured/tabular API responses powered by a mock backend.


---

⭐ Overview

This project implements a simple ChatGPT-style UI with:

A main chat screen

Collapsible left-side sessions panel

Session-based navigation using URL parameters

Light/Dark theme support

Like/Dislike feedback per response

Mock REST APIs for sessions, chat history, and structured answers

Fully responsive layout for mobile and desktop


Both frontend and backend are separated for clarity and easy extensibility.


---

📂 Project Structure

chat-app/
│
├── backend/                   # Node.js + Express mock API server
│   ├── server.js              # Express server and routes
│   ├── mockData.js            # Static JSON data
│   └── package.json
│
└── frontend/                  # React + TailwindCSS SPA
    ├── src/
    │   ├── components/
    │   │   ├── Sidebar.js
    │   │   ├── ChatWindow.js
    │   │   ├── ChatInput.js
    │   │   ├── TableResponse.js
    │   │   ├── ThemeToggle.js
    │   │   └── AnswerFeedback.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── tailwind.config.js
    └── package.json


---

⚙ Backend (Node.js + Express)

The backend serves mock JSON data and does not require a database.

👉 Setup

cd backend
npm install
npm start

Server starts at:

http://localhost:5000


---

📡 API Endpoints

🔹 GET /api/sessions

Returns a list of session IDs or titles for the sidebar.

🔹 GET /api/new-chat

Generates a fresh session ID.

🔹 GET /api/session/:id

Returns the entire conversation history for a session.

🔹 POST /api/chat/:id

Accepts a user question and returns:

A short descriptive response

Structured/table data


Example Response:

{
  "description": "Here is your requested data:",
  "table": [
    { "column1": "value", "column2": 20 },
    { "column1": "value2", "column2": 40 }
  ]
}


---

🎨 Frontend (React + TailwindCSS)

👉 Setup

cd frontend
npm install
npm run dev

Runs at:

http://localhost:5173


---

🖥 Frontend Features

⭐ 1. Landing Page

A simple screen with a “New Chat” option that starts a new session.


---

⭐ 2. Sidebar (Collapsible Panel)

Shows:

All saved sessions

User info (optional)

“New Chat” button


Sidebar can toggle open/close.


---

⭐ 3. Session-based Chat Interface

Each chat URL includes a session ID:

/chat/12345

The session persists:

Every new question stays inside the same session

History loads automatically on refresh



---

⭐ 4. Structured Responses

Chat answers include:

Description text

A clean tabular layout (structured JSON turned into a table)



---

⭐ 5. Answer Feedback

Each response supports:

👍 Like

👎 Dislike



---

⭐ 6. Light/Dark Theme Toggle

Theme switcher on the top bar:

Updates colors, cards, backgrounds

Smooth transitions

Stored in state



---

⭐ 7. Fully Responsive

Layouts adapt smoothly for:

Mobile

Tablet

Laptop

Desktop



---

📦 Deployment

Frontend can be deployed to:

Vercel

Netlify

GitHub Pages


Backend can run on:

Render

Railway

Any Node-compatible hosting



---

🧪 How to Run Both Sides Locally

Backend:

cd backend
npm install
npm start

Frontend:

cd frontend
npm install
npm run dev

Ensure backend is running on 5000 and frontend uses 5173 (or update proxy settings if needed).


---

🧰 Tools & Technologies

Category	Tech

Frontend	React, JavaScript, TailwindCSS
Backend	Node.js, Express.js
Styling	TailwindCSS, Dark Mode
Versioning	Git & GitHub
Routing	React Router
Editor	VS Code



---

📘 Summary

This project demonstrates:

✔ Clean UI architecture
✔ Responsive design
✔ Mock backend integration
✔ Session-based chat
✔ Tabular data presentation
✔ Theme switching
✔ Reusable, modular components

A perfect base for building more advanced conversational interfaces.