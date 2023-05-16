import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import authRoute from "./routes/authRoute.js";
import hotelsRoute from "./routes/hotelsRoute.js";
import roomsRoute from "./routes/roomsRoute.js";
import usersRoute from "./routes/usersRoute.js";

const app = express();
dotenv.config();

// Connection To MongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to MongoDB");
    } catch (err) {
        throw err;
    }
};

// Incase of the Disconnection
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected!");
});

// Middlewares
// CORS
app.use(cors());

// To Use JSON In Express Application
app.use(express.json());

// To Send JWT In Cookie
app.use(cookieParser());

// For Defining Routes
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

// For Handling Errors
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    });
});

// Server
app.listen(8000, () => {
    connect();
    console.log("server started");
});
