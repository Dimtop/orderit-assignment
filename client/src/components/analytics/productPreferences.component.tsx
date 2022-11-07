import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'rsuite';
import { getProductPreferencesThunk } from '../../slices/analytics.slice';
import { genereateProductPreferencesChartData } from '../../utils/analytics.utils';
import Text from '../text/text.component';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductPreferences = (props: any) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    }
  };

  const productPreferences = useSelector((state: any) => state.analytics.productPreferences);
  const productPreferencesLoading = useSelector(
    (state: any) => state.analytics.productPreferencesLoading
  );

  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (!productPreferences || Object.keys(productPreferences).length === 0) {
      dispatch(getProductPreferencesThunk(props.filters));
    }
  }, []);

  return productPreferencesLoading ? (
    <Loader />
  ) : Object.keys(productPreferences).length == 0 ? (
    <Text>No data found.</Text>
  ) : (
    <Pie options={options} data={genereateProductPreferencesChartData(productPreferences)} />
  );
};

export default ProductPreferences;
