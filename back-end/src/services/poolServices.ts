import * as poolRepositories from "../repositories/poolRepositories";

export async function countPools() {
  const count = await poolRepositories.countPools();
  return count;
}
