import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository) private repository: ProductRepository,
  ) {}
  async create(
    createProductDto: CreateProductDto,
  ): Promise<Product | undefined> {
    return await this.repository.save(createProductDto);
  }

  async findAll(): Promise<Product[] | undefined> {
    return await this.repository.find();
  }

  async findOne(uuid: string): Promise<Product | undefined> {
    return await this.repository.findOneBy({ id: uuid });
  }

  async update(uuid: string, updateProductDto: UpdateProductDto) {
    return await this.repository.update(uuid, updateProductDto);
  }

  async remove(uuid: string) {
    return 'this action delete a product'; //await this.repository.delete({ id: uuid });
  }
}
