import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Types, Schema as MongooseSchema } from 'mongoose';

import {
  IDeliveryAddress,
  OrderStatus,
  IOrderProduct,
} from '../types/orders.types';

@Schema()
export class Order {
  @Prop({ required: true })
  autoAccept: boolean;
  @Prop({ required: true })
  orderNumber: string;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Supplier' })
  supplier: MongooseSchema.Types.ObjectId;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Buyer' })
  buyer: MongooseSchema.Types.ObjectId;
  @Prop({ type: Object, required: true })
  deliveryAddress: IDeliveryAddress;
  @Prop({ required: true })
  store: Types.ObjectId;
  @Prop({ required: true })
  deliveryDate: Date;
  @Prop({ required: true })
  cost: number;
  @Prop({ required: true })
  status: OrderStatus;
  @Prop({ required: true })
  comments: string;
  @Prop({ required: true })
  products: IOrderProduct[];
  @Prop({ required: true })
  createdAt: Date;
  @Prop({ required: true })
  updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
export type OrderDocument = Order & Document;
export type OrderModel = Model<OrderDocument>;
