export class CounterService {
  count: number
  
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
    return this.count;
  } 

  getCount() {
    return this.count;
  }
}
