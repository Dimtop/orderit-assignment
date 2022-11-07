import { BadRequestException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  ObjectId,
  Types,
  Schema as MongooseSchema,
  isObjectIdOrHexString,
} from 'mongoose';
import { SupplierDocument } from '../models/suppliers.model';

export interface IDeliveryAddress {
  fullname: string;
  address: string;
  area: string;
  postCode: string;
  phone: string;
}

export enum OrderStatus {
  DELIVERED = 'DELIVERED',
  PENDING = 'PENDING',
}

export enum ProductUnit {
  PIECE = 'PIECE',
}

export interface IOrderProduct {
  rejected: boolean;
  _id: ObjectId;
  quantity: number;
  unit: ProductUnit;
  price: number;
  productRef: ObjectId;
  name: string;
  category: string;
  description: string;
}

export interface IOrdersGetDTO {
  autoAccept: boolean;
  orderNumber: string;
  supplier: MongooseSchema.Types.ObjectId;
  buyer: MongooseSchema.Types.ObjectId;
  deliveryAddress: IDeliveryAddress;
  store: Types.ObjectId;
  deliveryDate: Date;
  cost: number;
  status: OrderStatus;
  comments: string;
  products: IOrderProduct[];
  createdAt: Date;
  updatedAt: Date;
}

export class OrdersGetQuery {
  @IsOptional()
  @IsString()
  sort: string;

  @IsOptional()
  @IsNumber()
  sortOrder: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  from: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  to: Date;

  @IsOptional()
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsOptional()
  @Type(() => Types.ObjectId)
  @Transform(({ value, key }) => {
    if (
      Types.ObjectId.isValid(value) &&
      new Types.ObjectId(value).toString() === value
    ) {
      return new Types.ObjectId(value);
    } else {
      throw new BadRequestException(`${key} is not a valid MongoId`);
    }
  })
  buyer: string;
}

export type ProductPreferences = {
  [key: string]: number;
};

export type OrdersCostPerDay = {
  [key: string]: number;
};

export type OrdersNumberPerDay = {
  [key: string]: number;
};
