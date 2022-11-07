import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { ICompanyDetails, ISupplierDetails } from '../types/suppliers.types';

@Schema()
export class Supplier {
  @Prop({ required: true })
  onBoarding: boolean;
  @Prop({ required: true })
  user: Types.ObjectId;
  @Prop({ required: true })
  createdAt: Date;
  @Prop({ required: true })
  updatedAt: Date;
  @Prop({ type: Object, required: true })
  companyDetails: ICompanyDetails;
  @Prop({ type: Object, required: true })
  supplierDetails: ISupplierDetails;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
export type SupplierDocument = Supplier & Document;
export type SupplierModel = Model<SupplierDocument>;
