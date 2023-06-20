import express from "express";
import { postRate } from "../controller/rateController.js";
const rateRouter = express.Router();

rateRouter.post("", postRate);

export default rateRouter;
