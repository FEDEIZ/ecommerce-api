import {
  Equals,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  matches,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import { MESSAGES } from 'src/utils/messages.utils';
import { REGEX } from 'src/utils/regex.utils';
import { PasswordMatchConstraint } from 'src/utils/validators.utils';
import { RoleEnum } from '../user.entity';

export class RegisterUserRequestDto {
  @IsString()
  @MinLength(3)
  first_name: string;

  @IsString()
  @MinLength(3)
  last_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
  password: string;

  @IsString()
  @Validate(PasswordMatchConstraint, ['password'], {
    message: MESSAGES.PASSWORD_MATCH_MESSAGE,
  })
  confirm: string;
}
