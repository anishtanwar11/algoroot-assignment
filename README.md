
# Task Management

This is a Task Management System where user can create, edit, and delete tasks.
The project uses React (frontend) and Node.js + Express with MongoDB (backend).

---

## 🚀 Features   
✅ **Task Management** (Create, Edit, Delete, Completion Status)  
✅ **Secure MongoDB Atlas Database**  
✅ **Responsive UI with Tailwind CSS**  

---

## 🌍 Live Demo  
🔹 **Frontend (Vercel):** [https://algoroot-assignment-anish.vercel.app/](https://algoroot-assignment-anish.vercel.app/)  
🔹 **Backend API (Vercel):** [https://algoroot-assignment-backend-six.vercel.app](https://algoroot-assignment-backend-six.vercel.app)  

---

## 📌 Tech Stack  
**Frontend:** React, Javascript, Vite, Tailwind CSS 
**Backend:** Node.js, Express, MongoDB Atlas

---

# 🛠️ Project Setup Instructions  

## 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/anishtanwar11/algoroot-assignment.git


cd algoroot-assignment
```
## 2️⃣ Backend Setup (Node.js + Express)
```sh
cd backend

npm install
```
## 3️⃣ MongoDB Atlas database Setup

Login into MongoDB Atlas and create new project after that connect the database with backend using MONGO_DB_URI

```
## 4️⃣ Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```sh
Create a .env file inside the backend/ folder:

MONGO_DB_URI=Add you database url
PORT=8000
```

Run Backend Locally
```sh
npm start

✅ Your backend will run at: http://localhost:8000

```

## 🎨 **Frontend Setup (React + Vite)**

```bash
  cd frontend

  npm install

  npm run dev
```

Ensure to add the backend URL into Frontend, frontend/src/utils/api.js
```sh
const API_BASE_URL = "http://localhost:5000/api/v1/task";
```


