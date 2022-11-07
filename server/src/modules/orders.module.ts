import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from '../controllers/orders.controller';

import { Order, OrderSchema } from '../models/orders.model';
import { Supplier, SupplierSchema } from '../models/suppliers.model';
import { OrdersService } from '../services/orders.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Order.name,
        schema: OrderSchema,
        collection: 'orders',
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Supplier.name,
        schema: SupplierSchema,
        collection: 'suppliers',
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
