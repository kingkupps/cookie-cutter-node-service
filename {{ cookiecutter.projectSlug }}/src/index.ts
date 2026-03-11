import { logger } from "./logger.js";

async function main() {
  logger.info("Hi there");
}

main().catch((err) => {
  logger.error(err);
  logger.error("Unhandled error");
  process.exit(1);
});
