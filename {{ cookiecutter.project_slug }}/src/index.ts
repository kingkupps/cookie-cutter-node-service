import { getLogger } from "./logger.js";

const logger = getLogger(import.meta.url);

async function main() {
  logger.info("Hi there");
}

main().catch((err) => {
  logger.error(err);
  logger.error("Unhandled error");
  process.exit(1);
});
