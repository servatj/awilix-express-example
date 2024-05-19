import express from 'express';
import { createServer } from 'http';
import container from './src/container';
import {router} from './src/routes/counterRoutes';


const userController = container.cradle.userController;

const app = express();
const server = createServer(app);

app.use(express.json());
app.use('/api/counter', router);
app.get('/', userController.getUsers.bind(userController));
app.post('/', userController.addUser.bind(userController));


server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
