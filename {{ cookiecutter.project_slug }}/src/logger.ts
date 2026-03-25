import path from "path";
import { createLogger, format, transports } from "winston";
import { LOG_LEVEL } from "./config.js";

const baseLogger = createLogger({
  level: LOG_LEVEL,
  format: format.combine(
    format.colorize(),
    format.printf(({ level, message, filename }) => {
      const filenameSlug = !!filename ? `[${filename}]` : "";
      return `${level}: ${message} ${filenameSlug}`;
    }),
  ),
  transports: [new transports.Console()],
});

export const getLogger = (filename: string) => {
  return baseLogger.child({ filename: path.basename(filename) });
};
