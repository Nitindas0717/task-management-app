# Task Management Application (MERN Stack)

A full-stack Task Management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

This project is currently under active development and is being structured using production-ready backend and frontend architecture principles.

---

## 🚀 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- RESTful API Design
- MVC Architecture

### Frontend
- React.js
- Axios
- React Router
- Modular Component Structure

---

## 📂 Project Structure

```

task-management-app/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── styles/
└── public/

````

---

## 🔐 Current Features

- Modular backend folder structure
- MongoDB connection setup
- Environment variable configuration
- REST API routing structure
- Frontend structured for scalability

---

## 🛠️ Planned Features

- User registration & login
- JWT-based authentication
- Protected routes
- Task CRUD operations
- Deployment to cloud
- Docker support
- CI/CD pipeline integration

---

## ⚙️ Local Setup

### Backend

```bash
cd backend
npm install
npm run dev
````

Create a `.env` file inside `backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 Status

🚧 Work in Progress — Backend and frontend architecture setup phase.

---

## 📜 License

This project is licensed under the MIT License.