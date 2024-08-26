import { Router } from "express";
import * as alumniController from "../controllers/alumni.controller.js";

const router = Router();

router.route("/register").post(alumniController.alumniRegister);
router.route("/login").post(alumniController.alumniLogin);
router.route("/", alumniController.getAlumni);
router.route("/:id").get(alumniController.alumniProfile);
router.route("/:id").put(alumniController.alumniUpdateProfile);
router.route("/:id").delete(alumniController.alumniDeleteProfile);

export default router;