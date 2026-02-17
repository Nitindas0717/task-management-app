const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Handle invalid MongoDB ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid Task ID",
    });
  }

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  const statusCode = res.statusCode && res.statusCode !== 200
    ? res.statusCode
    : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
