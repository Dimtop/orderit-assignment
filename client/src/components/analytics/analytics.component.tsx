//Hooks
import { useState } from 'react';

//Libraries
import Cookies from 'js-cookie';

//State
import {
  getOrdersCostPerDayThunk,
  getOrdersNumberPerDayThunk,
  getProductPreferencesThunk
} from '../../slices/analytics.slice';

//Components
import AnalyticsWidget from './analyticsWidget.component';
import OrdersCostPerDay from './ordersCostPerDay.component';
import OrdersNumberPerDay from './ordersNumberPerDay.component';
import ProductPreferences from './productPreferences.component';

//Styles
import './analytics.css';

const Analytics = (props: any) => {
  const [productPreferencesFilters] = useState({
    buyer: Cookies.get('buyerId')
  });

  const [ordersCostPerDayFilters] = useState({
    buyer: Cookies.get('buyerId'),
    sort: 'createdAt'
  });

  const [ordersNumberPerDayFilters] = useState({
    buyer: Cookies.get('buyerId'),
    sort: 'createdAt'
  });
  return (
    <div id="analytics">
      <AnalyticsWidget
        width={'30%'}
        title="Product preferences"
        dateRangeFilter={true}
        filters={productPreferencesFilters}
        thunk={getProductPreferencesThunk}>
        <ProductPreferences filters={productPreferencesFilters} />
      </AnalyticsWidget>
      <AnalyticsWidget
        width={'68%'}
        title="Orders cost per day"
        dateRangeFilter={true}
        filters={ordersCostPerDayFilters}
        thunk={getOrdersCostPerDayThunk}>
        <OrdersCostPerDay filters={ordersCostPerDayFilters} />
      </AnalyticsWidget>
      <AnalyticsWidget
        title="Orders number per day"
        dateRangeFilter={true}
        filters={ordersNumberPerDayFilters}
        thunk={getOrdersNumberPerDayThunk}>
        <OrdersNumberPerDay filters={ordersNumberPerDayFilters} />
      </AnalyticsWidget>
    </div>
  );
};

export default Analytics;
