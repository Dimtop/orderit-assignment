import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slices/users.slice';
import appReducer from '../slices/app.slice';
import authReducer from '../slices/auth.slice';
import ordersSlice from '../slices/orders.slice';
import analyticsSlice from '../slices/analytics.slice';

export default configureStore({
  reducer: {
    users: usersReducer,
    app: appReducer,
    auth: authReducer,
    orders: ordersSlice,
    analytics: analyticsSlice
  }
});
