import { Controller, Get } from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { IProductsGetDTO } from '../types/products.types';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/all')
  async getAllProducts(): Promise<IProductsGetDTO[]> {
    return await this.productsService.getAll();
  }
}
