import { Router } from "express";
import * as poolsControllers from "../controllers/poolsController";

const poolsRouter = Router();

poolsRouter.get("/count", poolsControllers.countPools);

export default poolsRouter;
