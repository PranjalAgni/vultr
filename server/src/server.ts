import debug from "debug";
import "reflect-metadata";
import initalizeApp from "./app";
import config from "./config";

const startServer = async () => {
  const debugLog: debug.IDebugger = debug("server");

  const app = await initalizeApp();

  app.listen(3000, () => {
    debugLog(
      `Server running at http://localhost:${config.port} in ${config.env} mode`
    );
  });
};

startServer();
