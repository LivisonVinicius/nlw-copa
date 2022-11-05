import { client } from "../database";

export async function countPools() {
  const count = await client.pool.count();
  console.log(count);
  return { count };
}
