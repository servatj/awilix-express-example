import { Request, Response } from "express";

import { CounterService } from "../services/CounterService";

export class CounterController {
  counterService: CounterService;

  constructor({ counterService }: { counterService: CounterService }) {
    this.counterService = counterService;
  }

  increment(req: Request, res: Response) {
    const count = this.counterService.increment();
    res.json({ count });
  }

  getCount(req: Request, res: Response) {
    const count = this.counterService.getCount();
    res.json({ count });
  }
}
