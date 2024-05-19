import { UserRepository } from "../infra/UserRepository";
import { User } from "../types";

export class UserService {
  userRepository: UserRepository;

  constructor({ userRepository }: { userRepository: any }) {
    this.userRepository = userRepository
  }

  addUser(user: User) {
    this.userRepository.addUser(user);
  }

  getUsers() {
    return this.userRepository.getUsers();
  }
}
