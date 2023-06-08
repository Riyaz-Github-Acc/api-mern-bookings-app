import express from "express";
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getAllHotel,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotelController.js";

const router = express.Router();

// CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getAllHotel);

// Count
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
