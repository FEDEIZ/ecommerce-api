import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { RoleEnum } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  first_name: string;

  @IsString()
  @MinLength(3)
  last_name: string;

  @IsDateString()
  birth_date: string;

  @IsEmail()
  email: string;

  @IsUrl() // later to a specific validator to check for real url image
  profile_picture: string;

  @IsEnum(RoleEnum)
  role: RoleEnum;
}
