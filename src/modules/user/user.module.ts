import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmExModule } from 'src/config/typeorm-ex.module';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [UserService],
})
export class UserModule {}
