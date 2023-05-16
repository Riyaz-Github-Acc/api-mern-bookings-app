import express from "express";
import {
    createHotel,
    deleteHotel,
    updateHotel,
    getHotel,
    getAllHotel,
    countByCity,
    countByType,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getAllHotel);

// Count
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
