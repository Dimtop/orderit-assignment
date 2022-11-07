/* eslint-disable no-unused-vars */

export interface IGenericResponse {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: any;
}

export interface IUser {
  id: string;
  email: string;
}

export interface ILoginData {
  email: string;
}

export interface IDeliveryAddress {
  fullname: string;
  address: string;
  area: string;
  postCode: string;
  phone: string;
}

export enum OrderStatus {
  DELIVERED = 'DELIVERED',
  PENDING = 'PENDING'
}

export enum ProductUnit {
  PIECE = 'PIECE'
}

export interface IOrderProduct {
  rejected: boolean;
  _id: string;
  quantity: number;
  unit: ProductUnit;
  price: number;
  productRef: string;
  name: string;
  category: string;
  description: string;
}
export interface ICompanyDetails {
  name: string;
  afm: string;
  description: string;
  address: string;
  city: string;
  postCode: string;
}

export interface ISupplierDetails {
  fullName: string;
  occupation: string;
  address: string;
  city: string;
  phone: string;
}

export interface ISupplier {
  onBoarding: boolean;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  companyDetails: ICompanyDetails;
  supplierDetails: ISupplierDetails;
}
export interface IOrder {
  autoAccept: boolean;
  orderNumber: string;
  supplier?: ISupplier;
  buyer: string;
  deliveryAddress: IDeliveryAddress;
  store: string;
  deliveryDate: Date;
  cost: number;
  status: OrderStatus;
  comments: string;
  products: IOrderProduct[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserGetReponseData extends Omit<IGenericResponse, 'data'> {
  data: IUser[] & IUser;
}

export interface IOrdersGetReponseData extends Omit<IGenericResponse, 'data'> {
  data: IOrder[] & IOrder;
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
