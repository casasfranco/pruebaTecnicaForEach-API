import { Router } from "express";
import travelController from "../controllers/travel.controller";
const router = Router();

const { getTravels, createTravel } = travelController;

router.route("/").get(getTravels).post(createTravel);

export default router;
