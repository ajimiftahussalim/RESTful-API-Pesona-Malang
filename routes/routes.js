import express from "express";

import { getTours, createTour, updateTour } from "../controllers/tourController.js";

const router = express.Router();

router.get('/', getTours);
router.post('/', createTour);
router.patch('/:id', updateTour);

export default router;
