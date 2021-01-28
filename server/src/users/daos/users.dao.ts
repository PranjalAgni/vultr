import debug from "debug";

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
}

export default UsersDao.getInstance();
