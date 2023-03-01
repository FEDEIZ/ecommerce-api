import { HttpStatus, ValidationPipe } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

const PASSWORD_VALIDATION = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const VALIDATIONS = { PASSWORD_VALIDATION };
