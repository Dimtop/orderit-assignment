import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'rsuite';
import { getOrdersNumberPerDayThunk } from '../../slices/analytics.slice';
import { generateOrdersNumberPerDayChartData } from '../../utils/analytics.utils';
import Text from '../text/text.component';
import './analytics.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OrdersNumberPerDay = (props: any) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    }
  };

  const ordersNumberPerDay = useSelector((state: any) => state.analytics.ordersNumberPerDay);
  const ordersNumberPerDayLoading = useSelector(
    (state: any) => state.analytics.ordersNumberPerDayLoading
  );

  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (!ordersNumberPerDay || Object.keys(ordersNumberPerDay).length === 0) {
      dispatch(getOrdersNumberPerDayThunk(props.filters));
    }
  }, []);

  return (
    <>
      {ordersNumberPerDayLoading ? (
        <Loader />
      ) : Object.keys(ordersNumberPerDay).length == 0 ? (
        <Text>No data found.</Text>
      ) : (
        <Bar options={options} data={generateOrdersNumberPerDayChartData(ordersNumberPerDay)} />
      )}
    </>
  );
};

export default OrdersNumberPerDay;
