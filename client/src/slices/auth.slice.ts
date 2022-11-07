import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { IGenericResponse, ILoginData } from '../types/api.types';
import { IAuthInitialState } from '../types/state.types';
import { login } from '../utils/api.utils';

const initialState: IAuthInitialState = {
  isUserAuthenticated: Boolean(Cookies.get('accessToken'))
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (loginData: ILoginData, { dispatch }): Promise<IGenericResponse> => {
    const response = await login(loginData);
    return response;
  }
);
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isUserAuthenticated = false;
      Cookies.remove('email');
      Cookies.remove('accessToken');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.isUserAuthenticated = true;
        Cookies.set('email', action.payload.data.email);
        Cookies.set('accessToken', action.payload.data.id);
        Cookies.set('buyerId', action.payload.data.buyerId);
        Cookies.set('role', '1');
      }
    });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
