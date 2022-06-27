interface Icar1 {
  brand: string;
  model: number;
}
interface Icar2 {
  release: string;
}

class Car implements Icar1, Icar2 {
  constructor(public brand, public model, public release) {}
}

export {};
