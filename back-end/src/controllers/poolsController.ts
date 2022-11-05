import { Request, Response } from "express";

export async function countPools(req: Request, res: Response) {
  return { count: 12 };
}
