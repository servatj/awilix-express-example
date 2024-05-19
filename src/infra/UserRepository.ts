import { User } from '../types';


export class UserRepository {
  private users: User[];

  constructor(opts: any) {
    console.log('UserRepository constructor', opts.counterController);
    // we don't need to do anything with opts.counterController but is just to 
    // show that we can access through the constructor because awilix is passing it
    // in proxy mode. If we try to access it in the constructor of the UserService
    // we will get an error because it will be a cyclic dependency.
    this.users = [] as User[] ;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
