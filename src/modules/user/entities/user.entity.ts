import { IEntity } from 'src/utils/IEntity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends IEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  birth_date: string;

  @Column()
  email: string;

  @Column()
  profile_picture: string;

  @Column()
  role: RoleEnum;

  //   @Column()
  //   phone_number: number
}

export enum RoleEnum {
  Visitor = 'visitor',
  Admin = 'admin',
  User = 'user',
}
