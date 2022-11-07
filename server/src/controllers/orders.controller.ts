import { Controller, Get, Query } from '@nestjs/common';

import { OrdersService } from '../services/orders.service';
import {
  IOrdersGetDTO,
  OrdersCostPerDay,
  OrdersGetQuery,
  OrdersNumberPerDay,
  ProductPreferences,
} from '../types/orders.types';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  async getOrders(@Query() query: OrdersGetQuery): Promise<IOrdersGetDTO[]> {
    return await this.ordersService.getOrders(query);
  }

  @Get('/totalSpending')
  async getOrdersTotalSpending(
    @Query() query: OrdersGetQuery,
  ): Promise<number> {
    return await this.ordersService.getOrdersTotalSpending(query);
  }

  @Get('/productPreferences')
  async getProductPreferences(
    @Query() query: OrdersGetQuery,
  ): Promise<ProductPreferences> {
    return await this.ordersService.getProductPreferences(query);
  }

  @Get('/ordersCostPerDay')
  async getOrdersCostPerDay(
    @Query() query: OrdersGetQuery,
  ): Promise<OrdersCostPerDay> {
    return await this.ordersService.getOrdersCostPerDay(query);
  }

  @Get('/ordersNumberPerDay')
  async getOrdersNumberPerDay(
    @Query() query: OrdersGetQuery,
  ): Promise<OrdersNumberPerDay> {
    return await this.ordersService.getOrdersNumberPerDay(query);
  }

  @Get('/all')
  async getAllOrders(): Promise<IOrdersGetDTO[]> {
    return await this.ordersService.getAll();
  }
}
