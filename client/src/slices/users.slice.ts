import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUserGetReponseData } from '../types/api.types';
import { IUsersInitialState } from '../types/state.types';
import { getAllUsers } from '../utils/api.utils';

const initialState: IUsersInitialState = {
  users: [],
  loading: true
};

export const getAllUsersThunk = createAsyncThunk(
  'user/getAllUsers',
  async (): Promise<IUserGetReponseData> => {
    return await getAllUsers();
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.loading = false;
    });
  }
});

export default usersSlice.reducer;
