import { createLogger, format, transports } from "winston";
import { LOG_LEVEL } from "./config.js";

export const logger = createLogger({
  level: LOG_LEVEL,
  format: format.combine(
    format.colorize(),
    format.printf(({ level, message }) => {
      return `${level}: ${message}`;
    }),
  ),
  transports: [new transports.Console()],
});
