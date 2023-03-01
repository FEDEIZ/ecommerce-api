import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { RegisterUserRequestDto } from './dto/register-user.req.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private repository: UserRepository,
  ) {}

  async doUserRegistration(
    registerUser: RegisterUserRequestDto,
  ): Promise<User | HttpException | RegisterUserRequestDto> {
    try {
      const user = new User();
      user.first_name = registerUser.first_name;
      user.last_name = registerUser.last_name;
      user.email = registerUser.email;
      user.password = registerUser.password;
      return await this.repository.save(user);
    } catch (error) {
      return new HttpException(error.statusCode, error.message);
    }
  }

  async findAll(): Promise<User[] | undefined> {
    return await this.repository.find();
  }

  async findOne(uuid: string): Promise<User | undefined> {
    return await this.repository.findOneBy({ id: uuid });
  }

  // async update(
  //   uuid: string,
  //   updateUserDto: UpdateUserDto,
  // ): Promise<UpdateResult> {
  //   return await this.repository.update(uuid, updateUserDto);
  // }

  async remove(uuid: string): Promise<DeleteResult> {
    return await this.repository.delete(uuid);
  }
}
