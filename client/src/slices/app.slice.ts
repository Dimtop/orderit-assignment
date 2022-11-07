import { createSlice } from '@reduxjs/toolkit';
import { IAppInitialState } from '../types/state.types';
import { AppTheme } from '../types/state.types';

const initialState: IAppInitialState = {
  isMenuOpen: false,
  theme: AppTheme.DARK
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    changeTheme: (state) => {
      state.theme === AppTheme.DARK
        ? (state.theme = AppTheme.LIGHT)
        : (state.theme = AppTheme.DARK);
    }
  }
});

export const { changeTheme } = appSlice.actions;
export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
