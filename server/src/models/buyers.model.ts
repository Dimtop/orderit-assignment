import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Types, Schema as MongooseSchema } from 'mongoose';
import { IDeliveryAddress } from '../types/orders.types';
import { ICompanyDetails, ISupplierDetails } from '../types/suppliers.types';
import { UserDocument } from './users.model';

@Schema()
export class Buyer {
  @Prop()
  paymentMethods: Array<any>;
  @Prop()
  favouriteProducts: Array<Types.ObjectId>;
  @Prop({ required: true })
  eligible: boolean;
  @Prop({ required: true })
  onBoarding: boolean;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: MongooseSchema.Types.ObjectId & UserDocument;
  @Prop({ required: true })
  basket: Types.ObjectId;
  @Prop({ required: true })
  createdAt: Date;
  @Prop({ required: true })
  updatedAt: Date;
  @Prop({ required: true })
  addresses: IDeliveryAddress[];
  @Prop({ required: true })
  defaultStore: Types.ObjectId;
  @Prop({ required: true })
  name: string;
}

export const BuyerSchema = SchemaFactory.createForClass(Buyer);
export type BuyerDocument = Buyer & Document;
export type BuyerModel = Model<BuyerDocument>;
