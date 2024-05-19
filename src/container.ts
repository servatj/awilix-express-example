import { createContainer, asClass, asValue } from "awilix";
import { UserRepository } from "./infra/UserRepository";
import { UserService } from "./services/UserService";
import { UserController } from "./controllers/UserController";
import { logger } from "./logger";
import { CounterController } from "./controllers/CounterController";
import { CounterService } from "./services/CounterService";

const container = createContainer({
	injectionMode: "PROXY",
	strict: true,
});

container.register({
	userController: asClass(UserController),
	userService: asClass(UserService),
	userRepository: asClass(UserRepository),
	counterService: asClass(CounterService),
  counterController: asClass(CounterController),
	logger: asValue(logger), // if you want to user mongo client or similar you can create the client and pass as value similarly 
});

export default container;
