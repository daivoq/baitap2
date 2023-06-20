import express from "express";
import { getLikeOfRes, getRateOfRes } from "../controller/resController.js";
const resRouter = express.Router();

resRouter.get("/like/:res_id", getLikeOfRes);

resRouter.get("/rate/:res_id", getRateOfRes);

export default resRouter;
