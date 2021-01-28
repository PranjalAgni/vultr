import { CRUD } from "../../common/interfaces/crud.interface";

class UsersService {
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
}

export default UsersService.getInstance();
