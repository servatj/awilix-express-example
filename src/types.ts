export type User = {
  name: string;
  age: number;
};

export type Ilogger = {
  info: (msg: string) => void;
  // error: (msg: string) => void;
};
