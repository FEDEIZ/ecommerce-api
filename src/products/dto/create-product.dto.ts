import { StatusProduct } from './../entities/product.entity';
import {
  IsEnum,
  IsInt,
  IsPositive,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(4)
  name: string;

  @IsPositive()
  price: number;

  @IsString()
  @MaxLength(150)
  description: string;

  @IsEnum(StatusProduct)
  status: StatusProduct;

  @IsPositive()
  @IsInt()
  stock: number;
}
