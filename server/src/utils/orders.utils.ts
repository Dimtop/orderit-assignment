import { OrdersGetQuery } from '../types/orders.types';

export const buildMongooseQueryFromOrdersGetQuery = (
  ordersGetQuery: OrdersGetQuery,
) => {
  let mongooseQuery: any = {};

  if (ordersGetQuery.from) {
    mongooseQuery = {
      ...mongooseQuery,
      createdAt: {
        ...mongooseQuery.createdAt,
        $gte: ordersGetQuery.from,
      },
    };
  }

  if (ordersGetQuery.to) {
    mongooseQuery = {
      ...mongooseQuery,
      createdAt: {
        ...mongooseQuery.createdAt,
        $lt: ordersGetQuery.to,
      },
    };
  }

  if (ordersGetQuery.status) {
    mongooseQuery = {
      ...mongooseQuery,
      status: ordersGetQuery.status,
    };
  }

  if (ordersGetQuery.buyer) {
    mongooseQuery = {
      ...mongooseQuery,
      buyer: ordersGetQuery.buyer,
    };
  }

  return mongooseQuery;
};
