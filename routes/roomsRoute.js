import express from "express";
import {
  createRoom,
  deleteRoom,
  updateRoom,
  updateRoomAvailability,
  getRoom,
  getAllRoom,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:hotelid", createRoom);

// UPDATE
router.put("/:id", updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// DELETE
router.delete("/:id/:hotelid", deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getAllRoom);

export default router;
