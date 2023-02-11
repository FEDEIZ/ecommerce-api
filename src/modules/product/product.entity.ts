import { IEntity } from 'src/utils/IEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export default class Product extends IEntity {
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

// export class Product {
//   constructor(
//     public uuid: UUIDVersion,
//     public name: string,
//     public price: number,
//     public description: string,
//     public status: StatusProduct,
//     public stock: number,
//   ) {}
// }

export enum StatusProduct {
  Available = 'available',
  Unavailable = 'unavailable',
  Pause = 'pause',
}
