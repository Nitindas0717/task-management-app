require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Task Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
