import { routes } from '../constants/router.constants';
import { IProtectedRoutes } from '../types/config.types';

export const protectedRoutes: IProtectedRoutes = {
  forbidden: [routes.ALL_ORDERS, routes.ANALYTICS],
  redirect: [routes.ROOT_ROUTE]
};
