import express from "express";
import * as laguController from "../controller/lagu.js";

const router = express.Router();

router.post("/create", laguController.controlCreateLAgu);
router.get("/", laguController.controlGetLagu);
router.put("/:id", laguController.controlUpdateLagu);
router.delete("/:id", laguController.controlDeleteLagu);

export default router;
