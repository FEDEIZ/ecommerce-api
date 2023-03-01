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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
