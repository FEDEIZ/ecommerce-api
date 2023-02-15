import { IEntity } from 'src/utils/IEntity';
import { Column, Entity } from 'typeorm';

@Entity('products')
export class Product extends IEntity {
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  status: StatusProduct;

  @Column()
  stock: number;
}

export enum StatusProduct {
  Available = 'available',
  Unavailable = 'unavailable',
  Pause = 'pause',
}
