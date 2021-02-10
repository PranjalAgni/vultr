import dotenv from "dotenv";

dotenv.config();

export default {
  isDev: process.env.NODE_ENV === "development",
  env: process.env.NODE_ENV,
  port: process.env.PORT
};
