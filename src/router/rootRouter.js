import express from "express";
import likeRouter from "./likeRouter.js";
import userRouter from "./userRouter.js";
import resRouter from "./resRouter.js";
import rateRouter from "./rateRouter.js";
import orderRouter from "./orderRouter.js";

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/user", userRouter);

rootRouter.use("/res", resRouter);
rootRouter.use("/res", resRouter);

rootRouter.use("/rate", rateRouter);

rootRouter.use("/like", likeRouter);

rootRouter.use("/order", orderRouter);

export default rootRouter;
