import express from "express";

import { getTours } from "../controllers/tourController.js";

const router = express.Router();

router.get('/', getTours);

export default router;