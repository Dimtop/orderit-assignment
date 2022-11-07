import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import {
  IAvailabilityPerUnit,
  IPricesPerUnit,
  IProductMinumumPerUnit,
  ProductStatus,
} from '../types/products.types';

@Schema()
export class Product {
  @Prop({ type: Object, required: true })
  minimumPerUnit: IProductMinumumPerUnit;
  @Prop({ required: true })
  deal: boolean;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  brandName: string;
  @Prop({ required: true })
  productCode: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  category: Types.ObjectId;
  @Prop({ required: true })
  supplierId: Types.ObjectId;
  @Prop({ required: true })
  status: ProductStatus;
  @Prop({ type: Object, required: true })
  pricesPerUnit: IPricesPerUnit;
  @Prop({ type: Object, required: true })
  availabilityPerUnit: IAvailabilityPerUnit;
  @Prop({ required: true })
  createdAt: Date;
  @Prop({ required: true })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = Product & Document;
export type ProductModel = Model<ProductDocument>;
