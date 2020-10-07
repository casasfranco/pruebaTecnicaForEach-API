import { Router } from "express";
import conveyanceController from "../controllers/conveyance.controller";
const router = Router();

const { getConveyance, createConveyance } = conveyanceController;

router.route("/").get(getConveyance).post(createConveyance);

export default router;
