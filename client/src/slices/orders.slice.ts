import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IOrdersGetReponseData } from '../types/api.types';
import { IOrdersInitialState } from '../types/state.types';
import { getAllOrders } from '../utils/api.utils';

const initialState: IOrdersInitialState = {
  orders: [],
  loading: true
};

export const getAllOrdersThunk = createAsyncThunk(
  'orders/getAllOrders',
  async (): Promise<IOrdersGetReponseData> => {
    return await getAllOrders();
  }
);

export const ordersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrdersThunk.fulfilled, (state, action) => {
      state.orders = action.payload.data;
      state.loading = false;
    });
  }
});

export default ordersSlice.reducer;
