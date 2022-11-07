/* eslint-disable prefer-const */
/* eslint-disable no-var */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument, OrderModel } from '../models/orders.model';
import { Supplier, SupplierModel } from '../models/suppliers.model';
import {
  IOrdersGetDTO,
  OrdersCostPerDay,
  OrdersGetQuery,
  OrdersNumberPerDay,
  ProductPreferences,
} from '../types/orders.types';
import { buildMongooseQueryFromOrdersGetQuery } from '../utils/orders.utils';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: OrderModel,
    @InjectModel(Supplier.name)
    private suppliersModel: SupplierModel,
  ) {}

  async getAll(): Promise<IOrdersGetDTO[]> {
    return await this.orderModel.find();
  }

  async getOrders(query: OrdersGetQuery): Promise<IOrdersGetDTO[]> {
    const mongooseQuery = buildMongooseQueryFromOrdersGetQuery(query);
    const orders = await this.orderModel
      .find(mongooseQuery)
      .populate({
        path: 'supplier',
      })
      .sort(query.sort);
    return orders;
  }

  async getOrdersTotalSpending(query: OrdersGetQuery): Promise<number> {
    return await (
      await this.getOrders(query)
    ).reduce((total, currOrder) => total + currOrder.cost, 0);
  }

  async getProductPreferences(
    query: OrdersGetQuery,
  ): Promise<ProductPreferences> {
    const orders = await this.getOrders(query);

    return orders.reduce<ProductPreferences>(
      (
        productPreferences: ProductPreferences,
        currentOrder: OrderDocument,
      ): ProductPreferences => {
        for (let product of currentOrder.products) {
          if (productPreferences[product.name]) {
            productPreferences[product.name] =
              productPreferences[product.name] + product.quantity;
          } else {
            productPreferences[product.name] = product.quantity;
          }
        }
        return productPreferences;
      },
      {} as ProductPreferences,
    );
  }

  async getOrdersCostPerDay(query: OrdersGetQuery): Promise<OrdersCostPerDay> {
    const orders = await this.getOrders(query);

    return orders.reduce<OrdersCostPerDay>(
      (
        ordersCostPerDay: ProductPreferences,
        currentOrder: OrderDocument,
      ): OrdersCostPerDay => {
        const dateDiscriminator = new Date(currentOrder.createdAt)
          .toISOString()
          .substring(0, 10);
        if (ordersCostPerDay[dateDiscriminator]) {
          ordersCostPerDay[dateDiscriminator] += currentOrder.cost;
        } else {
          ordersCostPerDay[dateDiscriminator] = currentOrder.cost;
        }
        return ordersCostPerDay;
      },
      {} as OrdersCostPerDay,
    );
  }

  async getOrdersNumberPerDay(
    query: OrdersGetQuery,
  ): Promise<OrdersNumberPerDay> {
    const orders = await this.getOrders(query);

    return orders.reduce<OrdersNumberPerDay>(
      (
        ordersCostPerDay: ProductPreferences,
        currentOrder: OrderDocument,
      ): OrdersNumberPerDay => {
        const dateDiscriminator = new Date(currentOrder.createdAt)
          .toISOString()
          .substring(0, 10);
        if (ordersCostPerDay[dateDiscriminator]) {
          ordersCostPerDay[dateDiscriminator]++;
        } else {
          ordersCostPerDay[dateDiscriminator] = 1;
        }
        return ordersCostPerDay;
      },
      {} as OrdersNumberPerDay,
    );
  }
}
