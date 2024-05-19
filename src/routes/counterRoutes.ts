import container from '../container';
import { CounterController } from '../controllers/CounterController'
import express from 'express';
// const { makeInvoker } = require('awilix-express');
export const router = express.Router();

// const api = makeInvoker(counterController);
const counterController = container.resolve<CounterController>('counterController');

router.post('/increment', counterController.increment.bind(counterController));
router.get('/count', counterController.getCount.bind(counterController));
