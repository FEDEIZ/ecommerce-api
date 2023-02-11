import { UUIDVersion } from 'class-validator';

export class Product {
  constructor(
    public uuid: UUIDVersion,
    public name: string,
    public price: number,
    public description: string,
    public status: boolean,
    public stock: number,
  ) {}
}

export enum StatusProduct {
  Available = 'available',
  Unavailable = 'unavailable',
  Pause = 'pause',
}
