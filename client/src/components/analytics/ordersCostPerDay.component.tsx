import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import Text from '../text/text.component';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'rsuite';
import { getOrdersCostPerDayThunk } from '../../slices/analytics.slice';
import { generateOrdersCostPerDayChartData } from '../../utils/analytics.utils';
import './analytics.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const OrdersCostPerDay = (props: any) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    }
  };

  const ordersCostPerDay = useSelector((state: any) => state.analytics.ordersCostPerDay);
  const ordersCostPerDayLoading = useSelector(
    (state: any) => state.analytics.ordersCostPerDayLoading
  );

  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (!ordersCostPerDay || Object.keys(ordersCostPerDay).length === 0) {
      dispatch(getOrdersCostPerDayThunk(props.filters));
    }
  }, []);

  return (
    <>
      {ordersCostPerDayLoading ? (
        <Loader />
      ) : Object.keys(ordersCostPerDay).length == 0 ? (
        <Text>No data found.</Text>
      ) : (
        <Line options={options} data={generateOrdersCostPerDayChartData(ordersCostPerDay)} />
      )}
    </>
  );
};

export default OrdersCostPerDay;
