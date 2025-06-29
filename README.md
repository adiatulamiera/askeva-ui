## 📄 `frontend/README.md` (AskEva UI - Vite)

```markdown
# AskEva Chatbot Frontend (UI)

This is the frontend for AskEva — a chatbot system for image consulting services. Built using Vite + React + Tailwind CSS, it interacts with the Rasa backend API.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install

======Run Development Server
npm run dev
Default URL: http://localhost:5173

======⚙️ Configuration
Make sure the frontend can access your Rasa backend at http://localhost:5005 or the appropriate URL if deployed. You can modify the API endpoint in src/api.js or similar.

======📁 Structure
pages/ — Main pages like Chat, FAQ, Session End
components/ — Custom reusable components
App.jsx — Router and layout setup
tailwind.config.js — Tailwind styling

======✅ Notes
Make sure your backend is running before opening the chat.

Works best with Rasa’s --enable-api flag.
