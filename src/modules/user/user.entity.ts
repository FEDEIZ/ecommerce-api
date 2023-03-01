import { IsOptional } from 'class-validator';
import { IEntity } from 'src/utils/IEntity';
import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity('users')
export class User extends IEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  birth_date: string;

  @Column({ unique: true })
  //@Unique(['email'])
  email: string;

  @Column({ nullable: true })
  profile_picture: string;

  // @Column()
  // role: RoleEnum;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];
  //   @Column()
  //   phone_number: number
}

export enum RoleEnum {
  Visitor = 'visitor',
  Admin = 'admin',
  User = 'user',
}
