import "reflect-metadata";
import initalizeApp from "./app";
import debug from "debug";
import dotenv from "dotenv";

const startServer = async () => {
  dotenv.config();
  const debugLog: debug.IDebugger = debug("server");

  const app = await initalizeApp();

  app.listen(3000, () => {
    debugLog(`Server running at http://localhost:${process.env.PORT}`);
  });
};

startServer();
