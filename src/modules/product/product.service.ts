import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    try {
    } catch {}
    return 'This action adds a new product';
  }

  findAll() {
    try {
    } catch {}
    return `This action returns all products`;
  }

  findOne(uuid: string) {
    try {
    } catch {}
    return `This action returns a #${uuid} product`;
  }

  update(uuid: string, updateProductDto: UpdateProductDto) {
    try {
      console.log(updateProductDto);
    } catch {}
    return `This action updates a #${uuid} product`;
  }

  remove(uuid: string) {
    try {
    } catch {}
    return `This action removes a #${uuid} product`;
  }
}
