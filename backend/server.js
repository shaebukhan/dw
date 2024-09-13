const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const path = require("path");
app.use(cors({
  origin: '*', // Allow all origins. Replace '*' with specific origins if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));
//auth routes
const authRoutes = require("./routes/authRoute");
//review routes 
const reviewRoutes = require("./routes/reviewRoute");

const cors = require("cors");
// Config
dotenv.config();
// Database config
connectDB();
// Middlewares 
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// API routes
app.get("/", (req, res) => {
    res.json("Hello");
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/review", reviewRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});
