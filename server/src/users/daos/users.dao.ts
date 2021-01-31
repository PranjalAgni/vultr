import debug from "debug";
import { User } from "../../entity/User";
import { getManager } from "typeorm";

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
    const entityManager = getManager();
    const user = await entityManager.insert(User, {
      email: "ss@g.com",
      password: "heyrher"
    });

    return user;
  }
}

export default UsersDao.getInstance();
