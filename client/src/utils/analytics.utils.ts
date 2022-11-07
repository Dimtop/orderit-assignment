/* eslint-disable no-var */
import { OrdersCostPerDay, OrdersNumberPerDay, ProductPreferences } from '../types/api.types';
import { IChartData } from '../types/app.types';

export const generateRandomColors = (colorsNumber: number) => {
  var colors: string[] = [];
  for (let i = 0; i < colorsNumber; i++) {
    let currentColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    while (colors.includes(currentColor)) {
      currentColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    colors.push(currentColor);
  }
  return colors;
};

export const genereateProductPreferencesChartData = (
  productPreferences: ProductPreferences
): IChartData => {
  return {
    labels: Object.keys(productPreferences),
    datasets: [
      {
        label: 'Number of product orders',
        data: Object.values(productPreferences),
        backgroundColor: generateRandomColors(Object.entries(productPreferences).length),
        borderWidth: 1
      }
    ]
  };
};

export const generateOrdersCostPerDayChartData = (
  orderCostPerDay: OrdersCostPerDay
): IChartData => {
  return {
    labels: Object.keys(orderCostPerDay),
    datasets: [
      {
        label: 'Orders cost',
        data: Object.values(orderCostPerDay),
        backgroundColor: 'blue',
        borderColor: 'lightblue',
        borderWidth: 2
      }
    ]
  };
};

export const generateOrdersNumberPerDayChartData = (
  orderNumberPerDay: OrdersNumberPerDay
): IChartData => {
  return {
    labels: Object.keys(orderNumberPerDay),
    datasets: [
      {
        label: 'Orders number',
        data: Object.values(orderNumberPerDay),
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(255, 99, 132, 0.8)',
        borderWidth: 2
      }
    ]
  };
};
