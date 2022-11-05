import { Request, Response } from "express";
import * as poolServices from "../services/poolServices";

export async function countPools(req: Request, res: Response) {
  const count = await poolServices.countPools();
  return res.status(201).send(count);
}
