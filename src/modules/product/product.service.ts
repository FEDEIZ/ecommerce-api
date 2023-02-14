import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository) private repository: ProductRepository,
  ) {}
  async create(createProductDto: CreateProductDto) {
    return await this.repository.save(createProductDto);
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
