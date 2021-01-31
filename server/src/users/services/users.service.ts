import { User } from "../../entity/User";
import { CRUD } from "../../common/interfaces/crud.interface";
import usersDao from "../daos/users.dao";

class UsersService implements CRUD {
  updateById: (resourceId: unknown) => Promise<unknown>;
  readById: (resourceId: unknown) => Promise<unknown>;
  deleteById: (resourceId: unknown) => Promise<string>;
  patchById: (resourceId: unknown) => Promise<string>;
  private static instance: UsersService;

  static getInstance(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService();
    }
    return UsersService.instance;
  }

  async list(limit: number, page: number) {
    return await {
      limit,
      page
    };
  }

  async create() {
    return await usersDao.addUser();
  }
}

export default UsersService.getInstance();
