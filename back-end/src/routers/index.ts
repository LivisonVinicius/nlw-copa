import { Router } from "express";
import poolsRouter from "./poolsRouter";

const router = Router();

router.use("/pools", poolsRouter);

export default router;
