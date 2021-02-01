import debug from "debug";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

const log: debug.IDebugger = debug("server:users-dao");

class UsersDao {
  private static instance: UsersDao;

  constructor() {
    log("Created new instance of UsersDao");
  }

  static getInstance(): UsersDao {
    if (!UsersDao.instance) {
      UsersDao.instance = new UsersDao();
    }
    return UsersDao.instance;
  }

  async addUser() {
    const userRepository = getRepository(User);
    const user = userRepository.insert({
      email: "ss@g.com",
      password: "heyrher"
    });

    return user;
  }
}

export default UsersDao.getInstance();
