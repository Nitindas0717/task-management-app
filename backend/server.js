require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// Health Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running!",
  });
});

// Error Middleware (must be last)
app.use(errorHandler);

// Define Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
