import { OmitType, PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['role'] as const),
) {}
