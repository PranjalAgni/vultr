import initalizeApp from "./app";
import debug from "debug";
import dotenv from "dotenv";

const startServer = () => {
  dotenv.config();
  const debugLog: debug.IDebugger = debug("server");

  const app = initalizeApp();

  app.listen(3000, () => {
    debugLog(`Server running at http://localhost:${process.env.PORT}`);
  });
};

startServer();
