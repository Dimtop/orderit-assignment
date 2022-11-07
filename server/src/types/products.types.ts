import { Types } from 'mongoose';

export interface IProductMinumumPerUnit {
  PIECE: number;
  KG: number;
  BOX: number;
  BAG: number;
}

export interface IPricesPerUnit {
  PIECE: number;
  KG: number;
  BOX: number;
  BAG: number;
}

export interface IAvailabilityPerUnit {
  PIECE: number;
  KG: number;
  BOX: number;
  BAG: number;
}

export enum ProductStatus {
  ACTIVE = 'ACTIVE',
}

export interface IProductsGetDTO {
  minimumPerUnit: IProductMinumumPerUnit;
  deal: boolean;
  name: string;
  brandName: string;
  productCode: string;
  description: string;
  category: Types.ObjectId;
  supplierId: Types.ObjectId;
  status: ProductStatus;
  pricesPerUnit: IPricesPerUnit;
  availabilityPerUnit: IAvailabilityPerUnit;
  createdAt: Date;
  updatedAt: Date;
}
