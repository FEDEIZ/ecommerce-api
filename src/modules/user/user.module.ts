import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmExModule } from 'src/config/typeorm-ex.module';
import { UserRepository } from './user.repository';
import { FirebaseService } from 'src/firebase/firebase.service';

@Module({
  controllers: [UserController],
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [UserService, FirebaseService],
  exports: [UserService],
})
export class UserModule {}
