import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductModel } from '../models/products.model';
import { IProductsGetDTO } from '../types/products.types';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: ProductModel,
  ) {}

  async getAll(): Promise<IProductsGetDTO[]> {
    return await this.productModel.find();
  }
}
