import { IsOptional } from 'class-validator';
import { IEntity } from 'src/utils/IEntity';
import { BeforeInsert, Column, Entity, OneToMany, Unique } from 'typeorm';
import { Product } from '../product/product.entity';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User extends IEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  // @Column()
  // birth_date: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  profile_picture: string;

  @BeforeInsert()
  async setPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];
}

export enum RoleEnum {
  Visitor = 'visitor',
  Admin = 'admin',
  User = 'user',
}
