import { redis } from "@repo/redis";

async function main() {
  console.log("Starting Engine Service...");
  const client = await redis.connect();
  console.log("Connected to Redis stream");
}

main().catch(console.error);
