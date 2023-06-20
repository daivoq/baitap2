import express from "express";
import { deleteLike, postLike } from "../controller/likeController.js";

const likeRouter = express.Router();

likeRouter.post("/addlike", postLike);

likeRouter.delete("/unlike/:user_id/:res_id", deleteLike);

export default likeRouter;
