import { IEntity } from 'src/utils/IEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

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

  @ManyToOne(() => User, (user) => user.products)
  user: User;
}

export enum StatusProduct {
  Available = 'available',
  Unavailable = 'unavailable',
  Pause = 'pause',
}
