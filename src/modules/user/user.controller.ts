import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserRequestDto } from './dto/register-user.req.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
import { VALIDATIONS } from 'src/utils/validations.utils';
import { FirebaseService } from 'src/firebase/firebase.service';
import * as admin from 'firebase-admin';
@Controller('user')
export class UserController {
  private firebaseApp: admin.app.App;
  constructor(
    private readonly userService: UserService,
    private readonly firebase: FirebaseService,
  ) {
    this.firebaseApp = firebase.initFirebase();
  }

  @Post()
  async doUserRegistration(
    @Body(VALIDATIONS.PASSWORD_VALIDATION)
    registerUserRequestDto: RegisterUserRequestDto,
  ) {
    return await this.userService.doUserRegistration(registerUserRequestDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
    // const db = this.firebaseApp.firestore();
    // const users = [];
    // const usersCollection = await db.collection('users').get();
    // console.log(usersCollection.docs[0].data());
    // usersCollection.docs.forEach((doc) => users.push(doc.data()));
    // return users;
  }

  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return await this.userService.findOne(uuid);
  }

  // @Patch(':uuid')
  // async update(
  //   @Param('uuid', new ParseUUIDPipe()) uuid: string,
  //   @Body()
  //   updateUserDto: UpdateUserDto,
  // ) {
  //   return await this.userService.update(uuid, updateUserDto);
  // }

  @Delete(':uuid')
  async remove(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return await this.userService.remove(uuid);
  }
}
