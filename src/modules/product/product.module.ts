import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { TypeOrmExModule } from 'src/ecommerce_api_nestjs_DB/typeorm-ex.module';

@Module({
  controllers: [ProductsController],
  imports: [TypeOrmExModule.forCustomRepository([ProductRepository])],
  providers: [ProductsService],
})
export class ProductsModule {}
