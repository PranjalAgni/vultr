import { CRUD } from "../../common/interfaces/crud.interface";
import usersDao from "../daos/users.dao";
import { UsersDto } from "../dto/users.dto";

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
    const userData: UsersDto = {
      email: "hello.hey@world.com",
      password: "some_password_super_secret"
    };
    return await usersDao.addUser(userData);
  }
}

export default UsersService.getInstance();
