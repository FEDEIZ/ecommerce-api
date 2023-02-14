import { CustomRepository } from 'src/ecommerce_api_nestjs_DB/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@CustomRepository(Product)
export class ProductRepository extends Repository<Product> {}
