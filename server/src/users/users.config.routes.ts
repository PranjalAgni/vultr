import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import UsersController from "./controllers/users.controller";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRoutes(): express.Application {
    this.app.route(`/users`).get(UsersController.listUsers);
    return this.app;
  }
}
