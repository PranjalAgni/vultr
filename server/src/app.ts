import express from "express";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import helmet from "helmet";
import { UsersRoutes } from "./users/users.config.routes";
import { CommonRoutesConfig } from "./common/common.routes.config";
import debug from "debug";
import { createConnection } from "typeorm";

const initalizeApp = async (): Promise<express.Application> => {
  const app: express.Application = express();
  const routes: Array<CommonRoutesConfig> = [];
  const debugLog: debug.IDebugger = debug("server:app");

  await createConnection();
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(
    expressWinston.logger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      )
    })
  );

  app.use(
    expressWinston.errorLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      )
    })
  );

  routes.push(new UsersRoutes(app));

  app.get("/", (req: express.Request, res: express.Response) => {
    res
      .status(200)
      .send(`Server running at http://localhost:${process.env.PORT}`);
  });

  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });

  return app;
};

export default initalizeApp;
