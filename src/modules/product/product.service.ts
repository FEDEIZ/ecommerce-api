import { HttpCode, HttpException, Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, EntityManager, UpdateResult } from 'typeorm';
import { User } from '../user/user.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository) private repository: ProductRepository,
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}
  async create(
    createProductDto: CreateProductDto,
  ): Promise<Product | HttpException> {
    try {
      const user = await this.entityManager.findOneBy(User, {
        id: createProductDto.userId,
      });
      if (!user)
        throw new Error(
          `Cannot find a user with ${createProductDto.userId} id`,
        );
      const product = { ...createProductDto, user: user };
      return await this.repository.save(product);
    } catch (error) {
      return new HttpException(error.statusCode, error.message);
    }
  }

  async findAll(): Promise<Product[] | undefined> {
    return await this.repository.find();
  }

  async findOne(uuid: string): Promise<Product | undefined> {
    return await this.repository.findOneBy({ id: uuid });
  }

  async update(
    uuid: string,
    updateProductDto: UpdateProductDto,
  ): Promise<UpdateResult> {
    return await this.repository.update(uuid, updateProductDto);
  }

  async remove(uuid: string): Promise<DeleteResult> {
    return await this.repository.delete(uuid);
    //return 'this action delete a product'; //await this.repository.delete({ id: uuid });
  }
}
