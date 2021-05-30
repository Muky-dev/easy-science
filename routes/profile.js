import express from "express";
import * as controllerProfile from "../controller/profile.js";
import secured from "../helpers/secured.js";
const router = express.Router();

router.get("/", secured, controllerProfile.getProfile);

export default router;
