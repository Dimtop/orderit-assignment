import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IGenericResponse } from '../types/api.types';
import { IAnalyticsInitialState } from '../types/state.types';
import {
  getUserProductPreferences,
  getOrdersCostPerDay,
  getOrdersNumberPerDay
} from '../utils/api.utils';

const initialState: IAnalyticsInitialState = {
  productPreferences: {},
  productPreferencesLoading: true,

  ordersCostPerDay: {},
  ordersCostPerDayLoading: true,

  ordersNumberPerDay: {},
  ordersNumberPerDayLoading: true
};

export const getProductPreferencesThunk = createAsyncThunk(
  'analytics/productPreferences',
  async (filters: any): Promise<IGenericResponse> => {
    const response = await getUserProductPreferences(filters);
    return response;
  }
);

export const getOrdersCostPerDayThunk = createAsyncThunk(
  'analytics/ordersCostPerDay',
  async (filters: any): Promise<IGenericResponse> => {
    const response = await getOrdersCostPerDay(filters);
    return response;
  }
);

export const getOrdersNumberPerDayThunk = createAsyncThunk(
  'analytics/ordersNumberPerDay',
  async (filters: any): Promise<IGenericResponse> => {
    const response = await getOrdersNumberPerDay(filters);
    return response;
  }
);
export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductPreferencesThunk.pending, (state: any, action: any) => {
        state.productPreferences = {};
        state.productPreferencesLoading = true;
      })
      .addCase(getProductPreferencesThunk.fulfilled, (state: any, action: any) => {
        state.productPreferencesLoading = false;
        state.productPreferences = action.payload.success ? action.payload.data : {};
      })
      .addCase(getOrdersCostPerDayThunk.pending, (state: any, action: any) => {
        state.ordersCostPerDay = {};
        state.ordersCostPerDayLoading = true;
      })
      .addCase(getOrdersCostPerDayThunk.fulfilled, (state: any, action: any) => {
        state.ordersCostPerDayLoading = false;
        state.ordersCostPerDay = action.payload.success ? action.payload.data : {};
      })
      .addCase(getOrdersNumberPerDayThunk.pending, (state: any, action: any) => {
        state.ordersNumberPerDay = {};
        state.ordersNumberPerDayLoading = true;
      })
      .addCase(getOrdersNumberPerDayThunk.fulfilled, (state: any, action: any) => {
        state.ordersNumberPerDayLoading = false;
        state.ordersNumberPerDay = action.payload.success ? action.payload.data : {};
      });
  }
});

export default analyticsSlice.reducer;
