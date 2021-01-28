import debug from "debug";
import express from "express";
import usersService from "../services/users.service";

const log: debug.IDebugger = debug("server:users-controller");

class UsersController {
  private static instance: UsersController;

  static getInstance(): UsersController {
    if (!UsersController.instance) {
      UsersController.instance = new UsersController();
    }
    return UsersController.instance;
  }

  async listUsers(req: express.Request, res: express.Response) {
    const users = await usersService.list(100, 0);
    res.status(200).send(users);
  }
}

export default UsersController.getInstance();
