import express from "express";
import { getLikeOfUser, getRateOfUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/like/:user_id", getLikeOfUser);

userRouter.get("/rate/:user_id", getRateOfUser);

export default userRouter;
