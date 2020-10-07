import { Router } from "express";
import personController from "../controllers/person.controller";
const router = Router();

const { getPerson, createPerson } = personController;

router.route("/").get(getPerson).post(createPerson);

export default router;
