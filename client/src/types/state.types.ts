import { IOrder, IUser, OrdersCostPerDay, ProductPreferences } from './api.types';

export interface IUsersInitialState {
  users: IUser[];
  loading: boolean;
}

export interface IOrdersInitialState {
  orders: IOrder[];
  loading: boolean;
}

export interface IAnalyticsInitialState {
  productPreferences: ProductPreferences;
  productPreferencesLoading: boolean;

  ordersCostPerDay: OrdersCostPerDay;
  ordersCostPerDayLoading: boolean;

  ordersNumberPerDay: OrdersCostPerDay;
  ordersNumberPerDayLoading: boolean;
}

export enum AppTheme {
  DARK = 'dark',
  LIGHT = 'light'
}
export interface IAppInitialState {
  isMenuOpen: boolean;
  theme: AppTheme;
}

export interface IAuthInitialState {
  isUserAuthenticated: boolean;
}

export interface IFiltersState {
  buyer?: string;
  from?: Date;
  to?: Date;
  sort?: string;
}
