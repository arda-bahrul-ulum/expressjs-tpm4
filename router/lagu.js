import express from "express";
import * as laguController from "../controller/lagu.js";
import { tokenValidation } from "../controller/auth.js";

const router = express.Router();

router.post("/create", tokenValidation, laguController.controlCreateLAgu);
router.get("/", tokenValidation, laguController.controlGetLagu);
router.put("/:id", tokenValidation, laguController.controlUpdateLagu);
router.delete("/:id", tokenValidation, laguController.controlDeleteLagu);

router.post("/createuser", laguController.controlCreateUser);

export default router;
