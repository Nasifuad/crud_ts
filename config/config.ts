import { configDotenv } from "dotenv";

configDotenv();

export const config = {
  port: Number(process.env.PORT),
  mongoUri: process.env.MONGO_URI as string,
  jwtSecret: process.env.JWT_SECRET as string,
};
