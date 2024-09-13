const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const app = express();

// Load environment variables
dotenv.config();

// Database connection
connectDB();

// CORS Middleware (with proper config)
app.use(cors({
    origin: 'https://dwfrontend-eight.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Enable sending cookies
}));

// Middleware to parse URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// HTTP request logger (Morgan)
app.use(morgan("dev"));

// Serving static files for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Auth routes
const authRoutes = require("./routes/authRoute");
app.use("/api/v1/auth", authRoutes);

// Review routes
const reviewRoutes = require("./routes/reviewRoute");
app.use("/api/v1/review", reviewRoutes);

// Start server on specified port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});
