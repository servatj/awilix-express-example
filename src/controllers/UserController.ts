import { UserService } from '../services/UserService';
import { Ilogger } from '../types';

export class UserController {
  logger: Ilogger;
  userService: UserService;
  constructor({ userService, logger }: { userService: UserService, logger: Ilogger}) {
    this.userService = userService;
    this.logger = logger;
  }

  getUsers(req: any, res: any) {
    this.logger.info('get users');
    res.send(this.userService.getUsers());
  }
  
  addUser(req: any, res: any) {
    console.log('add user');
    const body = req.body;
    console.log('body', body);  
    this.userService.addUser(req.body);
    res.send('User added');
  }
}
