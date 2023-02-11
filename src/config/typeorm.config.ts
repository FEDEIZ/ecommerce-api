import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import Product from 'src/modules/product/product.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'fede',
  password: 'fedeIZ1993',
  database: 'ecommerce-api-nestjs',
  entities: [Product],
  synchronize: true,
};
